const Ward = require('../models/Ward');

exports.getWards = async (req, res) => {
  try {
    const wards = await Ward.find();
    res.status(200).json(wards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.createWard = async (req, res) => {
  try {
    const newWard = await Ward.create(req.body);
    res.status(201).json(newWard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getWard = async (req, res) => {
  try {
    const { id } = req.params;
    const ward = await Ward.findById(id);
    if (!ward) {
      return res.status(404).json({ message: 'No ward found with that ID' });
    }
    res.status(200).json(ward);
  } catch (err) {
    res.status(500);
  }
};
exports.deleteWard = async (req, res) => {
  try {
    const { id } = req.params;
    const ward = await Ward.findByIdAndDelete(id);
    if (!ward) {
      return res.status(404).json({ message: 'No ward found with that ID' });
    }
    res.status(200).json({ message: 'ward successfully deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.editWard = async (req, res) => {
  try {
    const { id } = req.params;
    const ward = await Ward.findByIdAndUpdate(id, req.body, { new: true });
    if (!ward) {
      return res.status(404).json({ message: 'No ward found with that ID' });
    }
    res.status(200).json(ward);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
