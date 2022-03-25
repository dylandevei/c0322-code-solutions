/* exported isVowel */

function isVowel(character) {
  var lower = character.toLowerCase();
  if (lower === 'a') {
    return true;
  } else if (lower === 'e') {
    return true;
  } else if (lower === 'i') {
    return true;
  } else if (lower === 'o') {
    return true;
  } else if (lower === 'u') {
    return true;
  } else {
    return false;
  }
}

// define function with parameter character
// function will check if character is a vowel
// convert letter to lowercase to satisfy criteria (checks upper and lowercase letters)
// each condition will check newly converted lowercase letter against a value
// condition statement to check if character equals vowel, if not return false
