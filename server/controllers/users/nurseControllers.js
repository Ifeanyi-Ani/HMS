const { default: mongoose } = require('mongoose');
const Nurse = require('../../models/users/Nurse');
const createError = require('http-errors');

exports.getNurses = async (req, res,next) => {
  try {
    const users = await Nurse.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

exports.getNurse = async (req, res,next) => {
  try {
    const { id } = req.params;
    const user = await Nurse.findById(id);
    if (!user) {
      throw createError(404, 'No nurse found with that ID');
    }
    res.status(200).json(user);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid nurse ID'));
    }
    next(err);
  }
};
exports.editNurse = async (req, res,next) => {
  try {
    const { id } = req.params;
    const user = await Nurse.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      throw createError(404, 'No nurse found with that ID');
    }
    res.status(200).json(user);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid nurse ID'));
    }
    next(err);
  }
};
exports.deleteNurse = async (req, res,next) => {
  try {
    const { id } = req.params;
    const user = await Nurse.findByIdAndDelete(id);
    if (!user) {
      throw createError(404, 'No nurse found with that ID');
    }
    res.status(200).json({ message: 'Nurse successfully deleted' });
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid nurse ID'));
    }
    next(err);
  }
};
