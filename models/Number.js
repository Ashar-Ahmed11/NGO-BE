const mongoose = require('mongoose');

const NumberSchema = new mongoose.Schema({
  metaTitle: {
    type: String,
    required: true,
    unique: true
  },
  metaDesc: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
    description: {
    type: String,
    required: true,
    unique: true
  },
  ytLink: {
    type: String,
    required: true,
    unique: true
  },
  instLink: {
    type: String,
    required: true,
    unique: true
  },
  fbLink: {
    type: String,
    required: true,
    unique: true
  }
});


const NumberModel = mongoose.model('Number', NumberSchema);
module.exports = NumberModel;
