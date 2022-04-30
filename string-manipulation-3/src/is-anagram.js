/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var str1 = firstString.split('').sort().join('');
  str1 = str1.split(' ').join('');
  var str2 = secondString.split('').sort().join('');
  str2 = str2.split(' ').join('');
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}

// create function to check if word is anagram of second string
// split the first word, sort, and rejoin
// take spaces out of first string
// repeat same steps for second string
// use conditional to check whether the words match eachother exactly
// return boolean
