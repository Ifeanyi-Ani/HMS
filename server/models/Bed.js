const mongoose = require('mongoose');

const bedSchema = new mongoose.Schema({
  bedNumber: {
    type: String,
    required: true,
    unique: true,
  },
  ward: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['occupied', 'vacant'],
    default: 'vacant',
  },
});

module.exports = mongoose.model('Bed', bedSchema);
