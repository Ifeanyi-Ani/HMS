const Receptionist = require('../../models/users/Receptionist');

exports.getReceptionists = async (req, res) => {
  try {
    const receptionist = await Receptionist.find();
    res.status(200).json(receptionist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.createReceptionist = async (req, res) => {
  try {
    const receptionist = await Receptionist.create(req.body);
    res.status(201).json(receptionist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
