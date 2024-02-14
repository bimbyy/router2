import React from 'react';
import { Link } from 'react-router-dom';

function Hazel() {
  return (
    <div>
      <h2>Hazel</h2>
      <p>Hazel loves walks and swimming</p>
      <Link to="/dogs">Back to all dogs</Link>
    </div>
  );
}

export default Hazel;
