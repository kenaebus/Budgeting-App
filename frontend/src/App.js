import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Expenses from './components/Expenses';
//Styles
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        
        <img src={require("./images/logo.png")} className="AppLogo" alt="logo"/>
        <div className="vollkorn">Control your <span id='gold'>Growth</span></div>
        <div className="raleway">Your <span id="gold">Life</span></div>
      
      </header>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/Expenses">Login</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/Expenses" element={<expenseRoutes/>} />
    </Routes>
    </>
  );
}

export default App;
