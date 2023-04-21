document.querySelector('form').addEventListener('submit', async function(evt) {
  evt.preventDefault();

  const response = await fetch(`https://api.tvmaze.com/search/shows?q=girls`);

  const data = await response.json();

  console.log(data);
});
