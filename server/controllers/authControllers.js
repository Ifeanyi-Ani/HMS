const jwt = require('jsonwebtoken');
const createError = require('http-errors');

const Receptionist = require('../models/users/Receptionist');
const Patient = require('../models/users/Patient');
const User = require('../models/users/User');
const Nurse = require('../models/users/Nurse');
const Doctor = require('../models/users/Doctor');
const Admin = require('../models/users/Admin');
const sendEmail = require('../utils/email');
const { default: mongoose } = require('mongoose');

//creating jwt token
const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

//binding the token and sending it to the resquest
const createSendToken = (user, statusCode, res, token) => {
  user.password = undefined;

  res.status(statusCode).json({
    token: token ? token : null,
    user,
  });
};
// unified login system
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //seleting the password field that was disabled initailly
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.correctPassword(password, user.password))) {
      throw createError(401, 'Incorrect Details');
    }
    const token = signToken(user._id);
    createSendToken(user, 200, res, token);
  } catch (err) {
    next(err);
  }
};
//creating Receptionist user
exports.createReceptionist = async (req, res, next) => {
  try {
    const newUser = await Receptionist.create(req.body);
    // await sendEmail({
    //   email: newUser.email,
    //   subject: 'Registration Successful!',
    //   message: `Hi ${newUser.firstname} \nYour registration to Orbis Hospital Management was successful`,
    // });
    if (newUser) {
      createSendToken(newUser, 201, res);
    } else {
      throw createError(404, 'failed to create receptionist');
    }
  } catch (err) {
    next(err);
  }
};

//creating Patient user
exports.createPatient = async (req, res, next) => {
  try {
    const newUser = await Patient.create(req.body);
    if (newUser) {
      createSendToken(newUser, 201, res);
    } else {
      throw createError(404, 'failed to create patient');
    }
  } catch (err) {
    next(err);
  }
};
// creating nurse user
exports.createNurse = async (req, res, next) => {
  try {
    const newUser = await Nurse.create(req.body);
    if (newUser) {
      createSendToken(newUser, 201, res);
    } else {
      throw createError(404, 'failed to create nurse');
    }
  } catch (err) {
    next(err);
  }
};
// creating doctor user
exports.createDoctor = async (req, res, next) => {
  try {
    const newUser = await Doctor.create(req.body);
    if (newUser) {
      createSendToken(newUser, 201, res);
    } else {
      throw createError(404, 'failed to create doctor');
    }
  } catch (err) {
    next(err);
  }
};

// creating general user. It can be admin
exports.createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    if (newUser) {
      createSendToken(newUser, 201, res);
    } else {
      throw createError(404, 'failed to create user');
    }
  } catch (err) {
    next(err);
  }
};

exports.createAdmin = async (req, res, next) => {
  try {
    const newUser = await Admin.create(req.body);
    if (newUser) {
      createSendToken(newUser, 201, res);
    } else {
      throw createError(404, 'failed to create admin');
    }
  } catch (err) {
    next(err);
  }
};
