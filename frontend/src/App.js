import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Expenses from './pages/Expenses';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Expenses' element={<Expenses/>} />
    </Routes>
  );
};

export default App;