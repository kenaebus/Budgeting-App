import React from 'react';
import { useEffect, useState } from 'react';
import {IncomeFinanceForm} from "../components/IncomeFinanceForm"
import axios from 'axios';

function Incomes() {
    const [incomes, setIncomes] = useState([]);
    
    useEffect(() => {
        axios
            .get('http://localhost:5000/incomes')
            .then((response) =>{
                setIncomes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },[]);

    const handleAddIncome = async (income) => {
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
            <IncomeFinanceForm onSubmit={handleAddIncome}></IncomeFinanceForm>

            <table idname="incomeTable">
                <tbody>
                {incomes.map((income,index) => (
                     <tr key={income.id}>
                        <td>
                            {income.date}
                        </td>
                        <td>
                            {income.description}
                        </td>
                        <td>
                            {income.amount}
                        </td>
                        <td>
                            {income.category}
                        </td>
                     </tr>
                ))}  
                </tbody>
            </table>
        </div>
    );
};



export default Incomes;