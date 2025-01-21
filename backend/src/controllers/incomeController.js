const Income = require('../models/income');
const categories = require('../config/IncomeCategories');

// Retrieve all incomes entries in the MongoDB
exports.getIncomes = async (req,res) => {
    try {
        const incomes = await Income.find();
        res.json(incomes);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

// Send income entry to the MongoDB
exports.addIncome = async (req, res) => {
    const { description, amount, category } = req.body;

    if (!categories.includes(category)) {       // Validation for proper Categories
        return res.status(400).json({message: "Invalid Category"});
    };

    try { // Create new entry
        const income = new Income({
            description,
            amount,
            category
        });

        const newIncome = await income.save(); // Save entry
        res.status(201).json(newIncome);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
};

exports.deleteIncome = async(req,res) => {
    FIXME: UNFINISHED
};