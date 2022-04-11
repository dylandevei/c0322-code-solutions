/* exported pick */

// define new function with two parameters source and keys
// define newObject that is empty
// create a for loop that will loop as long as i is less than length of keys
// check if keys are in the object
// if so put them into newobject
// return new Object

function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      newObject[keys[i]] = source[keys[i]];
    }
  }
  return newObject;
}
