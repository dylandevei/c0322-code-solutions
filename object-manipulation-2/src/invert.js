/* exported invert */

// define function with single parameter source
// function will invert the keys and values of object
// declare newobject and make it empty
// create for in loop that will loop through source
// newobject will invert keys and values
// return new object with values swapped

function invert(source) {
  var newObject = {};
  for (var key in source) {
    newObject[source[key]] = key;
  }
  return newObject;
}
