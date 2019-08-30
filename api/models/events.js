const mongoose = require('mongoose');
const { EVENT_ENUM } = require('../constants');

const EventSchema = mongoose.Schema({
  description: String,
  kind: {
    type: String,
    enum: EVENT_ENUM,
  },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  invited: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }],
});

const eventModel = mongoose.model('Event', EventSchema);

module.exports = eventModel;