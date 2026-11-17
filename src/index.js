const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('Купи слона');
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`App listening on port: ${port}!`),
);
