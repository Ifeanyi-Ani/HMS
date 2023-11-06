const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({});

module.exports = mongoose.Model('Appointment', appointmentSchema);
