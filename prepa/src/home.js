import React from 'react';
import { Link } from 'react-router-dom';

function HomeUs() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

export default HomeUs;
