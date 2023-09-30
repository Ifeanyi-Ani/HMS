const { default: mongoose } = require('mongoose');
const Patient = require('../../models/users/Patient');
const createError = require('http-errors');

exports.getPatients = async (req, res,next) => {
  try {
    const users = await Patient.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
exports.getPatient = async (req, res,next) => {
  try {
    const { id } = req.params;
    const user = await Patient.findById(id);
    if (!user) {
      throw createError(404, 'No patient found with that ID');
    }
    res.status(200).json(user);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid patient ID'));
    }
    next(err);
  }
};
exports.editPatient = async (req, res,next) => {
  try {
    const { id } = req.params;
    const user = await Patient.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      throw createError(404, 'No patient found with that ID');
    }
    res.status(200).json(user);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid patient ID'));
    }
    next(err);
  }
};
exports.deletePatient = async (req, res,next) => {
  try {
    const { id } = req.params;
    const user = await Patient.findByIdAndDelete(id);
    if (!user) {
      throw createError(404, 'No patient found with that ID');
    }
    res.status(200).json({ message: 'Patient successfully deleted' });
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid patient ID'));
    }
    next(err);
  }
};
