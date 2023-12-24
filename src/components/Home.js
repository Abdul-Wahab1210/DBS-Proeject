import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [showClientLoginForm, setShowClientLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showEmployeeLoginForm, setShowEmployeeLoginForm] = useState(false);
  const [accountId, setAccountId] = useState('');
  const [password, setPassword] = useState('');
  const [registrationData, setRegistrationData] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    pass: '',
  });

  const handleClientLoginClick = () => {
    setShowClientLoginForm(true);
  };

  const handleEmployeeLoginClick = () => {
    setShowEmployeeLoginForm(true);
  };

  const handleClientModalClose = () => {
    setShowClientLoginForm(false);
  };

  const handleEmployeeModalClose = () => {
    setShowEmployeeLoginForm(false);
  };

  const handleAccountNumberChange = (event) => {
    setAccountId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClientLoginFormSubmit = (event) => {
    event.preventDefault();
    navigate('/ClientHome', { state: { accountId, password } });
  };

  const handleEmployeeLoginFormSubmit = (event) => {
    event.preventDefault();
    // Add logic for handling employee login form submission
    console.log('Employee Login Data:', { accountId, password });
  };

  const handleRegistrationModalClose = () => {
    setShowRegistrationForm(false);
    setShowClientLoginForm(true);
  };

  const handleRegistrationFieldChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegistrationClick = () => {
    setShowRegistrationForm(true);
    setShowClientLoginForm(false);
  };

  const handleRegistrationFormSubmit = (event) => {
    event.preventDefault();
    // Add logic for handling registration form submission
    console.log('Registration Data:', registrationData);
  };

  return (
    <>
      <Header />

      <div className="vertical-navbar">
        <button className="nav-button">Home</button>
        <button className="nav-button">About Us</button>
        <button className="nav-button">Contact</button>
      </div>

      <div className="login">
        <button onClick={handleClientLoginClick}>Client</button>
        <button onClick={handleEmployeeLoginClick}>Employee</button>
      </div>

      {showClientLoginForm && (
        <div className="overlay">
          <div className="login-form">
            <h2>Login Form</h2>
            <form onSubmit={handleClientLoginFormSubmit}>
              <label htmlFor="accountNumber">Account Number:</label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={accountId}
                onChange={handleAccountNumberChange}
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />

              <button type="submit">Login</button>
              <button type="button" onClick={handleClientModalClose}>
                Close
              </button>
              <button type="button" onClick={handleRegistrationClick}>
                Register
              </button>
            </form>
          </div>
        </div>
      )}

      {showRegistrationForm && (
        <div className="overlay">
          <div className="reg-form">
            <h2>Registration Form</h2>
            <form onSubmit={handleRegistrationFormSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={registrationData.username}
                onChange={handleRegistrationFieldChange}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={registrationData.email}
                onChange={handleRegistrationFieldChange}
              />

              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={registrationData.firstName}
                onChange={handleRegistrationFieldChange}
              />

              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={registrationData.lastName}
                onChange={handleRegistrationFieldChange}
              />

              {/* Add more registration form fields as needed */}

              <button type="submit">Register</button>
              <button type="button" onClick={handleRegistrationModalClose}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {showEmployeeLoginForm && (
        <div className="overlay">
          <div className="login-form">
            <h2>Employee Login Form</h2>
            <form onSubmit={handleEmployeeLoginFormSubmit}>
              <label htmlFor="accountNumber">Account Number:</label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={accountId}
                onChange={handleAccountNumberChange}
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />

              <button type="submit">Login</button>
              <button type="button" onClick={handleEmployeeModalClose}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
