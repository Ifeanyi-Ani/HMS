const express = require('express');

const {
  getUsers,
  editUser,
  deleteUser,
  getUser,
} = require('../../controllers/users/UserControllers');
const { createUser } = require('../../controllers/authControllers');
const {
  protect,
  restrictTo,
  forgotPassword,
  resetPassword,
} = require('../../middlewares/authMiddlewares');

const router = express.Router();

router.route('/').get(protect, restrictTo('admin'), getUsers).post(createUser);
router
  .route('/:id')
  .get(protect, restrictTo('admin'), getUser)
  .patch(protect, restrictTo('admin'), editUser)
  .delete(protect, restrictTo('admin'), deleteUser);

router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);
module.exports = router;
