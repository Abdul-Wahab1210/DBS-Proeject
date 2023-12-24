// ClientHome.js
import React from 'react';
import './ClientHome.css';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
 

function ClientHome() {
  const location = useLocation();
  const { accountId, password } = location.state || {};

  return (
    <div>
      <Header />
      <nav className='navbar-container'>
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Button 4</button>
        <button>Button 5</button>
        <button>Button 6</button>
      </nav>
    </div>
  );
}

export default ClientHome;
