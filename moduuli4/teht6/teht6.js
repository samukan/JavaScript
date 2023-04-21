const form = document.querySelector('form');
const input = document.querySelector('input');
const resultsContainer = document.querySelector('#results');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const searchTerm = input.value;

  fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      resultsContainer.innerHTML = '';
      data.result.forEach(result => {
        const article = document.createElement('article');
        const p = document.createElement('p');
        p.textContent = result.value;
        article.appendChild(p);
        resultsContainer.appendChild(article);
      });
    })
    .catch(error => console.error(error));
});
