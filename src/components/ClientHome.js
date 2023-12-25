import React, { useState } from 'react';
import './ClientHome.css';
import { useLocation } from 'react-router-dom';
import Header from './Header';

function ClientHome() {
  const location = useLocation();
  const { accountId, password, accountHolderName, amount } = location.state || {};
  const [showTransactionLog, setShowTransactionLog] = useState(false);
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
  const [showTransferForm, setShowTransferForm] = useState(false);
  const [showLoanRequestForm, setShowLoanRequestForm] = useState(false);
  const [formValues, setFormValues] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const [transferFormValues, setTransferFormValues] = useState({
    receiverAccountId: '',
    amount: '',
  });
  const [loanRequestFormValues, setLoanRequestFormValues] = useState({
    amount: '',
    duration: '',
  });

  const transactionLogData = [
    { receiverAccountId: '123456', amount: 100, purpose: 'Payment' },
    { receiverAccountId: '789012', amount: 50, purpose: 'Purchase' },
    { receiverAccountId: '345678', amount: 75, purpose: 'Transfer' },
    { receiverAccountId: '901234', amount: 120, purpose: 'Payment' },
    { receiverAccountId: '567890', amount: 30, purpose: 'Purchase' },
    { receiverAccountId: '234567', amount: 90, purpose: 'Transfer' },
    { receiverAccountId: '890123', amount: 40, purpose: 'Payment' },
    { receiverAccountId: '456789', amount: 60, purpose: 'Purchase' },
    { receiverAccountId: '123890', amount: 110, purpose: 'Transfer' },
    { receiverAccountId: '678901', amount: 70, purpose: 'Payment' },
    { receiverAccountId: '345678', amount: 85, purpose: 'Purchase' },
    { receiverAccountId: '901456', amount: 95, purpose: 'Transfer' },
    { receiverAccountId: '567123', amount: 55, purpose: 'Payment' },
    { receiverAccountId: '234890', amount: 65, purpose: 'Purchase' },
    { receiverAccountId: '890456', amount: 105, purpose: 'Transfer' },
    { receiverAccountId: '456123', amount: 45, purpose: 'Payment' },
    { receiverAccountId: '123567', amount: 80, purpose: 'Purchase' },
    { receiverAccountId: '789456', amount: 115, purpose: 'Transfer' },
    { receiverAccountId: '234234', amount: 25, purpose: 'Payment' },
    { receiverAccountId: '567567', amount: 120, purpose: 'Purchase' },
    { receiverAccountId: '890890', amount: 35, purpose: 'Transfer' },
    { receiverAccountId: '123123', amount: 80, purpose: 'Payment' },
    { receiverAccountId: '456456', amount: 110, purpose: 'Purchase' },
    { receiverAccountId: '789789', amount: 25, purpose: 'Transfer' },
  ];

  const handleTransactionLogClick = () => {
    setShowTransactionLog(true);
    setShowChangePasswordForm(false);
    setShowTransferForm(false);
    setShowLoanRequestForm(false);
  };

  const handleShowChangePasswordForm = () => {
    setShowChangePasswordForm(true);
    setShowTransactionLog(false);
    setShowTransferForm(false);
    setShowLoanRequestForm(false);
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
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    });
  };

  const handleTransferFormInputChange = (e) => {
    const { name, value } = e.target;
    setTransferFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleTransferFormSubmit = (e) => {
    e.preventDefault();
    // Handle transfer form submission logic here
    console.log('Transfer Form submitted:', transferFormValues);
    // Reset form values
    setTransferFormValues({
      receiverAccountId: '',
      amount: '',
    });
  };

  const handleLoanRequestFormInputChange = (e) => {
    const { name, value } = e.target;
    setLoanRequestFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleLoanRequestFormSubmit = (e) => {
    e.preventDefault();
    // Handle loan request form submission logic here
    console.log('Loan Request Form submitted:', loanRequestFormValues);
    // Reset form values
    setLoanRequestFormValues({
      amount: '',
      duration: '',
    });
    // Additional logic for loan request
  };

  const handleTransferButtonClick = () => {
    setShowTransactionLog(false);
    setShowChangePasswordForm(false);
    setShowTransferForm(true);
    setShowLoanRequestForm(false);
  };

  const handleChangePasswordClick = () => {
    // Handle click logic here
  };

  const handleLoanRequestClick = () => {
    setShowTransactionLog(false);
    setShowChangePasswordForm(false);
    setShowTransferForm(false);
    setShowLoanRequestForm(true);
  };

  const handleTransferFormSubmitClick = () => {
    // Handle click logic here
  };

  const handleAccountInfoClick = () => {
    setShowTransactionLog(false);
    setShowChangePasswordForm(false);
    setShowTransferForm(false);
    setShowLoanRequestForm(false);
  };

  return (
    <div className="client-home-container">
      <Header />

      <div className="CHcontainer">
        <div className="CHvertical-navbar">
          <button className="CHnav-button" onClick={handleShowChangePasswordForm}>
            Change Account Info
          </button>
          <button className="CHnav-button" onClick={handleAccountInfoClick}>
            Account Info
          </button>
          <button className="CHnav-button" onClick={handleTransferButtonClick}>
            Transfer
          </button>
          <button className="CHnav-button" onClick={handleShowChangePasswordForm}>
            Change Password
          </button>
          <button className="CHnav-button" onClick={handleTransactionLogClick}>
            Transaction History
          </button>
          <button className="CHnav-button" onClick={handleLoanRequestClick}>
            Loan Request
          </button>
          <button className="CHnav-button" onClick={handleAccountInfoClick}>
            Loan Payment
          </button>
        </div>

        <div className="CHcontent-container">
          {showTransactionLog && (
            <div className="transaction-log-table">
              <table>
                <thead>
                  <tr>
                    <th>Receiver Account Id</th>
                    <th>Amount</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionLogData.map((log, index) => (
                    <tr key={index}>
                      <td>{log.receiverAccountId}</td>
                      <td>{log.amount}</td>
                      <td>{log.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {showChangePasswordForm && (
            <form onSubmit={handleFormSubmit} className="change-password-form">
              <div className="form-group">
                <label>
                  <span>Old Password:</span>
                  <input
                    type="password"
                    name="oldPassword"
                    value={formValues.oldPassword}
                    onChange={handleFormInputChange}
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  <span>New Password:</span>
                  <input
                    type="password"
                    name="newPassword"
                    value={formValues.newPassword}
                    onChange={handleFormInputChange}
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  <span>Confirm New Password:</span>
                  <input
                    type="password"
                    name="confirmNewPassword"
                    value={formValues.confirmNewPassword}
                    onChange={handleFormInputChange}
                    required
                  />
                </label>
              </div>
              <button type="submit" onClick={handleChangePasswordClick}>
                Submit
              </button>
            </form>
          )}
          {showTransferForm && (
            <form onSubmit={handleTransferFormSubmit} className="transfer-form">
              <div className="form-group">
                <label>
                  <span>Receiver Account Id:</span>
                  <input
                    type="text"
                    name="receiverAccountId"
                    value={transferFormValues.receiverAccountId}
                    onChange={handleTransferFormInputChange}
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
                    value={transferFormValues.amount}
                    onChange={handleTransferFormInputChange}
                    required
                  />
                </label>
              </div>
              <button type="submit" onClick={handleTransferFormSubmitClick}>
                Submit Transfer
              </button>   
            </form>
          )}
          {showLoanRequestForm && (
            <form onSubmit={handleLoanRequestFormSubmit} className="loan-request-form">
              <div className="form-group">
                <label>
                  <span>Amount:</span>
                  <input
                    type="text"
                    name="amount"
                    value={loanRequestFormValues.amount}
                    onChange={handleLoanRequestFormInputChange}
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  <span>Duration (months):</span>
                  <input
                    type="text"
                    name="duration"
                    value={loanRequestFormValues.duration}
                    onChange={handleLoanRequestFormInputChange}
                    required
                  />
                </label>
              </div>
              <button type="submit">
                Submit Loan Request
              </button>
            </form>
          )}

          {!showTransactionLog && !showChangePasswordForm && !showTransferForm && !showLoanRequestForm && (
            <div className="CHcontent account-info">
              <p><strong>Account ID:</strong> {accountId}</p>
              <p><strong>Account Holder's Name:</strong> {accountHolderName}</p>
              <p><strong>Amount:</strong> {amount}</p>
              <button className="account-info-button" onClick={handleAccountInfoClick}>
                Go Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClientHome;
