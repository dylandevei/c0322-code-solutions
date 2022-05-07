const express = require('express');
const app = express();
let nextId = 1;
const grades = {};

app.listen(3000, () => {
});

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (const key in grades) {
    arr.push(grades[key]);
  }
  res.json(arr);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  req.body.id = nextId;
  res.status(201).send(req.body);
  nextId++;
});
