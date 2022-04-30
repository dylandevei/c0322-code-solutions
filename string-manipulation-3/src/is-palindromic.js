/* exported isPalindromic */

function isPalindromic(string) {
  var testString = string.split(' ').join('');
  var newString = [];
  for (var i = testString.length - 1; i >= 0; i--) {
    newString.push(testString[i]);
  }
  var reverseWord = newString.join('');
  if (reverseWord === testString) {
    return true;
  } else {
    return false;
  }
}

// define function with parameter string
// make parameter string a string without any spaces
// create empty array to take reverse string
// push teststring indexes to new array
// convert array back into string
// compare reverseword with teststring
// return true if palindromic
