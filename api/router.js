const express = require('express');
const userModel = require('../api/models/users');
const eventModel = require('../api/models/events');
const { EVENT_ENUM } = require('./constants');

const router = express.Router();

router.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const ans = await userModel.findOne({ _id: id });
  res.send(ans);
});

router.post('/users/new', (req, res) => {
  const { body } = req;
  userModel.create(body).then((resp) => {
    res.send(resp);
  });
});

// router.post('/events/:user/new', async (req, res) => {
//   const { user } = req.parmas;
//   const { kind,  } = req.body;

//   res.send('created');
// });

// router.get('/events/:type', async (req, res) => {
//   const { type } = req.params;
//   const events = await eventModel.find({ kind: EVENT_ENUM[type] });
//   res.send(events);
// });

module.exports = router;
