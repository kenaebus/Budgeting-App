const mongoose = require('mongoose');
const categories = require('../config/IncomeCategories');

const IncomeSchema = new mongoose.Schema({
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
        default: Date.now}
});

module.export = mongoose.model('Income', IncomeSchema);
