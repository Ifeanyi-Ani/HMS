const express = require('express');

const {
  getDoctors,
  editDoctor,
  deleteDoctor,
  getDoctor,
} = require('../../controllers/users/doctorControllers');
const { createDoctor } = require('../../controllers/authControllers');
const { protect, restrictTo } = require('../../middlewares/authMiddlewares');

const router = express.Router();

router.route('/').get(getDoctors).post(restrictTo('admin'), createDoctor);
router
  .route('/:id')
  .get(protect, restrictTo('doctor'), getDoctor)
  .patch(editDoctor)
  .delete(deleteDoctor);
module.exports = router;
