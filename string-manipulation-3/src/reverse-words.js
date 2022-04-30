/* exported reverseWords */
function reverseWords(string) {
  var test = string.split(' ');
  var array = [];
  for (var i = 0; i < test.length; i++) {
    var reverse = '';

    for (var j = test[i].length - 1; j >= 0; j--) {
      reverse += test[i][j];
    }
    array.push(reverse);
  }
  return array.join(' ');

}

// create function with parameter string
// convert string to split string into array indexes
// create empty array to hold data
// create first loop and define variable to hold new string reverse
// iterate through test string and reverse the indexes
// push reverse word into new array
// rejoin words using join method
