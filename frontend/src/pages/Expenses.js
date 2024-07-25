import React from 'react';
import {ExpenseFinanceForm} from '../components/ExpenseFinanceForm';
import axios from 'axios';

function Expenses() {

    const addExpense = async (expense) => {
        try {
            const response = await axios.post('http://localhost:5000/expenses', expense);
            console.log('Expense added: ', response.data); 
        } catch (error) {
            console.error('Error adding expense: ', error);
        }
    };

    return (
        <div className="Expenses">
            <h1>Expenses</h1>
            <ExpenseFinanceForm onSubmit={addExpense}></ExpenseFinanceForm>

        </div>
    );
};



export default Expenses;