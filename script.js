const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const quoteLink = document.getElementById('quote-link');
const quoteBtn = document.getElementById('quote-btn');
const languageValue = document.getElementById('change-lang');

// Fetch quote from API
async function fetchQuote()
{
    let language = languageValue.value;

    // Sending request through proxy to bypass CORS error
    let apiUrl = `https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=${language}`

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // If author is blank, set to Unknown
        if (data.authorText === '') {
            authorText.innerText = 'Unknown';
        } else {
            authorText.innerText = data.quoteAuthor;
        }
        
        quoteText.innerText = data.quoteText;
        quoteLink.setAttribute('href', data.quoteLink)
        
    } catch (error) {
        // If there is an error, run function again
        fetchQuote();
    }  
}

quoteBtn.addEventListener('click', fetchQuote);

// On load (loads a quote when page loads)
fetchQuote();