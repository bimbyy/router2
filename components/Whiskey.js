import React from 'react';
import { Link } from 'react-router-dom';

function Whiskey() {
  return (
    <div>
      <h2>Whiskey</h2>
      <p>Whiskey is a charming dog who loves to play fetch.</p>
      <Link to="/dogs">Back to all dogs</Link>
    </div>
  );
}

export default Whiskey;
