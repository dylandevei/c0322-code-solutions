/* exported tail */

// define function named tail with single parameter(array)
// declare new varaible of an empty array named tail
// create for loop that will start i at 1 (after index 0 since we do not want index 0 in our solution)
// i will loop until it is less than the arrays length
// i will increment by 1
// each iteration will push the new values after index one to tails array
// once loop has finished the result will be returned

function tail(array) {
  var tail = [];
  for (var i = 1; i < array.length; i++) {
    tail.push(array[i]);
  } return tail;
}
