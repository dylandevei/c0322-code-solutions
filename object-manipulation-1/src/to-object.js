/* exported toObject */
function toObject(keyValuePair) {
  var property = keyValuePair[0];
  var value = keyValuePair[1];
  var object = {};
  object[property] = value;
  return object;
}

// define function named toObject with single parameter, array(keyValuePair)
// split the values away from array to have seperate variables
// declare variable for property at index[0] of keyValuePair array
// declare variable for value at index[1] of keyValuePair array
// set object to an empty object with {} braces
// set up expression to push values into object using bracket notation
// return the object with new values
