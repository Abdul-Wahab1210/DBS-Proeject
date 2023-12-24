import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file
import ClientHome from './ClientHome';

function Home() {
  const [showClientLoginForm, setShowClientLoginForm] = useState(false);

  const handleClientLoginClick = () => {
    setShowClientLoginForm(true);
  };

  const handleModalClose = () => {
    setShowClientLoginForm(false);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1>
            BANKEEZ<i className='fab fa-typo3' />
          </h1>
        </div>
      </nav>


      <div className="vertical-navbar">
        <button className="nav-button">Home</button>
        <button className="nav-button">About Us</button>
        <button className="nav-button">Contact</button>
      </div>

      <div className="login">
      <button onClick={handleClientLoginClick}>Client</button>
      <button>Employee</button>
      </div>

      {showClientLoginForm && (
        <div className="overlay">
          <div className="login-form">
            {/* Your login form content goes here */}
            <h2>Login Form</h2>
            <form>
              {/* Add your form fields */}
              <button type="button" onClick={handleModalClose}>Close</button>
            </form>
          </div>
        </div>
        )
      }
   </>
  );
}

export default Home;

