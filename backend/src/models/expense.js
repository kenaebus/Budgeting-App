const mongoose = require('mongoose');
const categories = require('../config/expenseCategories');

const ExpenseSchema = new mongoose.Schema({
    description: {type: String, required:true},
    amount: {type: Number, required: true},
    category: {type: String, enum: categories, required: true},
    date: {type: Date, default: Date.now}
});

module.export = mongoose.model('Expense', ExpenseSchema);
