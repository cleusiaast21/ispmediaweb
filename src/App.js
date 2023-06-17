import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '../src/screens/Login.jsx'
import Registration from '../src/screens/Registration.jsx'
import Home from '../src/screens/Home.jsx'


export default function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Registration" element={<Registration/>} />
        <Route path="/Home" element={<Home/>} />

        
      </Routes>
    </Router>
  );
};

