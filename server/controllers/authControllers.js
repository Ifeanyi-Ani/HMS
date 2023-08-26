const Receptionist = require('../models/users/Receptionist');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.createReceptionist = async (req, res) => {
  try {
    const user = await Receptionist.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
