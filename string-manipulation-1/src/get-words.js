/* exported getWords */
function getWords(string) {
  if (string.length > 0) {
    return string.split(' ');
  } else {
    return [];
  }
}
// define function with one parameter string
// function will check if string value is more than zero
// if more than zero, it will split using .split method to seperate words by spaces ' ';
// if string is empty it will return empty array
