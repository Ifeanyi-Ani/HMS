const express = require('express');
const router = express.Router();
const {
  createAppointment,
  listAppointment,
} = require('../controllers/appointmentControllers');
router.route('/').post(createAppointment).get(listAppointment);

module.exports = router;
