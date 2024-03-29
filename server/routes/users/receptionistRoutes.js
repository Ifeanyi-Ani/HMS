const express = require("express");
const { protect, restrictTo } = require("../../middlewares/authMiddlewares");
const {
  getReceptionists,
  editReceptionist,
  deleteReceptionist,
  getReceptionist,
} = require("../../controllers/users/receptionistControllers");
const { createReceptionist } = require("../../controllers/authControllers");

const router = express.Router();

router
  .route("/")
  .get(getReceptionists)
  .post(protect, restrictTo("superadmin", "admin"), createReceptionist);
router
  .route("/:id")
  .get(getReceptionist)
  .patch(protect, restrictTo("receptionist"), editReceptionist)
  .delete(deleteReceptionist);

module.exports = router;
