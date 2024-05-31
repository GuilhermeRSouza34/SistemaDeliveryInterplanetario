import './App.css';
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddAddress from '../src/pages/AddAddress';
import EditAddress from '../src/pages/EditAddress';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/edit-address/:id" element={<EditAddress />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
