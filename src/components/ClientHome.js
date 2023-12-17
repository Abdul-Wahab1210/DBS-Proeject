// ClientHome.js
import React from 'react';
import './ClientHome.css';
import { Link, useNavigate } from 'react-router-dom';
import Home from './Home';
 

function ClientHome() {
  return (
    <div>
      <header className="App-header">
        <h1>BANKEEZ<i className='fab fa-typo3' /></h1>
      </header>
      <nav>
        <Link to= '/'>        <button >Button 1</button>    </Link>
    
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
