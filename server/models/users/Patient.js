const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const Hospital = require('../Hospital');
const Receptionist = require('./Receptionist');

const PatientSchema = new mongoose.Schema({
  hospitalID: {
    type: mongoose.Schema.ObjectId,
    ref: Hospital,
    required: [true, 'must belong to a hospital'],
  },
  receptionistID: {
    type: mongoose.Schema.ObjectId,
    ref: Receptionist,
    required: [true, 'must be register by a staff'],
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
    default: 'Patient',
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
  phone: { type: Number },
  contacts: {
    firstname: { type: String },
    lastname: { type: String },
    relationship: { type: String },
    phone: { type: Number },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'please provide a valid email'],
    },
  },
  occupation: { type: String },
  pulse: { type: String },
  allergies: { type: String },
  bloodgroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  weight: { type: String },
  height: { type: String },
  heartrate: { type: String },
  temperature: { type: String },
  bloodpressure: { type: String },
  respiratoryrate: { type: String },
  genotype: {
    type: String,
    enum: ['AA', 'AB', 'O', 'AS', 'SS'],
  },
});

module.exports = mongoose.model('Patient', PatientSchema);
