document.getElementById('fetch-data').addEventListener('click', async () => {
  const output = document.getElementById('output');
  output.textContent = "Fetching Kanye's Quote...";

  try {
    // Fetch a random quote from the Kanye API
    const response = await fetch("https://api.kanye.rest");
    const data = await response.json();

    // Display the quote from the API response
    output.textContent = data.quote;
  } catch (error) {
    output.textContent = "Error fetching data.";
    console.error(error);
  }
});