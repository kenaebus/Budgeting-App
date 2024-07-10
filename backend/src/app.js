const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
// const connectDB = require('./config/db');

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});



const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server running on port ${PORT}`));