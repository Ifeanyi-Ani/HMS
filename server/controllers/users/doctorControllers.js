const Doctor = require('../../models/users/Doctor');

exports.getDoctors = async (req, res) => {
  try {
    const users = await Doctor.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.getDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Doctor.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'Doctor not found with that ID' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
exports.editDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Doctor.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ message: 'no Doctor found with that ID' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
exports.deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Doctor.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'no Doctor found with that ID' });
    }
    res.status(200).json({ message: 'Doctor successfully deleted' });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
