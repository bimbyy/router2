import React from 'react';
import { Link } from 'react-router-dom';

function Tubby() {
  return (
    <div>
      <h2>Tubby</h2>
      <p>Tubby is the grumpiest oldest dog you have ever met but he loves to sit on laps.</p>
      <Link to="/dogs">Back to all dogs</Link>
    </div>
  );
}

export default Tubby;
