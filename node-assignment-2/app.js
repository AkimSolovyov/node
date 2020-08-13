const express = require('express');

const app = express();
const port = 3000;

// app.get((req, res, next) => {
//   console.log('First middleware');
//   next();
// });

// app.get((req, res) => {
//   console.log('Second Middleware');
//   res.send('Hello World!');
// });

app.get('/users', (req, res) => {
  console.log('/users route');
  res.send('<h1>Users</h1>');
});

app.get('/', (req, res) => {
  console.log('/  route');
  res.send('<h1>Hello World!</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
