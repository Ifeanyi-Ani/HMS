const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const Hospital = require('../Hospital');

const ReceptionistSchema = new mongoose.Schema({
  hospitalID: {
    type: mongoose.Schema.ObjectId,
    ref: Hospital,
    required: [true, 'must belong to a hospital'],
  },
  firstname: {
    type: String,
    required: [true, 'please enter your first name'],
  },
  lastname: {
    type: String,
    required: [true, 'please enter your last name'],
  },
  email: {
    type: String,
    required: [true, 'please enter your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'please provide a valid email'],
  },
  gender: {
    type: String,
    lowercase: true,
    enum: ['male', 'female'],
  },
  phone: { type: Number },
  password: {
    type: String,
    select: false,
  },
  confirmedPassword: {
    type: String,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'password are not the same',
    },
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    default: 'receptionist',
  },
});
// UserSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();

//   const salt = await bcrypt.genSalt(12);
//   this.password = await bcrypt.hash(this.password, salt);
//   this.passwordConfirm = undefined;
//   next();
// });
module.exports = mongoose.model('Receptionist', ReceptionistSchema);
