var student = {
  firstName: 'Dylan',
  lastName: 'De Vei',
  age: 28
};

var fullName = (student.firstName + ' ' + student.lastName);
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
console.log('value of livesInIrvine:', student.livesInIrvine);

student.previousOccupation = 'super hero';
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Tesla',
  model: 'Model X',
  year: 2022
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Kirby',
  type: 'Short-haired cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
