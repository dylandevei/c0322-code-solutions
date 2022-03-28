/* exported initial */
// define function named initial with single parameter(array)
// function will return all values except last in array
// initial values will be pushed into new array
// last index will be taken off of the array
// for loop to iterate through first array and push new values to new array
// return the new array with the new values (leaving the last index off this array)

function initial(array) {
  var initial = [];
  for (var i = 0; i < array.length - 1; i++) {
    initial.push(array[i]);
  }
  return initial;
}
