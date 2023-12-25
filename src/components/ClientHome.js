import React from 'react';
import './ClientHome.css';
import { useLocation } from 'react-router-dom';
import Header from './Header';

function ClientHome() {
  const location = useLocation();
  const { accountId, password } = location.state || {};

  return (
    <div className="client-home-container">
      <Header />

      <div className="CHcontainer">
        <div className="CHvertical-navbar">
          <button className="CHnav-button">Change Account Info</button>
          <button className="CHnav-button">Account Info</button>
          <button className="CHnav-button">Transfer</button>
          <button className="CHnav-button">Change Password</button>
          <button className="CHnav-button">Transaction History</button>
          <button className="CHnav-button">Loan Request</button>
          <button className="CHnav-button">Loan Payment</button>
        </div>

        <div className="CHcontent-container">
          <div className="CHcontent">Hello</div>
        </div>
      </div>
    </div>
  );
}

export default ClientHome;
