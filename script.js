const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');

// Fetch quote from API
async function fetchQuote()
{
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        if (data.authorText === '') {
            authorText.innerText = 'Unknown';
        } else {
            authorText.innerText = data.quoteAuthor;
        }
        quoteText.innerText = data.quoteText;
        
    } catch (error) {
        // If there is an error, run function again
        fetchQuote();
        console.log(error.message);
    }  
}

fetchQuote();