const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('welcome to homepage');
});

app.get('/users', (req, res) => {
  res.send('welcome to user page');
});

app.listen(8800, () => {
  console.log('backend is running!');
});
