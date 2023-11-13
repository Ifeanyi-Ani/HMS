const createError = require('http-errors');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/users/User');
const sendEmail = require('../utils/email');
const crypto = require('crypto');

//authorization middleware that give access to loggedin user
exports.protect = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      return next(
        createError(401, 'You are not logged in! Please log in to get access')
      );
    }
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next(
        createError(
          401,
          'The user belonging to this token does no longer exist.'
        )
      );
    }
    // if (currentUser.changePasswordAfter.decoded.iat) {
    //   return next(
    //     res.status(401).json({
    //       message: 'The user currently changed password! please log in again',
    //     })
    //   );
    // }

    req.user = currentUser;

    // res.locals.user = currentUser;
    next();
  } catch (error) {
    next(error);
  }
};
// middleware that restrict user based on their role
exports.restrictTo = (...roles) => {
  try {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return next(
          createError(403, 'You do not have permission to perform this action')
        );
      }
      next();
    };
  } catch (error) {
    next(error);
  }
};
// forgot password middleware
exports.forgotPassword = async (req, res, next) => {
  // get user based on posted email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(createError(404, 'There is no user found with that ID'));
  }
  // generate random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetURL = `${req.protocol}://${req.get(
    'host'
  )}/users/resetPassword/${resetToken}`;
  const message = `forgot your password submit your patch request with your new password and confirmPassword to: ${resetURL}.\nIf you didn't forget your password, please ignore this email`;
  try {
    await sendEmail({
      email: user.email,
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
      createError(
        500,
        'There was an error sending the email... try again later'
      )
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
    return next(createError(400, 'token is invalid or has expired'));
  }
  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  res.status(200).json({
    message:
      'password successfully changed! please log in with your new password',
  });
};

exports.updatePassword = async (req, res, next) => {
  try {
    // get user
    const user = await User.findById(req.user.id).select('+password');
    // check if the current password is correct
    if (
      !(await user.correctPassword(req.body.currentPassword, user.password))
    ) {
      return next(createError(401, 'Your current password is wrong!'));
    }
    // update the password
    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;
    await user.save();
    res.status(200).json({ message: 'password updated successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
