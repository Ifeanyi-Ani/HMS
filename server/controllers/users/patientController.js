const Patient = require('../../models/users/Patient');

exports.getPatients = async (req, res) => {
  try {
    const users = await Patient.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getPatient = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Patient.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'no Patient found with that ID' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.editPatient = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Patient.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ message: 'no Patient found with that ID' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Patient.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'no Patient found with that ID' });
    }
    res.status(200).json({ message: 'Patient successfully deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
