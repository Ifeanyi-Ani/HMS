const { default: mongoose } = require("mongoose");
const Admin = require("../../models/users/Admin");
const createError = require("http-errors");

exports.getAdmins = async (req, res, next) => {
  try {
    const users = await Admin.find();

    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

exports.getAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Admin.findById(id);
    if (!user) {
      throw createError(404, "No doctor found with that ID");
    }
    res.status(200).json(user);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, "Invalid doctor ID"));
    }
    next(err);
  }
};

exports.editAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Admin.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      throw createError(404, "No doctor found with that ID");
    }
    res.status(200).json(user);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, "Invalid doctor ID"));
    }
    next(err);
  }
};

exports.deleteAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Admin.findByIdAndDelete(id);

    if (!user) {
      throw createError(404, "No doctor found with that ID");
    }
    res.status(200).json({ message: "Admin successfully deleted" });
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, "Invalid doctor ID"));
    }
    next(err);
  }
};
