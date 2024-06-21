const mongoose = require('mongoose');
const RosterSchema = new mongoose.Schema({
  staff: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  workingDays: [String],
  shifts: [String],
});
module.exports = mongoose.model('Roster', RosterSchema);