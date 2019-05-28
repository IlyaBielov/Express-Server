const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('Купи слона');
});

app.listen(process.env.PORT, () =>
  console.log(`App listening on port: ${process.env.PORT}!`),
);
