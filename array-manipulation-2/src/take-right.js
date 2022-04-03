/* exported takeRight */

// define new function named takeRight with two parameters array and count
// return array using slicemethod with a negative count(parameter) as the argument
// array should only display elements after count
function takeRight(array, count) {
  return array.slice(-(count));
}
