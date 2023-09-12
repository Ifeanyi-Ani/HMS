const mongoose = require('mongoose');
const Ward = require('./Ward');

const bedSchema = new mongoose.Schema({
  bedNumber: {
    type: String,
    required: true,
    unique: true,
  },
  ward: {
    type: mongoose.Schema.ObjectId,
    ref: Ward,
  },
  status: {
    type: String,
    enum: ['vacant', 'occupied'],
    default: 'vacant',
  },
});

module.exports = mongoose.model('Bed', bedSchema);
