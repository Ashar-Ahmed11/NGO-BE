const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  job:{
    type: String,
    required: true
  },
  country:{
    type: String,
    required: true
  },
  city:{
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  currentAddress:{
    type: String,
    required: true
  },
  age:{
    type: Number,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User; 
