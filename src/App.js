import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Colors from './Colors';
import Color from './Color';
import NewColorForm from './NewColorForm';

function App() {
  const initialColors = JSON.parse(localStorage.getItem('colors')) || [{ name: "red", value: "#ff0000" }];
  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  const addColor = (newColor) => {
    setColors(currentColors => [newColor, ...currentColors]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/colors" element={<Colors colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
        <Route path="/colors/:color" element={<Color colors={colors} />} />
        <Route path="*" element={<Navigate replace to="/colors" />} />
      </Routes>
    </Router>
  );
}

export default App;
