const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error("Sorry some error came, we are on it",error.message);
    process.exit(1);
  }
};
module.exports = connectDB;


// mongoose.connect('mongodb+srv://admin:Test123@cluster0.c7ykqji.mongodb.net/').then(console.log("MONGO DB CONNECTED"));
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));