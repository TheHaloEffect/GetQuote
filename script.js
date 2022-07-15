const api_url ="https://zenquotes.io/api/random/";

async function fetchQuote(api_url)
{
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data[0]);
}

fetchQuote(api_url);