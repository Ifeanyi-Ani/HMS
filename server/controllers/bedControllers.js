const { default: mongoose } = require('mongoose');
const Bed = require('../models/Bed');
const createError = require('http-errors');
exports.getBeds = async (req, res, next) => {
  try {
    let query = Bed.find();
    //apply filtering options
    if (req.query.filterBy) {
      query = query.where(req.query.filterBy);
    }
    //apply sorting options
    if (req.query.sortBy) {
      query = query.sort(req.query.sortBy);
    }
    const beds = await query.exec();
    res.status(200).json(beds);
  } catch (err) {
    next(err);
  }
};
exports.createBed = async (req, res, next) => {
  try {
    const existingBed = await Bed.findOne({ name: req.body.name });
    if (existingBed) {
      throw createError(409, 'Bed already exist');
    }
    const newBed = await Bed.create(req.body);
    if (newBed) {
      res.status(201).json(newBed);
    } else {
      throw createError(404, 'Failed to create bed');
    }
  } catch (err) {
    if (err.name === validationError) {
      return next(createError(422, err.message));
    }
    next(err);
  }
};
exports.getBedsInWard = async (req, res, next) => {
  try {
    const { wardId } = req.params;
    const beds = await Bed.find({ ward: wardId });
    if (!beds) {
      throw createError(404, 'No bed found with that ward ID');
    }
    res.status(200).json(beds);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid ward ID'));
    }
    next(err);
  }
};
exports.getBed = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bed = await Bed.findById(id);
    if (!bed) {
      throw createError(404, 'No bed found with that ID');
    }
    res.status(200).json(bed);
  } catch (err) {
    next(err);
  }
};
exports.editBed = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bed = await Bed.findByIdAndUpdate(id, req.body, { new: true });
    if (!bed) {
      throw createError(404, 'No bed found with that ID');
    }
    res.status(200).json(bed);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid bed ID'));
    }
    next(err);
  }
};
exports.deleteBed = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bed = await Bed.findByIdAndDelete(id);
    if (!bed) {
      throw createError(404, 'No bed found with that ID');
    }
    res.status(200).json({ message: 'Bed deleted successfully' });
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid bed ID'));
    }
    next(err);
  }
};
exports.del = async (req, res) => {};
