const mongoose = require('mongoose');
const AttendanceSchema = new mongoose.Schema({
  staff: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timestamp: { type: Date, default: Date.now },
  image: String,
});
module.exports = mongoose.model('Attendance', AttendanceSchema);