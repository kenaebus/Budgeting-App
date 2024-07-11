const Expense = require('../models/expense');

exports.getExpenses = async (req,res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

exports.addExpense = async (req, res) => {
    const expense = new Expense({
        description: req.body.description,
        amount: req.body.amount,
        category: req.body.category

    });

    try {
        const newExpense = await expense.save();
        res.status(201).json(newExpense);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
};