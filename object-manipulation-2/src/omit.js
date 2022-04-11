/* exported omit */

// create new function with two parameters source and keys
// declare new object that is empty
// create a for in loop that will loop through source object and assign the keys to the new object
// create a for loop that will iterate through the loop as long as i is less than keys length
// if newobjects key is found it will delete it from newoObject
// return newObject after keys have been deleted

function omit(source, keys) {
  var newObject = {};
  for (var key in source) {
    newObject[key] = source[key];
  }
  for (var i = 0; i < keys.length; i++) {
    if (newObject[keys[i]] !== undefined) {
      delete newObject[keys[i]];
    }
  }
  return newObject;
}
