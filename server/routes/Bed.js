const router = require('express').Router();
const {
  getBeds,
  getBedsInWard,
  deleteBed,
  editBed,
  createBed,
} = require('../controllers/bedControllers');

router.route('/').get(getBeds).post(createBed);
router.get('/:wardId', getBedsInWard);
router.route('/:id').patch(editBed).delete(deleteBed);
module.exports = router;
