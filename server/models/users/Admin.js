const mongoose = require('mongoose');
const User = require('./User');

const adminSchema = User.discriminator(
  'Admin',
  new mongoose.Schema({
    hospitalID: {
      type: mongoose.Schema.ObjectId,
      ref: 'Hospital',
      required: [true, 'must belong to a hospital'],
    },
  })
);

module.exports = mongoose.model('Admin');
