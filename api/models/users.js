const mongoose = require('mongoose');


const UsersSchema = mongoose.Schema({
  email: String,
  name: String,
  q1: {
    type: Number,
    min: 1,
    max: 5,
  },
  q2: {
    type: Number,
    min: 1,
    max: 5,
  },
  q3: {
    type: Number,
    min: 1,
    max: 5,
  },
  q4: {
    type: Number,
    min: 1,
    max: 5,
  },
  q5: {
    type: Number,
    min: 1,
    max: 5,
  },
});

const userModel = mongoose.model('Users', UsersSchema);

module.exports = userModel;