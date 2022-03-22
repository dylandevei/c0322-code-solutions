function convertMinutesToSeconds(minutes) {
  var result = minutes * 60;
  return result;
}
console.log('function convertMinutesToSeconds():', convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hello' + ',' + ' ' + name;
  return greeting;
}
console.log('function greet():', greet('Dylan'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log('function getArea():', getArea(17, 42));

var dylan = {
  firstName: 'Dylan',
  lastName: 'DeVei'
};

function getFirstName(person) {
  var result = person.firstName;
  return result;
}

console.log('function getFirstName():', getFirstName(dylan));

var exampleArray = [
  'propane',
  'and',
  'propane',
  'accessories'
];

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

console.log('function getLastElement():', getLastElement(exampleArray));
