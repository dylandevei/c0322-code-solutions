/* exported dropRight */
// define function named dropRight with two parameters array and count
// create new empty array named newArray
// create variable that will be arrayslength minus the count parameter
// arrayRight will be the condition of the for loop
// create for loop that will push to new array as long as i is less than the count parameter
// return newArray containing pushed indexes

function dropRight(array, count) {
  var newArray = [];
  var arrayRight = array.length - count;
  for (var i = 0; i < arrayRight; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
