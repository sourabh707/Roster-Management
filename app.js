const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const rosterRoutes = require('./routes/rosterRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');



const app = express();
connectDB();

// Parse JSON request bodies
app.use(express.json());
cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/roster', rosterRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/uploads', express.static('uploads'));
app.get('/api/auth/register', (req, res) => {
    res.send('GET request to /api/auth/register');
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
