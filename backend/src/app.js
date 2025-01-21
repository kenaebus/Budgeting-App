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

app.use(cors());
app.use(bodyParser.json());
app.use('/expenses',expenseRoutes);
app.use('/incomes',incomeRoutes);

// Route for getting Expenses from database
app.get('/expenses', async (request, response) => {
    try {
        const expenses = await Expenses.find({});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

app.delete('/expenses/:id', async (request, response) => {
    try {
        const {id} = request.params;

        const result = await Expense.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({message: "Expense not found"});
        }

        return response.status(200).send({ message: "Expense deleted succesfully"});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for getting Incomes from database
app.get('/incomes', async (request, response) => {
    try {
        const incomes = await Incomes.find({});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});
// Connect to REACT App 
app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server running on port ${PORT}`));