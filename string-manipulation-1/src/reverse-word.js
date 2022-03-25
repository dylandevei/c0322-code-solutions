/* exported reverseWord */

function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += (word[i]);
  } return newWord;
}

// define function with one parameter (word)
// declare variable that is an empty string
// create for loop to push reverse values into new string
// return newWord string
