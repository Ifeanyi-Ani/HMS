const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/users/User');
const sendEmail = require('../utils/email');
const crypto = require('crypto');

//authorization middleware that give access to loggedin user
exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(
      res
        .status(401)
        .json({ message: 'You are not logged in! Please log in to get access' })
    );
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      res.status(401).json({
        message: 'The user belonging to this token does no longer exist.',
      })
    );
  }
  req.user = currentUser;

  // res.locals.user = currentUser;
  next();
};
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        res.status(403).json({
          message: 'You do not have permission to perform this action',
        })
      );
    }
    next();
  };
};
exports.forgotPassword = async (req, res, next) => {
  // get user based on posted email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(
      res.status(404).json({ message: 'There is no user found with that ID' })
    );
  }
  // generate random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetURL = `${req.protocol}://${req.get(
    'host'
  )}/api/v1/resetPassword/${resetToken}`;
  const message = `forgot your password submit your patch request with your new password and confirmPassword to: ${resetURL}.\nIf you didn't forget your password, please ignore this email`;
  try {
    await sendEmail({
      email: 'ifeanyiani155@gmail.com',
      subject: 'Your password reset token',
      message,
    });
    res.status(200).json({
      message: 'token send to email',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(
      res.status(500).json({
        message: 'There was an error sending the email... try again later',
      })
    );
  }
  // next();
};
exports.resetPassword = async (req, res, next) => {
  //get user based on token
  const hashToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');
  const user = await User.findOne({
    passwordResetToken: hashToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) {
    return next(
      res.status(400).json({ message: 'token is invalid or has expired' })
    );
  }
  user.password = req.body.password;
  user.confirmedPassword = req.body.confirmedPassword;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  res.status(200).json({ message: 'password successfully changed' });
};
