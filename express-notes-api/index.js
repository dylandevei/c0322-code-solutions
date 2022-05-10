const fs = require('fs');
const express = require('express');
const data = require('./data.json');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on Port 3000!');
});

app.get('/api/notes', (req, res) => {
  const array = [];
  for (const key in data.notes) {
    array.push(data.notes[key]);
  }
  res.json(array);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0 || !Number.isInteger(id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if ((id in data.notes)) {
    res.status(200).send(data.notes[id]);
  } else {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    data.notes[data.nextId] = req.body;
    req.body.id = data.nextId;
    data.nextId++;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(data.notes[data.nextId]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0 || !Number.isInteger(id)) {
    res.status(400).json({ error: 'id must be positive integer' });
  } else if ((!data.notes[id])) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    delete data.notes[id];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(204).json(data.notes[data.nextId]);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0) {
    res.status(400).json({ error: 'id must be positive integer' });
  } else if ((!req.body.content)) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    data.notes[id].content = req.body.content;
    data.notes[id].id = id;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(data.notes[data.nextId]);
      }
    });
  }
});
