const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Receptionist = require('../models/users/Receptionist');
const Patient = require('../models/users/Patient');
const User = require('../models/users/User');

//creating jwt token
const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

//binding the token and sending it to the resquest
const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  user.password = undefined;

  res.status(statusCode).json({
    token,
    user,
  });
};
// unified login system
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //seleting the password field that was disabled initailly
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({ message: 'Incorrect Details' });
    }
    createSendToken(user, 200, req, res);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//creating Receptionist user
exports.createReceptionist = async (req, res) => {
  try {
    const newUser = await Receptionist.create(req.body);
    createSendToken(newUser, 201, req, res);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//creating Patient user
exports.createPatient = async (req, res) => {
  try {
    const newUser = await Patient.create(req.body);
    createSendToken(newUser, 201, req, res);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
