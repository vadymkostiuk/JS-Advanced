const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const resetBtn = document.querySelector('.reset');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(function (blob) {
    return blob.json();
  })
  .then(function (data) {
    cities.push(...data);
  });

function findMatches(text, cities) {
  return cities.filter(function (place) {
    const regex = new RegExp(text, 'g');
    let cityToLowerCase = place.city.toLowerCase();
    let stateToLowerCase = place.state.toLowerCase();
    return cityToLowerCase.match(regex) || stateToLowerCase.match(regex);
  })

}

function displayMatches() {
    const valueToLowerCase = this.value.toLowerCase();
    const matchArray = findMatches(valueToLowerCase, cities);

    suggestions.innerHTML = matchArray.map(place => {
      const regex = new RegExp(this.value, 'gi');
      const city = place.city.replace(regex, `<span class="city-state-bg">${this.value}</span>`);
      const state = place.state.replace(regex, `<span class="city-state-bg">${this.value}</span>`);
      return `
            <li>
                <span><span class="city-state">city</span> ${city} <span class="city-state">state</span> ${state} </span>
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
                         <li>Filter for a city</li>
                         <li>or a state</li>
                         `
}

resetBtn.addEventListener('click', function (){
  searchInput.value = '';
  resetBtn.style.display = 'none';
  clearList()
});
searchInput.addEventListener('keyup', displayMatches);


