/* exported ransomCase */

// define a new function named ransomCase with single parameter (string)
// create new variable, lowerWord, that will convert string to lowercase and split each character of the word
// create a for loop that will iterate and capitalized each other letter
// start loop on 1 so the front letter will remain lowercased and the letter that follows will become uppercase and will skip every other letter from then on
// uppercase each letter starting after the first letter
// rejoin the words as ransomCased

function ransomCase(string) {
  var lowerWord = string.toLowerCase().split('');
  for (var i = 1; i < lowerWord.length; i += 2) {
    lowerWord[i] = lowerWord[i].toUpperCase();
  }
  return lowerWord.join('');
}
