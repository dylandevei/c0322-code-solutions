/* exported intersection */

function intersection(first, second) {
  var solution = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      solution.push(first[i]);
    }
  }
  return solution;
}

// create new solution array
// iterate through first array and check if both arrays include index
// if true push to solution array (value must be in both arrays)
// return solution array with unique values found in both arrays
