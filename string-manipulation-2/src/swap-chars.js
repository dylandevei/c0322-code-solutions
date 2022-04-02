/* exported swapChars */

// define function named swapchars that will swap the index of characters at given index and return string
// declare new variable that will split string into array
// declare new variable that will house the firstIndex parameter at a temporary variable
// assign the firstIndex to equal secondIndex
// assign second index to equal the firstIndex(temporary variable)
// use join method to make array turn back into a string
// return string result

function swapChars(firstIndex, secondIndex, string) {
  var stringsplit = string.split('');
  var swapIndex = stringsplit[firstIndex];
  stringsplit[firstIndex] = stringsplit[secondIndex];
  stringsplit[secondIndex] = swapIndex;
  return stringsplit.join('');
}
