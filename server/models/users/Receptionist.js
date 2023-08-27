const mongoose = require('mongoose');

const Hospital = require('../Hospital');
const User = require('./User');

const receptionistSchema = User.discriminator(
  'Receptionist',
  new mongoose.Schema({
    hospitalID: {
      type: mongoose.Schema.ObjectId,
      ref: Hospital,
      required: [true, 'must belong to a hospital'],
    },
  })
);

module.exports = mongoose.model('Receptionist');
