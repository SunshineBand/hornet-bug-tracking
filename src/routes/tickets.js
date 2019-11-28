const express = require('express');
const router = express.Router();
const {
  index
} = require('../controllers/tickets');

router.get('/', async (req, res, next) => {
  // sends back all tickets
  const tickets = await index();
  res.send(tickets);
})

module.exports = router;