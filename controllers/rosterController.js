const Roster = require('../models/roster');
const User = require('../models/user');

exports.addStaff = async (req, res) => {
  try {
    const { staffId, workingDays, shifts } = req.body;
    const roster = new Roster({ staff: staffId, workingDays, shifts });
    await roster.save();
    res.status(201).send(roster);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.editStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const { workingDays, shifts } = req.body;
    const roster = await Roster.findByIdAndUpdate(id, { workingDays, shifts }, { new: true });
    res.send(roster);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.viewRoster = async (req, res) => {
  try {
    const roster = await Roster.find().populate('staff');
    res.send(roster);
  } catch (error) {
    res.status(400).send(error);
  }
};
