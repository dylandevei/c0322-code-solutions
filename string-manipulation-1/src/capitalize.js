/* exported capitalize */
function capitalize(word) {
  var firstIndex = word[0];
  var firstLetter = firstIndex.toUpperCase();
  var restIndex = word.slice(1);
  var lowerWord = restIndex.toLowerCase();
  return (firstLetter + lowerWord);
}
// define function with one parameter (word)
// create variable to first index at word[0]
// convert first letter of string to uppercase and store into new variable
// slice rest of word from variable and convert to all lower case
// concatenate the variable firstIndex to restIndex to create word with capitalized first letter and the lest of the letters lowercase
