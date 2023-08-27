const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

//this is their shared details
const userSchema = new mongoose.Schema({
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
    required: [true, 'please enter your gender'],
    lowercase: true,
    enum: ['male', 'female'],
  },
  phone: { type: Number },
  password: {
    type: String,
    select: false,
    required: [true, 'password is required'],
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
    required: true,
    enum: ['receptionist', 'patient', 'doctor', 'nurse'], // Add more roles as needed
  },
  dob: {
    type: Date,
    required: [true, 'enter date of birth'],
  },
  address: {
    type: String,
    required: [true, 'enter address'],
  },
  city: { type: String },
  country: { type: String },
});

//manipulating before saving it to the Schema
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  // hash password
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);

  // removed the confirmedPassword from the schema
  this.confirmedPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  try {
    return await bcrypt.compare(candidatePassword, userPassword);
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoose.model('User', userSchema);
