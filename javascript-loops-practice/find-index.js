/* exported findIndex */

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  } if (value > array.length) {
    return -1;
  }
}
