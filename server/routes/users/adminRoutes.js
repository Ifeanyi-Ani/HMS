const express = require("express");
const { createAdmin } = require("../../controllers/authControllers");
const {
  getAdmin,
  deleteAdmin,
  editAdmin,
} = require("../../controllers/users/adminControllers");
const { protect, restrictTo } = require("../../middlewares/authMiddlewares");
const router = express.Router();

router
  .route("/")
  .post(protect, restrictTo("superadmin"), createAdmin)
  .route("/:id")
  .get(protect, restrictTo("admin"), getAdmin)
  .patch(protect, restrictTo("admin"), editAdmin)
  .delete(protect, restrictTo("superadmin", "admin"), deleteAdmin);
module.exports = router;
