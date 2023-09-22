const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please enter the hospital name'],
    unique: true,
  },
  address: {
    type: String,
    required: [true, 'please enter the hospital address'],
  },
  country: String,
  website: String,
  Tel: Number,
  email: String,
});

module.exports = mongoose.model('Hospital', HospitalSchema);
