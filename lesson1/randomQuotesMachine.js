 // 1. navigation - done
// 2. add event listener - done
// 3. create data structure with quotes - done
// 4. get random quote
// 5. display random quote

// Navigation
var p = document.getElementById('quote');
var button = document.querySelector('button');

var quotes = ['"Just keep moving forward, and don’t give a shit about what anyone thinks. Do what you have to do, for you" - Johnny Depp',
              '"One day the people that didn’t believe in you will tell everyone how they met you" - Johnny Depp',
              '"People cry not because they’re weak, it’s because they’ve been strong for too long" - Johnny Depp'];

function getRandomQuote() {
    p.innerHTML = quotes[Math.floor(Math.random()*quotes.length)];
}

// Get random quote on init
getRandomQuote();

// Add event listener for random quote button
button.addEventListener('click', getRandomQuote);