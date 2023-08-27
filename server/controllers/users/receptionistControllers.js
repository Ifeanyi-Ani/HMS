const Receptionist = require('../../models/users/Receptionist');

exports.getReceptionists = async (req, res) => {
  try {
    const users = await Receptionist.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.getReceptionist = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Receptionist.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'Receptionist not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
exports.editReceptionist = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Receptionist.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res
        .status(404)
        .json({ message: 'no Receptionist found with that ID' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
exports.deleteReceptionist = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Receptionist.findByIdAndDelete(id);
    if (!user) {
      return res
        .status(404)
        .json({ message: 'no Receptionist found with that ID' });
    }
    res.status(200).json({ message: 'Receptionist successfully deleted' });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
