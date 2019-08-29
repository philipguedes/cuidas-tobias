const express = require('express');

const router = express.Router();

router.get('/questions', (req, res) => {
  res.send('kk');
});

module.exports = router;
