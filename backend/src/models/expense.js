const mongoose = require('mongoose');
const categories = require('../config/ExpenseCategories');

const ExpenseSchema = new mongoose.Schema({
    description: {
        type: String, 
        required:true
    },
    amount: {
        type: Number, 
        required: true
    },
    category: {
        type: String, 
        enum: categories,
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('Expense', ExpenseSchema);
