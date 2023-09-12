const mongoose = require('mongoose');

const wardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
    alias: 'description',
  },
});

module.exports = mongoose.model('Ward', wardSchema);
