/* exported initial */
// define function named initial with single parameter(array)
// function will return all values after the first array
// tailing values will be pushed into new array
// first index will be taken off of the array
// for loop to iterate through first array and push new values to new array

function initial(array) {
  var initial = [];
  for (var i = 0; i < array.length - 1; i++) {
    initial.push(array[i]);
  } return initial;
}
