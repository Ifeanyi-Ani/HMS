const createError = require('http-errors');
const User = require('../models/users/User');
const cloudinary = require('cloudinary');

exports.upload = async (req, res, next) => {
  try {
    // const user = await User.findById(req.user.id);
    // if (!user) {
    //   return next(createError(404, 'User not Found'));
    // }
    console.log(req.file);
    next();
  } catch (error) {
    next(error);
  }
};
