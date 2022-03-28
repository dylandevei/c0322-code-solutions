/* exported capitalizeWord */

// define function named capitalizedWord with single parameter (word)
// assign first letter at index 0 to new variable (firstIndex)
// convert firstIndex to uppercase and assign to new variable firstLetter
// slice rest of letters from word and assign to new variable restIndex
// convert restIndex to all lowercase and assign to new variable lowerWord
// concatenate firstLetter variable with lowerWord variable and assign to new variable newWord (word with capitalized first letter and lowercast tail)
// create special condition to check if the newWord will be Javascript
// return special condition of (Javascript) to be JavaScript
// allow rest of the words to return as is with newVariable

function capitalizeWord(word) {
  var firstIndex = word[0];
  var firstLetter = firstIndex.toUpperCase();
  var restIndex = word.slice(1);
  var lowerWord = restIndex.toLowerCase();
  var newWord = (firstLetter + lowerWord);
  if (newWord === 'Javascript') {
    return 'JavaScript';
  } else if (newWord !== 'javascript') {
    return newWord;
  }
}
