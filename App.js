// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Whiskey from './components/Whiskey';
import Hazel from './components/Hazel';
import Tubby from './components/Tubby';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dogs" element={<Home />} />
        <Route path="/dogs/whiskey" element={<Whiskey />} />
        <Route path="/dogs/hazel" element={<Hazel />} />
        <Route path="/dogs/tubby" element={<Tubby />} />
        <Route path="*" element={<Navigate replace to="/dogs" />} />
      </Routes>
    </Router>
  );
}

export default App;
