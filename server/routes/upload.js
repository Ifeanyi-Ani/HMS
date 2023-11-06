const express = require('express');
const { protect } = require('../middlewares/authMiddlewares');
const { upload, uploadPhoto } = require('../controllers/uploadControllers');

const router = express.Router();

router.patch('/:id', protect, uploadPhoto, upload);

module.exports = router;
