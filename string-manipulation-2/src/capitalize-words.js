/* exported capitalizeWords */

// define a function named capitalziedWords with single parameter(string)
// define new variable that will make string all lowercase letters
// split words by their spaces
// create a for loop that will iterate through the words
// loop will iterate each word at index 0 and capitalized that letter, the rest of the word will remain lowercased
// use the join method to rejoin words at the end of the loops iterations.

function capitalizeWords(string) {
  var splitWords = string.toLowerCase();
  splitWords = string.split(' ');
  for (var i = 0; i < splitWords.length; i++) {
    splitWords[i] = splitWords[i][0].toUpperCase() + splitWords[i].substr(1);
  }
  return splitWords.join(' ');
}
