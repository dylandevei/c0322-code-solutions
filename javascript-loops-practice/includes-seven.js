/* exported includesSeven */
function includesSeven(array) {
  var sevenArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      sevenArray.push(i);
    }
  } if (sevenArray > 0) {
    return true;
  } else {
    return false;
  }
}
