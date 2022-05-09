/* exported reverseWords */
const reverseWords = string => {
  const test = string.split(' ');
  const array = [];
  for (let i = 0; i < test.length; i++) {
    let reverse = '';

    for (let k = test[i].length - 1; k >= 0; k--) {
      reverse += test[i][k];
    }
    array.push(reverse);
  }
  return array.join(' ');

};

// create function with parameter string
// convert string to split string into array indexes
// create empty array to hold data
// create first loop and define variable to hold new string reverse
// iterate through test string and reverse the indexes
// push reverse word into new array
// rejoin words using join method
