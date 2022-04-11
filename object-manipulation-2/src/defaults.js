/* exported defaults */

// define function with two parameters target and source
// create for in loop to loop through keys in source
// if the key in target's key is undefined it will put target's key inside of source object
// no return

function defaults(target, source) {
  for (var key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
