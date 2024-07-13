const Income = require('../models/income');

exports.getIncomes = async (req,res) => {
    try {
        const incomes = await Income.find();
        res.json(incomes);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

exports.addIncome = async (req, res) => {
    const income = new Income({
        description: req.body.description,
        amount: req.body.amount,
        category: req.body.category

    });

    try {
        const newIncome = await income.save();
        res.status(201).json(newIncome);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
};

exports.deleteIncome = async(req,res) => {
    FIXME: UNFINISHED
};