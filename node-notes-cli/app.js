const fs = require('fs');
const object = require('./data.json');

const word = process.argv[2];
const entry = process.argv[3];
const updatedEntry = process.argv[4];

if (word === 'read') {
  for (const key in object.notes) {
    console.log(`${key}: ${object.notes[key]}`);
  }
} else if (word === 'add') {
  object.notes[object.nextId] = entry;
  object.nextId++;
  const data = JSON.stringify(object, null, 2);
  fs.writeFile('data.json', data, err => {
    if (err) throw err;
  });
} else if (word === 'delete') {
  delete object.notes[entry];
  const data = JSON.stringify(object, null, 2);
  fs.writeFile('data.json', data, err => {
    if (err) throw err;
  });
} else if (word === 'update') {
  object.notes[entry] = updatedEntry;
  const data = JSON.stringify(object, null, 2);
  fs.writeFile('data.json', data, err => {
    if (err) throw err;
  });
} else {
  console.log('invalid operation, try again');
}
