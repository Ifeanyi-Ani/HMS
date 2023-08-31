const Nurse = require('../../models/users/Nurse');

exports.getNurses = async (req, res) => {
  try {
    const users = await Nurse.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.getNurse = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Nurse.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'Nurse not found with that ID' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
exports.editNurse = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Nurse.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ message: 'no Nurse found with that ID' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
exports.deleteNurse = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Nurse.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'no Nurse found with that ID' });
    }
    res.status(200).json({ message: 'Nurse successfully deleted' });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
