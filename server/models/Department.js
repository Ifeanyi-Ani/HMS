const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please enter name of the department'],
    lowercase: true,
    enum: [
      'pathology',
      'hamatology',
      'parasitology',
      'virology',
      'taxicology',
      'surgical',
      'radiology',
      'operational theater',
      'cardiology',
      'ward',
    ],
  },
  description: {
    type: String,
    required: [true, 'please enter description of the department'],
  },
});
module.exports = mongoose.model('Department', departmentSchema);
