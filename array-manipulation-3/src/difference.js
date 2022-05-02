/* exported difference */

function difference(first, second) {
  var solution = [];

  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      solution.push(first[i]);
    }
  }
  for (var k = 0; k < second.length; k++) {
    if (!first.includes(second[k])) {
      solution.push(second[k]);
    }
  }
  return solution;
}

// create empty array
// loop through first array and see if second array includes first index, push to solution array if so
// loop through second array and see if first array includes first index, push to solution array if so
// return solution array once iterations have completed
