/* exported countdown */
function countdown(number) {
  var numbers = [];
  for (var i = 0; i <= number; i++) {
    numbers.push(number - i);
  } return numbers;
}
