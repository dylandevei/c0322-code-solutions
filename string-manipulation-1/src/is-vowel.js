/* exported isVowel */

function isVowel(character) {
  var letter = character.toLowerCase();
  if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    return true;
  } else {
    return false;
  }
}

// define function with one parameter (character)
// function will check if character is a vowel
// convert letter to lowercase to satisfy criteria (checks upper and lowercase letters)
// each condition will check newly converted lowercase letter against a value
// condition statement to check if character equals vowel, if not return false
