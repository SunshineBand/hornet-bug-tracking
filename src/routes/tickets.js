const express = require('express');
const router = express.Router();

router.get('/something', (req, res, next) => {
  res.send('hello to the new route')
})

module.exports = router;