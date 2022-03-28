/* exported compact */
// define function named compact with one parameter (array)
// define new variable named newArray and set it equal to an empty array
// initialize for loop and set i equal to zero
// make condition of for loop less than length of array so it is able to stop once it reaches end of array
// increment i by one each iteration of the loop
// make if statement that checks if boolean value is true, if it is true then push to newArray variable
// return newArray variable with all values that are Boolean true

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
