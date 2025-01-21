import React, {useState} from 'react';

const categories = [
    'Paycheck',
    'Other_Income',
    'Interest'
];

export const IncomeFinanceForm = ({onSubmit}) => {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState(categories[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ description, amount, category });
        setDescription('');
        setAmount('');
        setCategory(categories[0]);
    };

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>Description: </label>
                <input type="text" name="input" value={description} onChange={(e) => setDescription(e.target.value)} required />

                <br/>
                <label>Amount: </label>
                <input type="number" name="input" value={amount} onChange={(e) => setAmount(e.target.value)} required />

                <br/>
                <label>Category: </label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="Paycheck">Paycheck</option>
                    <option value="Other_Income">Other Income</option>
                    <option value="Interest">Interest</option>
                </select>

                <button type="submit">Add Income</button>
            </form>
        </div>
    );
};