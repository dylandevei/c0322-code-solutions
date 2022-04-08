/* exported lastChars */
// define a new function named lastChars with two parameters (length) & string
// use the slice method on string with a negative (length) number and assign the result of that expression to variable newString
// the string will count from the back up and return the characters once length has counted up to that number
// return the variable newString

function lastChars(length, string) {
  var newString = string.slice(-length);
  return newString;
}
