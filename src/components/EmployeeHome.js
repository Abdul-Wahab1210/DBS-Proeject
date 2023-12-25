import React, { useState } from 'react';
import './EmployeeHome.css';
import { useLocation } from 'react-router-dom';
import Header from './Header';

function EmployeeHome() {
  const location = useLocation();
  const { accountId, password } = location.state || {};
  const [showDepositForm, setShowDepositForm] = useState(false);
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);
  const [formValues, setFormValues] = useState({
    accountId: '',
    amount: '',
  });

  const handleDepositButtonClick = () => {
    setShowDepositForm(true);
    setShowWithdrawForm(false);
  };

  const handleWithdrawButtonClick = () => {
    setShowWithdrawForm(true);
    setShowDepositForm(false);
  };

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formValues);
    // Reset form values
    setFormValues({
      accountId: '',
      amount: '',
    });
  };

  return (
    <div className="Employee-home-container">
      <Header />
      <div className="EHcontainer">
        <div className="EHvertical-navbar">
          <button className="EHnav-button">Retrieve Account Info</button>
          <button className="EHnav-button">Loan Applications</button>
          <button className="EHnav-button" onClick={handleDepositButtonClick}>
            Deposit
          </button>
          <button className="EHnav-button" onClick={handleWithdrawButtonClick}>
            Withdraw
          </button>
          <button className="EHnav-button">Freeze Account</button>
          <button className="EHnav-button">Customer Transaction Log</button>
        </div>

        <div className="EHcontent-container">
          <div className="EHcontent">
            {showDepositForm && (
              <form onSubmit={handleFormSubmit} className="deposit-form">
                <div className="form-group">
                  <label>
                    <span>Account ID:</span>
                    <input
                      type="text"
                      name="accountId"
                      value={formValues.accountId}
                      onChange={handleFormInputChange}
                      required
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    <span>Amount:</span>
                    <input
                      type="text"
                      name="amount"
                      value={formValues.amount}
                      onChange={handleFormInputChange}
                      required
                    />
                  </label>
                </div>
                <button type="submit">Deposit</button>
              </form>
            )}

            {showWithdrawForm && (
              <form onSubmit={handleFormSubmit} className="withdraw-form">
                <div className="form-group">
                  <label>
                    <span>Account ID:</span>
                    <input
                      type="text"
                      name="accountId"
                      value={formValues.accountId}
                      onChange={handleFormInputChange}
                      required
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    <span>Amount:</span>
                    <input
                      type="text"
                      name="amount"
                      value={formValues.amount}
                      onChange={handleFormInputChange}
                      required
                    />
                  </label>
                </div>
                <button type="submit">Withdraw</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeHome;
