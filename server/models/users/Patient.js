const mongoose = require('mongoose');
const validator = require('validator');

const User = require('./User');

const patientSchema = User.discriminator(
  'Patient',
  new mongoose.Schema({
    hospitalID: {
      type: mongoose.Schema.ObjectId,
      ref: 'Hospital',
      required: [true, 'must belong to a hospital'],
    },
    receptionistID: {
      type: mongoose.Schema.ObjectId,
      ref: 'Receptionist',
      required: [true, 'must be register by a staff'],
    },
    emergencycontacts: {
      firstname: { type: String },
      lastname: { type: String },
      relationship: {
        type: String,
        enum: ['single', 'married', 'in a relationship'],
      },
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
  })
);

module.exports = mongoose.model('Patient');
