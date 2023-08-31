const express = require('express');

const {
  getNurses,
  editNurse,
  deleteNurse,
  getNurse,
} = require('../../controllers/users/nurseControllers');
const { createNurse } = require('../../controllers/authControllers');

const router = express.Router();

router.route('/').get(getNurses).post(createNurse);
router.route('/:id').get(getNurse).patch(editNurse).delete(deleteNurse);
module.exports = router;
