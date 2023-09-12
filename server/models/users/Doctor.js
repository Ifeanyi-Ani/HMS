const mongoose = require('mongoose');

const Hospital = require('../Hospital');
const User = require('./User');

const doctorSchema = User.discriminator(
  'Doctor',
  new mongoose.Schema({
    hospitalID: {
      type: mongoose.Schema.ObjectId,
      ref: Hospital,
      required: [true, 'must belong to a hospital'],
    },
  })
);

module.exports = mongoose.model('Doctor');
