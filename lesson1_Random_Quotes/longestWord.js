// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// Method 1
function findLongestWordLength(str) {
    var newStr = str.split(' ');
    var longestWord = 0;

  for(var i = 0; i < strSplit.length; i++){

    if(newStr[i].length > longestWord){
	    longestWord = newStr[i].length;
     }

  }

  return longestWord;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// Method 2
    function findLongestWordLength(str) {
        var longestWord = str.split(' ').sort(function(a, b) { 

            return b.length - a.length; 
        });

        return longestWord[0].length;
      }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));