import React from 'react';
import { Link } from 'react-router-dom';

const Colors = ({ colors }) => {
  return (
    <div className="container">
      <h1>Color Creator 10000</h1>
      <Link to="/colors/new" className="add-color-button">Add a color</Link>
      <div className="color-grid">
        {colors.map(color => (
          <Link key={color.name} to={`/colors/${color.name}`} style={{ backgroundColor: color.value }} className="color-card">
            {color.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Colors;