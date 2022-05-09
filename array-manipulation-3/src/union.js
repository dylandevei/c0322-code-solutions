/* exported union */

const union = (first, second) => {
  const solution = [];

  for (let i = 0; i < first.length; i++) {
    if (!solution.includes(first[i])) {
      solution.push(first[i]);
    }
  }
  for (let k = 0; k < second.length; k++) {
    if (!solution.includes(second[k])) {
      solution.push(second[k]);
    }
  }
  return solution;
};

// create new solution array
// iterate through first array and check if solution array includes indexes, if not push to solution array
// iterate through second array and check if solution array includes indexes, if not push to solution array
// return solution array
