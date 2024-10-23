import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
