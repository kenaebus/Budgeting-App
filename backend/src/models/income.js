const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
    description: {type: String, required:true},
    amount: {type: Number, required: true},
    category: {type: String, required: true},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Income', IncomeSchema);
