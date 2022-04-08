/* exported numVowels */
// define function named numVowels with single parameter(string)
// write function that will count the number of vowels in given string
// return vowel count

function numVowels(string) {
  var vowelCount = 0;
  var newString = string.toLowerCase();
  newString = newString.split('');
  for (var i = 0; i < newString.length; i++) {
    if (newString[i] === 'a' || newString[i] === 'e' || newString[i] === 'i' || newString[i] === 'o' || newString[i] === 'u') {
      vowelCount++;
    }
  } return vowelCount;
}
