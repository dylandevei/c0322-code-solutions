const express = require('express');
const path = require('path');
const app = express();

const newPath = path.join(__dirname, 'public');
const mount = express.static(newPath);
app.use(mount);

app.listen(3000, () => {
  console.log('listening on Port 3000!');
});
