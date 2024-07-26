const Income = require('../models/income');
const categories = require('../config/IncomeCategories');

exports.getIncomes = async (req,res) => {
    try {
        const incomes = await Income.find();
        res.json(incomes);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

exports.addIncome = async (req, res) => {
    const { description, amount, category } = req.body;

    if (!categories.includes(category)) {
        return res.status(400).json({message: "Invalid Category"});
    };

    try {
        const income = new Income({
            description,
            amount,
            category
        });

        const newIncome = await income.save();
        res.status(201).json(newIncome);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
};

exports.deleteIncome = async(req,res) => {
    FIXME: UNFINISHED
};