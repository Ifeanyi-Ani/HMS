const express = require('express');

const {
  getPatient,
  getPatients,
  deletePatient,
  editPatient,
} = require('../../controllers/users/patientController');

const router = express.Router();

router.get('/', getPatients);

router.route('/:id').get(getPatient).patch(editPatient).delete(deletePatient);

module.exports = router;
