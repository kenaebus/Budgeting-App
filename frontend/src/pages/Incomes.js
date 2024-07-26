import React from 'react';
import {IncomeFinanceForm} from "../components/IncomeFinanceForm"
import axios from 'axios';

function Incomes() {

    const addIncome = async (income) => {
        try {
            const response = await axios.post('http://localhost:5000/incomes', income);
            console.log('Income added: ', response.data); 
        } catch (error) {
            console.error('Error adding income ', error);
        }
    };

    return (
        <div className="Incomes">
            <h1>Incomes</h1>
            <IncomeFinanceForm onSubmit={addIncome}></IncomeFinanceForm>
        </div>
    );
};



export default Incomes;