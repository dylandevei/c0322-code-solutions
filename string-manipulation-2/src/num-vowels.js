/* exported numVowels */
// define function named numVowels with single parameter(string)
// write function that will count the number of vowels in given string
// return vowel count

function numVowels(string) {
  var vowelCount = null;
  var vowelSplit = string.split('');
  for (var i = 0; i < string.length; i++) {
    if (vowelSplit[i] === 'a' || vowelSplit[i] === 'e' || vowelSplit[i] === 'i' || vowelSplit[i] === 'o' || vowelSplit[i] === 'u') {
      vowelCount++;

    }
  } return vowelCount;
}
