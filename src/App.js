import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './project/Frontend';
import RegistrationForm from './Users/User';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Register" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
