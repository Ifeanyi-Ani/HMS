const express = require('express');
const {
  createHospital,
  getHospitals,
  editHospital,
  deleteHospital,
  getHospital,
} = require('../controllers/hospitalControllers');

const router = express.Router();

router.route('/').get(getHospitals).post(createHospital);
router
  .route('/:id')
  .patch(editHospital)
  .delete(deleteHospital)
  .get(getHospital);

module.exports = router;
