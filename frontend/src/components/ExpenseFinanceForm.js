import React, {useState} from 'react';

const categories = [
    'Groceries',
    'Gas',
    'Shopping',
    'Mortgage',
    'Pets',
    'Medical',
    'Entertainment'
];

export const ExpenseFinanceForm = ({onSubmit}) => {
    
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
                    <option value="Groceries">Groceries</option>
                    <option value="Gas">Gas</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Mortgage">Mortgage</option>
                    <option value="Pets">Pets</option>
                    <option value="Medical">Medical</option>
                    <option value="Entertainment">Entertainment</option>
                </select>

                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
};