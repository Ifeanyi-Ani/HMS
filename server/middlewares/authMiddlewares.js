const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/users/User');
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
  console.log(req.user);
  res.locals.user = currentUser;
  next();
};
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        res
          .status(403)
          .json({
            message: 'You do not have permission to perform this action',
          })
      );
    }
    next();
  };
};
