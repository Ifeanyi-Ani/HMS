const Hospital = require('../models/Hospital');

exports.getHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.status(200).json(hospitals);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
exports.createHospital = async (req, res) => {
  try {
    const hospital = await Hospital.create(req.body);
    res.status(201).json(hospital);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
exports.getHospital = async (req, res) => {
  try {
    const { id } = req.params;
    const hospital = await Hospital.findById(id);
    if (!hospital)
      res.status(404).json({ message: 'no hospital found with that ID' });
    res.status(200).json(hospital);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
exports.editHospital = async (req, res) => {
  try {
    const { id } = req.params;
    const hospital = await Hospital.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!hospital)
      res.status(404).json({ message: 'no hospital found with that ID' });
    res.status(200).json(hospital);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
exports.deleteHospital = async (req, res) => {
  try {
    const { id } = req.params;
    const hospital = await Hospital.findByIdAndDelete(id);
    if (!hospital)
      res.status(404).json({ message: 'no hospital fond with that ID' });
    res.status(200).json({ message: 'hospital successfully deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
