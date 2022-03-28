/* exported reverse */
// define function named reverse with single parameter(array)
// declare new variable that will contain the reverse values of the array once iterated through
// create for loop that starts i at the end of the index and will iterate until value has reached 0
// i will decrement by one each iteration
// each iteration will push value to the new reverseArray
// return value of reverse array

function reverse(array) {
  var reverseArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}
