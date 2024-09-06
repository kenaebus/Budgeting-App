import React from 'react';
import { useEffect, useState } from 'react';
import {ExpenseFinanceForm} from '../components/ExpenseFinanceForm';
import axios from 'axios';

function Expenses() {
    const [expenses, setExpenses] = useState([]);
    
    useEffect(() => {
        axios
            .get('http://localhost:5000/expenses')
            .then((response) =>{
                setExpenses(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    },[]);

    const handleAddExpense = async (expense) => {
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
            <ExpenseFinanceForm onSubmit={handleAddExpense}></ExpenseFinanceForm>
            
            <table idName="expenseTable">
                <tbody>
                {expenses?.map((expense,index) => (
                     <tr key={expense.id}>
                        <td>
                            {expense.date}
                        </td>
                        <td>
                            {expense.description}
                        </td>
                        <td>
                            {expense.amount}
                        </td>
                        <td>
                            {expense.category}
                        </td>
                     </tr>
                ))}  
                </tbody>
            </table>

        </div>    
    );
};



export default Expenses;