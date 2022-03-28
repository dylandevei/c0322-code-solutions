/* exported getKeys */
function getKeys(object) {
  var objectKeys = [];
  for (var key in object) {
    objectKeys.push(key);
  } return objectKeys;
}

// define function with name getKeys with one parameter (object)
// create new variable and set equal to empty array
// create for in loop to allow us to find key values inside object
// once key is found it will push the key to the objectKeys array
// return array once all keys have been pushed to objectKeys array
