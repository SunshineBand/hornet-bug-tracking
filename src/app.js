const express = require('express');

const app = express();
const ticketRoutes = require('./routes/tickets')

app.get('/', (req, res, next) => {
  res.status(200).send('Worked all g');
})

app.use('/tickets', ticketRoutes);

module.exports = app;