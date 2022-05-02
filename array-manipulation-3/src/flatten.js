/* exported flatten */

function flatten(array) {
  var solution = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var k = 0; k < array[i].length; k++) {
        solution.push(array[i][k]);
      }
    } else {
      solution.push(array[i]);
    }
  }
  return solution;
}

// make empty array
// loop through array to test if array is an array of it
// if value of k index is of array push to new array
// if its not a value dont push
// return new array
