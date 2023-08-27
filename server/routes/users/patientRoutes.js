const express = require('express');

const {
  getPatient,
  getPatients,
  deletePatient,
  editPatient,
} = require('../../controllers/users/patientController');
const { createPatient } = require('../../controllers/authControllers');
const { protect, restrictTo } = require('../../middlewares/authMiddlewares');

const router = express.Router();

router
  .route('/')
  .get(getPatients)
  .post(protect, restrictTo('receptionist'), createPatient);

router
  .route('/:id')
  .get(getPatient)
  .patch(protect, editPatient)
  .delete(protect, restrictTo('admin'), deletePatient);

module.exports = router;
