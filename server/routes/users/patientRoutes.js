const express = require('express');

const {
  getPatient,
  getPatients,
  deletePatient,
  editPatient,
} = require('../../controllers/users/patientController');
const { createPatient } = require('../../controllers/authControllers');

const router = express.Router();

router.route('/').get(getPatients).post(createPatient);

router.route('/:id').get(getPatient).patch(editPatient).delete(deletePatient);

module.exports = router;
