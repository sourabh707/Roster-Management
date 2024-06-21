// routes/rosterRoutes.js
const express = require('express');
const { addStaff, editStaff, viewRoster } = require('../controllers/rosterController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const router = express.Router();

router.post('/add', authMiddleware, roleMiddleware('Manager'), addStaff);
router.put('/edit/:id', authMiddleware, roleMiddleware('Manager'), editStaff);
router.get('/', authMiddleware, roleMiddleware('Manager'), viewRoster);

module.exports = router;
