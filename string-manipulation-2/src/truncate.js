/* exported truncate */

// define function named truncate with two arguments, length and string
// return substring of the string starting at length given in function arugument
// first argument will be how many letters you want to keep in the output and use 0 as second argument of the truncate method so it will not take away any letters from the front of the string
// concatenated the elipsis(...) at the end of the string
function truncate(length, string) {
  return string.substring(length, 0) + '...';
}
