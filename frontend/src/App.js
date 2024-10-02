import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Expenses from './pages/Expenses';
import Dashboard from './pages/Dashboard';
import Incomes from './pages/Incomes';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/Expenses' element={<Expenses/>} />
      <Route path='/Incomes' element={<Incomes/>} />
    </Routes>
  );
};

export default App;