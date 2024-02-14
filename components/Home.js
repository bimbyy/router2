import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Our Dogs</h1>
      <ul>
        <li><Link to="/dogs/whiskey">Whiskey</Link></li>
        <li><Link to="/dogs/hazel">Hazel</Link></li>
        <li><Link to="/dogs/tubby">Tubby</Link></li>
      </ul>
    </div>
  );
}

export default Home;