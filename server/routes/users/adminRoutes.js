const express = require('express');
const { createAdmin } = require('../../controllers/authControllers');
const { protect, restrictTo } = require('../../middlewares/authMiddlewares');
const router = express.Router();

router.route('/').post(protect, restrictTo('superadmin'), createAdmin);
module.exports = router;
