const express = require('express');

const {
  getNurses,
  editNurse,
  deleteNurse,
  getNurse,
} = require('../../controllers/users/nurseControllers');
const { createNurse } = require('../../controllers/authControllers');
const {protect,restrictTo}=require('../../middlewares/authMiddlewares')

const router = express.Router();

router.route('/').get(getNurses).post(createNurse);
router.route('/:id').get(protect,restrictTo('nurse'),getNurse).patch(editNurse).delete(deleteNurse);
module.exports = router;
