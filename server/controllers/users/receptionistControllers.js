const { default: mongoose } = require('mongoose');
const Receptionist = require('../../models/users/Receptionist');
const createError = require('http-errors');

exports.getReceptionists = async (req, res, next) => {
  try {
    const users = await Receptionist.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

exports.getReceptionist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Receptionist.findById(id);
    if (!user) {
      throw createError(404, 'No receptionist found with that ID');
    }
    res.status(200).json(user);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid receptionist ID'));
    }
    next(err);
  }
};
exports.editReceptionist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Receptionist.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      throw createError(404, 'No receptionist found with that ID');
    }
    res.status(200).json(user);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid receptionist ID'));
    }
    next(err);
  }
};
exports.deleteReceptionist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Receptionist.findByIdAndDelete(id);
    if (!user) {
      throw createError(404, 'No receptionist found with that ID');
    }
    res.status(200).json({ message: 'Receptionist successfully deleted' });
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid receptionist ID'));
    }
    next(err);
  }
};
