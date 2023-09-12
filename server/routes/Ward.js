const router = require('express').Router();
const {
  getWards,
  createWard,
  getWard,
  editWard,
  deleteWard,
} = require('../controllers/wardControllers');
router.route('/').get(getWards).post(createWard);
router.route('/:id').get(getWard).patch(editWard).delete(deleteWard);

module.exports = router;
