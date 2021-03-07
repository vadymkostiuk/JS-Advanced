const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const resetBtn = document.querySelector('.reset');

const articles = [];

function getAPI (value) {

  fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&api-key=g014wgB250w7u9hHogrdOicpS1ovTBuE`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      articles.push(...data.response.docs);
      console.log(data.response.docs)
    });

}

function findMatches(text, articles) {
  return articles.filter(function (article) {
    const regex = new RegExp(text, 'g');
    let articleToLowerCase = article.headline.main.toLowerCase();
    console.log(article.headline.main)
    return articleToLowerCase.match(regex);
  })
}

function debounce(func, wait, immediate) {
  let timeout;

  return function() {
    let context = this, args = arguments;

    let later = function() {
      timeout = null;

      if (!immediate) func.apply(context, args);

    };

    let callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

function displayMatches() {
  getAPI(this.value);

  const valueToLowerCase = this.value.toLowerCase();
  const matchArray = findMatches(valueToLowerCase, articles);

  suggestions.innerHTML = matchArray.map( article =>{
    const regex = new RegExp(this.value, 'gi');
    const city = article.headline.main.replace(regex, `<span class="article-bg">${this.value}</span>`);
    return `
            <li>
                <span>${city}</span>
                <a href="${article.web_url}" target="_blank" class="link">Link to the article here</a>
            </li>
        `
  }).join('');

  if (this.value) {
    resetBtn.style.display = 'block';
    suggestions.style.display = 'block';
  } else {
    resetBtn.style.display = 'none';
    clearList();
  }

}

function clearList() {
  suggestions.innerHTML = `
                         <li>Filter by articles</li>
                         `
}

resetBtn.addEventListener('click', function (){
  searchInput.value = '';
  resetBtn.style.display = 'none';
  clearList()
});

searchInput.addEventListener('input', debounce(displayMatches, 1500));


