const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { promisify } = require('util');

const Receptionist = require('../models/users/Receptionist');
const Patient = require('../models/users/Patient');

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};
const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  user.password = undefined;

  res.status(statusCode).json({
    token,
    user,
  });
};

exports.createReceptionist = async (req, res) => {
  try {
    const newUser = await Receptionist.create(req.body);
    createSendToken(newUser, 201, req, res);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.createPatient = async (req, res) => {
  try {
    const newUser = await Patient.create(req.body);
    createSendToken(newUser, 201, req, res);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
