/* exported chunk */

// define a function named chunk with two parameters, array and size
// create a new array and make it empty
// create a for loop that will start at zero, go as long as index is less than the length of the array and increment each time by the size of the size(argument)
// array with use slice method starting at index and ending at index plus size of the size argument and will push the indexes into new array
// return newArray

function chunk(array, size) {
  var newArray = [];

  for (var i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}
