/* exported zip */

function zip(first, second) {
  var solution = [];
  var length = Math.min(first.length, second.length);
  for (var i = 0; i < length; i++) {
    solution.push([first[i], second[i]]);
  }
  return solution;
}

// create an empty array
// creata variable of the smallest length between first array length and second array length
// loop through that smallest length
// push both values of first index and second index to the solution array
// return solution array
