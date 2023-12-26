import React, { useState } from 'react';
import './EmployeeHome.css';
import { useLocation } from 'react-router-dom';
import Header from './Header';

function EmployeeHome() {
  const location = useLocation();
  const { accountId, password } = location.state || {};
  const [showDepositForm, setShowDepositForm] = useState(false);
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);
  const [showRetrieveInfoForm, setShowRetrieveInfoForm] = useState(false); // Add state for retrieving account info
  const [showLoanApplications, setShowLoanApplications] = useState(false); // Add state for loan applications
  const [showFreezeAccountForm, setShowFreezeAccountForm] = useState(false); // Add state for freezing account
  const [showTransactionLogForm, setShowTransactionLogForm] = useState(false); // Add state for customer transaction log
  const [formValues, setFormValues] = useState({
    accountId: '',
    amount: '',
    loanId: '', // Add loanId to form values
  });
  const [freezeAccountFormValues, setFreezeAccountFormValues] = useState({
    accountId: '',
    reason: '',
  });

  const [transactionLogFormValues, setTransactionLogFormValues] = useState({
    accountId: '',
  });

  const [approvalFormValues, setApprovalFormValues] = useState({
    loanId: '',
  });

  const [loanApplications, setLoanApplications] = useState([
    // Example loan application data
    { loanId: '1', accountId: '12345', amount: 5000, duration: 12 },
    { loanId: '2', accountId: '67890', amount: 8000, duration: 24 },
    { loanId: '3', accountId: '12345', amount: 5000, duration: 12 },
    { loanId: '4', accountId: '67890', amount: 8000, duration: 24 },
    { loanId: '5', accountId: '12345', amount: 5000, duration: 12 },
    { loanId: '6', accountId: '67890', amount: 8000, duration: 24 },
    { loanId: '7', accountId: '12345', amount: 5000, duration: 12 },
    { loanId: '8', accountId: '67890', amount: 8000, duration: 24 },
    { loanId: '9', accountId: '12345', amount: 5000, duration: 12 },
    { loanId: '10', accountId: '67890', amount: 8000, duration: 24 },
    // Add more loan application data as needed
  ]);

  const handleDepositButtonClick = () => {
    setShowDepositForm(true);
    setShowWithdrawForm(false);
    setShowRetrieveInfoForm(false); // Hide other forms
    setShowLoanApplications(false);
    setShowFreezeAccountForm(false);
    setShowTransactionLogForm(false);
  };

  const handleWithdrawButtonClick = () => {
    setShowWithdrawForm(true);
    setShowDepositForm(false);
    setShowRetrieveInfoForm(false); // Hide other forms
    setShowLoanApplications(false);
    setShowFreezeAccountForm(false);
    setShowTransactionLogForm(false);
  };

  const handleRetrieveInfoButtonClick = () => {
    setShowRetrieveInfoForm(true);
    setShowDepositForm(false);
    setShowWithdrawForm(false);
    setShowLoanApplications(false);
    setShowFreezeAccountForm(false);
    setShowTransactionLogForm(false);
  };

  const handleLoanApplicationsButtonClick = () => {
    setShowLoanApplications(true);
    setShowDepositForm(false);
    setShowWithdrawForm(false);
    setShowRetrieveInfoForm(false);
    setShowFreezeAccountForm(false);
    setShowTransactionLogForm(false);
  };

  const handleFreezeAccountButtonClick = () => {
    setShowFreezeAccountForm(true);
    setShowDepositForm(false);
    setShowWithdrawForm(false);
    setShowRetrieveInfoForm(false);
    setShowLoanApplications(false);
    setShowTransactionLogForm(false);
  };

  const handleTransactionLogButtonClick = () => {
    setShowTransactionLogForm(true);
    setShowDepositForm(false);
    setShowWithdrawForm(false);
    setShowRetrieveInfoForm(false);
    setShowLoanApplications(false);
    setShowFreezeAccountForm(false);
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
      loanId: '',
    });
  };

  const handleLoanApproval = () => {
    // Logic for approving a loan
    console.log('Loan Approved:', formValues.loanId);
  };

  const handleLoanRejection = () => {
    // Logic for rejecting a loan
    console.log('Loan Rejected:', formValues.loanId);
  };

  const handleLoanApprovalInputChange = (e) => {
    const { name, value } = e.target;
    setApprovalFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleLoanApprovalSubmit = (e) => {
    e.preventDefault();
    // Handle loan approval logic here
    console.log('Loan Approval Form submitted:', approvalFormValues);
    // Reset form values
    setApprovalFormValues({
      loanId: '',
    });
  };
  
  const handleFreezeAccountInputChange = (e) => {
    const { name, value } = e.target;
    setFreezeAccountFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleTransactionLogInputChange = (e) => {
    const { name, value } = e.target;
    setTransactionLogFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFreezeAccountSubmit = (e) => {
    e.preventDefault();
    // Handle freeze account logic here
    console.log('Freeze Account Form submitted:', freezeAccountFormValues);
    // Reset form values
    setFreezeAccountFormValues({
      accountId: '',
      reason: '',
    });
  };

  const handleTransactionLogSubmit = (e) => {
    e.preventDefault();
    // Handle transaction log logic here
    console.log('Transaction Log Form submitted:', transactionLogFormValues);
    // Reset form values
    setTransactionLogFormValues({
      accountId: '',
    });
  };

  return (
    <div className="Employee-home-container">
      <Header />
      <div className="EHcontainer">
        <div className="EHvertical-navbar">
          <button className="EHnav-button" onClick={handleRetrieveInfoButtonClick}>
            Retrieve Account Info
          </button>
          <button className="EHnav-button" onClick={handleLoanApplicationsButtonClick}>
            Loan Applications
          </button>
          <button className="EHnav-button" onClick={handleDepositButtonClick}>
            Deposit
          </button>
          <button className="EHnav-button" onClick={handleWithdrawButtonClick}>
            Withdraw
          </button>
          <button className="EHnav-button" onClick={handleFreezeAccountButtonClick}>
            Freeze Account
          </button>
          <button className="EHnav-button" onClick={handleTransactionLogButtonClick}>
            Customer Transaction Log
          </button>
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

            {/* Retrieve Account Info Form */}
            {showRetrieveInfoForm && (
              <form onSubmit={handleFormSubmit} className="retrieve-info-form">
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
                <button type="submit">Retrieve Info</button>
              </form>
            )}

            {/* Loan Applications Form */}
            {showLoanApplications && (
  <div className="EHcontent-container">
    <div className="EHcontent">
      <div className="loan-applications-table">
        <table>
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Account ID</th>
              <th>Amount</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {loanApplications.map((application) => (
              <tr key={application.loanId}>
                <td>{application.loanId}</td>
                <td>{application.accountId}</td>
                <td>{application.amount}</td>
                <td>{application.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="loan-approval-form">
        <form onSubmit={handleLoanApprovalSubmit}>
          <div className="form-group">
            <label>
              <span>Loan ID:</span>
              <input
                type="text"
                name="loanId"
                value={approvalFormValues.loanId}
                onChange={handleLoanApprovalInputChange}
                required
              />
            </label>
          </div>
          <button type="submit">Approve</button>
        </form>
      </div>
    </div>
  </div>
)}


{showFreezeAccountForm && (
            <form onSubmit={handleFreezeAccountSubmit} className="freeze-account-form">
              <div className="form-group">
                <label>
                  <span>Account ID:</span>
                  <input
                    type="text"
                    name="accountId"
                    value={freezeAccountFormValues.accountId}
                    onChange={handleFreezeAccountInputChange}
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  <span>Reason:</span>
                  <select
                    name="reason"
                    value={freezeAccountFormValues.reason}
                    onChange={handleFreezeAccountInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select Reason
                    </option>
                    <option value="Fraud">Fraud</option>
                    <option value="LostCard">Lost Card</option>
                    {/* Add more reasons as needed */}
                  </select>
                </label>
              </div>
              <button type="submit">Freeze Account</button>
            </form>
          )}

          {/* Customer Transaction Log Form */}
          {showTransactionLogForm && (
            <form onSubmit={handleTransactionLogSubmit} className="transaction-log-form">
              <div className="form-group">
                <label>
                  <span>Account ID:</span>
                  <input
                    type="text"
                    name="accountId"
                    value={transactionLogFormValues.accountId}
                    onChange={handleTransactionLogInputChange}
                    required
                  />
                </label>
              </div>
              <button type="submit">View Transaction Log</button>
            </form>
          )}
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeHome;
