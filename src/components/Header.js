// Header.js
import React from 'react';
import "./Header.css";
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    // Use the navigate function to navigate to the specified path
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <h1 onClick={navigateToHome}>
          BANKEEZ<i className='fab fa-typo3' />
        </h1>
      </div>
    </nav>
  );
};

export default Header;
