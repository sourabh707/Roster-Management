const Attendance = require('../models/attendance');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

exports.markAttendance = [
  upload.single('image'),
  async (req, res) => {
    try {
      const attendance = new Attendance({
        staff: req.user._id,
        image: req.file.path,
      });
      await attendance.save();
      res.status(201).send(attendance);
    } catch (error) {
      res.status(400).send(error);
    }
  },
];

exports.viewShifts = async (req, res) => {
  try {
    const shifts = await Roster.findOne({ staff: req.user._id });
    res.send(shifts);
  } catch (error) {
    res.status(400).send(error);
  }
};
