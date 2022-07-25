const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

let users = [
  {
    uid: 1,
    name: 'zss',
    email: 'zss@narola.email',
  },
  {
    uid: 2,
    name: 'mkt',
    email: 'mkt@narola.email',
  },
];

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.get('/users.readAll', (req, res) => {
  return res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
