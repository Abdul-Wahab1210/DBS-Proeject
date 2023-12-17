// Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file
import ClientHome from './ClientHome';

function Home() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/home'>
            BANKEEZ<i className='fab fa-typo3' />
          </Link>
        </div>
      </nav>
      {/* Insert the Vertical Navbar component here */}
      <div className="vertical-navbar">
        <button className="nav-button" onClick={handleClick}>Home</button>
        <button className="nav-button" onClick={handleClick}>About</button>
        <button className="nav-button" onClick={handleClick}>Contact</button>
        {/* Add more buttons as needed */}
      </div>
    </>
  );
}

export default Home;