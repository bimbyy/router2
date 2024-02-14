// Color.js
import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

const Color = ({ colors }) => {
  const { color } = useParams();
  const navigate = useNavigate(); // Using useNavigate hook
  const colorObj = colors.find(c => c.name === color);

  if (!colorObj) {
    return <Navigate replace to="/colors" />;
  }

  return (
    <div style={{ backgroundColor: colorObj.value, height: "100vh", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1>This is {colorObj.name}</h1>
      <button onClick={() => navigate(-1)} style={{ marginTop: "20px" }}>Go Back</button>
      {/* The Go Back button uses navigate(-1) to go back to the previous page */}
    </div>
  );
};

export default Color;
