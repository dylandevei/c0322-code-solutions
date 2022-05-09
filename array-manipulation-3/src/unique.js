/* exported unique */

const unique = array => {
  const solution = [];

  for (let i = 0; i < array.length; i++) {
    if (!solution.includes(array[i])) {
      solution.push(array[i]);
    }
  }
  return solution;
};

// create empty array
// loop through parameter array and check if index is in solution array
// if not included, push index into solution array (no repeated values pushed)
// return solution array
