const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async() => {
    try {
        const uri= process.env.MONGO_URI;
        if (!uri) {
            throw new Error("MONGO_URI is not defined");
        }
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000, // Adjust as needed
            socketTimeoutMS: 45000, // Adjust as needed
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};


console.log("Mongo URI:", process.env.MONGO_URI);

module.exports = connectDB;