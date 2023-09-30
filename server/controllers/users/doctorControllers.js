const { default: mongoose } = require('mongoose');
const Doctor = require('../../models/users/Doctor');
const createError = require('http-errors');

exports.getDoctors = async (req, res, next) => {
  try {
    const users = await Doctor.find();

    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

exports.getDoctor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Doctor.findById(id);
    if (!user) {
      throw createError(404, 'No doctor found with that ID');
    }
    res.status(200).json(user);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid doctor ID'));
    }
    next(err);
  }
};
exports.editDoctor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Doctor.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      throw createError(404, 'No doctor found with that ID');
    }
    res.status(200).json(user);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid doctor ID'));
    }
    next(err);
  }
};
exports.deleteDoctor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Doctor.findByIdAndDelete(id);
    if (!user) {
      throw createError(404, 'No doctor found with that ID');
    }
    res.status(200).json({ message: 'Doctor successfully deleted' });
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid doctor ID'));
    }
    next(err);
  }
};
