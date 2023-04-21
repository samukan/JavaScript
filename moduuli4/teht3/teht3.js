document.addEventListener('DOMContentLoaded', function() {


document.querySelector('form').addEventListener('submit', async function(evt) {
  evt.preventDefault();

  const query = document.querySelector('#query').value;

  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);

  const data = await response.json();

  const resultsContainer = document.querySelector('#results');
  resultsContainer.innerHTML = '';

  data.forEach(function(tvShow) {
    const article = document.createElement('article');

    const nameElement = document.createElement('h2');
    nameElement.textContent = tvShow.show.name;

    const linkElement = document.createElement('a');
    linkElement.href = tvShow.show.url;
    linkElement.target = '_blank';
    linkElement.textContent = tvShow.show.url;

    const imageElement = document.createElement('img');
    imageElement.src = tvShow.show.image?.medium;
    imageElement.alt = tvShow.show.name;

    const summaryElement = document.createElement('div');
    summaryElement.innerHTML = tvShow.show.summary;

    article.appendChild(nameElement);
    article.appendChild(linkElement);
    article.appendChild(imageElement);
    article.appendChild(summaryElement);

    resultsContainer.appendChild(article);
  });
})});
