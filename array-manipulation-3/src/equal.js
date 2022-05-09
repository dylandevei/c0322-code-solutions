/* exported equal */

const equal = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

// first check length of first array against the second array
// if the lengths don't match, return false
// also loop through first array and compare the first index to second index
// if they dont match return false
// return true otherwise
