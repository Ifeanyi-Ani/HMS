const express = require('express');
const { storage } = require('../utils/cloudinary');
const multer = require('multer');
const { protect } = require('../middlewares/authMiddlewares');
const { upload } = require('../controllers/uploadControllers');

const uploadImage = multer({ storage });
const router = express.Router();

router.patch('/upload', protect, uploadImage.single('image'), upload);

module.exports = router;
