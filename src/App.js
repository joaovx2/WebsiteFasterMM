import React from 'react';
import './App.css';
import Header from './Header';
import './Header.css';
import Home from './Home';
import Login from './login';  
import Checkout from './checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Header /> {/* This will render the Header on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
