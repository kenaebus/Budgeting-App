import React from 'react';
import { Link } from 'react-router-dom';


function Dashboard() {
    return (
        <div className="Dashboard">
            <h1>Dashboard</h1>
            <Link to = "/Expenses">Expenses</Link>
            <br/>
            <Link to = "/Incomes">Incomes</Link>
        </div>
    );
}

export default Dashboard;