import React from 'react';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Expenses from './pages/Expenses';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Expenses' element={<Expenses/>} />
=======
import { Route, Routes, Link} from 'react-router-dom';
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
      
        <nav>
          <ul>
            <li>
              <Link to ="/">Home</Link>
              <Link to="/Expenses">Login</Link>
            </li>
          </ul>
        </nav>

      </header>
    </div>
   
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Expenses" element={<Expenses/>} />
>>>>>>> 1ed9c17d6464fc74dc456598a992d57e87ea2ba2
    </Routes>
  );
};

export default App;