const { default: mongoose } = require('mongoose');
const User = require('../../models/users/User');
const createError = require('http-errors');

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      throw createError(404, 'No user found with that ID');
    }
    res.status(200).json(user);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid user ID'));
    }
    next(err);
  }
};
exports.editUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      throw createError(404, 'No user found with that ID');
    }
    res.status(200).json(user);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid user ID'));
    }
    next(err);
  }
};
exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw createError(404, 'No user found with that ID');
    }
    res.status(200).json({ message: 'User successfully deleted' });
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid user ID'));
    }
    next(err);
  }
};
