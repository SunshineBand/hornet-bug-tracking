const express = require('express');

const app = express();
app.get('/', (req, res, next) => {
  res.status(200).send('Worked all g');
})

module.exports = app;