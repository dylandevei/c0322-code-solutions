/* exported compact */
function compact(array) {
  var newArray = [];
  var shittyValues = [null, false, NaN, undefined, 0, -0];
  for (var i = 0; i < array.length; i++) {
    if (array.contains(shittyValues)) {
      newArray.push(array[i]);
    }
  }
}
