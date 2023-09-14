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
    const newBed = await Bed.create(req.body);
    res.status(201).json(newBed);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getBedsInWard = async (req, res) => {
  try {
    const { wardId } = req.params;
    const beds = await Bed.find({ ward: wardId });
    if (!beds) {
      return res.status(404).json({ message: 'No ward found with that ID' });
    }
    res.status(200).json(beds);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getBed = async (req, res) => {
  try {
    const { id } = req.params;
    const bed = await Bed.find(id);
    if (!bed) {
      return res.status(404).json({ message: 'No bed found with that ID' });
    }
    res.status(200).json(bed);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.editBed = async (req, res) => {
  try {
    const { id } = req.params;
    const bed = await Bed.findByIdAndUpdate(id, req.body, { new: true });
    if (!bed) {
      return res.status(404).json({ message: 'No bed found with that ID' });
    }
    res.status(200).json(bed);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.deleteBed = async (req, res) => {
  try {
    const { id } = req.params;
    const bed = await Bed.findByIdAndDelete(id);
    if (!bed) {
      return res.status(404).json({ message: 'No bed found with that ID' });
    }
    res.status(200).json({ message: 'Bed deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
