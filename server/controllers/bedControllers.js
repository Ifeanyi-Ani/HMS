const Bed = require('../models/Bed');
exports.getBeds = async (req, res) => {
  try {
    const beds = await Bed.find();
    res.status(200).json(beds);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.createBed = async (req, res) => {
  try {
    const { wardId } = req.params;
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
