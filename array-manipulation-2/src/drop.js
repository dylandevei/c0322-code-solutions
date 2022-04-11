/* exported drop */
// define function named drop with parameters array and count
// create new array named newArray
// create for loop to iterate through loop as long as i is < array.length
// if i is >= count than push index to newArray
// return result

function drop(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i >= count) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
