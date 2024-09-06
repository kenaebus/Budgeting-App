const Expense = require('../models/expense');
const categories = require('../config/ExpenseCategories');

exports.getExpenses = async (req,res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

exports.addExpense = async (req, res) => {
    const { description, amount, category } = req.body;

    if (!categories.includes(category)) {
        return res.status(400).json({message: "Invalid Category"});
    };

    try {
        const expense = new Expense({
            description,
            amount,
            category
        });

        const newExpense = await expense.save();
        res.status(201).json(newExpense);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
};

exports.deleteExpenses = async(req,res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if (expense == null ) {
            return res.status(404).json({message: 'Cannot find expense'});
        }

        await expense.remove();
        res.json({message: "Deleted Expense"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

exports.editExpenses = async(req, res) => {
    FIXME: UNFINISHED
};