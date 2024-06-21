const express = require('express');
const { markAttendance, viewShifts } = require('../controllers/attendanceController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/mark', authMiddleware, markAttendance);
router.get('/shifts', authMiddleware, viewShifts);

module.exports = router;