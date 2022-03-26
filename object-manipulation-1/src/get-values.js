/* exported getValues */
function getValues(object) {
  var objectValues = [];
  for (var key in object) {
    objectValues.push(object[key]);
  } return objectValues;
}
// define function named getValues with single parameter (object)
// declare new variable and set equal to an empty array
// create for in loop that will find key within object
// once value of key is found it will push the value into the empty objectValues array
// return array once loop has iterated through
