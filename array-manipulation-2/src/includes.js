/* exported includes */
// define new function named includes with two parameters array and value
// create a variable that will set the boolean to false to start
// create a for loop that will check if the value is inside of the array
// if the array index equals the value of the array then the variable will be changed to true
// ...otherwise it will remain false
// return the boolean variable,false is value is not found, true if value is found within the array.

function includes(array, value) {
  var boolean = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      boolean = true;
    }
  }
  return boolean;
}
