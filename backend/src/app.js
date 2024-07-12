const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const expenseRoutes = require('./routes/expenseRoutes');
const incomeRoutes = require('./routes/incomeRoutes');

//Load Enviornment Variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

app.use(cors(
    {
        origin: 'http://localhost:3000',
    }
));

app.use(bodyParser.json());


app.use('/expenses',require('./routes/expenseRoutes'));
app.use('/incomes',require('./routes/incomeRoutes'));

// Connect to REACT App 
app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server running on port ${PORT}`));