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
// initialized i to start at end of the string
// set condition for i to equal 0 so it will stop once string has gone through each index from begginning to the end
// decrement i by 1 each iteration of the loop
// add and assign each value of the word index to empty word string
// return newWord string once each letter has been added to it
