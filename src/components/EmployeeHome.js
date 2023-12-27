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
  const [showLoanInfo, setshowLoanInfo] = useState(false);
  const [retrievedAccountInfo, setRetrievedAccountInfo] = useState(null);
  const [formValues, setFormValues] = useState({
    accountId: '',
    amount: '',
    loanId: '',
    pin:'',
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

  const [loanInfo, setLoanInfo] = useState([]);

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
    setRetrievedAccountInfo(false);
    setshowLoanInfo(false);
    setShowDepositForm(true);
    setShowWithdrawForm(false);
    setShowRetrieveInfoForm(false); // Hide other forms
    setShowLoanApplications(false);
    setShowFreezeAccountForm(false);
    setShowTransactionLogForm(false);
  };

  const handleWithdrawButtonClick = () => {
    setRetrievedAccountInfo(false);
    setshowLoanInfo(false);
    setShowWithdrawForm(true);
    setShowDepositForm(false);
    setShowRetrieveInfoForm(false); // Hide other forms
    setShowLoanApplications(false);
    setShowFreezeAccountForm(false);
    setShowTransactionLogForm(false);
  };

  const handleRetrieveInfoButtonClick = () => {
    setRetrievedAccountInfo(false);
    setshowLoanInfo(false);
    setShowRetrieveInfoForm(true);
    setShowDepositForm(false);
    setShowWithdrawForm(false);
    setShowLoanApplications(false);
    setShowFreezeAccountForm(false);
    setShowTransactionLogForm(false);
  };

  const handleLoanApplicationsButtonClick = () => {
    setRetrievedAccountInfo(false);
    setshowLoanInfo(false);
    setShowLoanApplications(true);
    setShowDepositForm(false);
    setShowWithdrawForm(false);
    setShowRetrieveInfoForm(false);
    setShowFreezeAccountForm(false);
    setShowTransactionLogForm(false);
  };

  const handleFreezeAccountButtonClick = () => {
    setRetrievedAccountInfo(false);
    setshowLoanInfo(false);
    setShowFreezeAccountForm(true);
    setShowDepositForm(false);
    setShowWithdrawForm(false);
    setShowRetrieveInfoForm(false);
    setShowLoanApplications(false);
    setShowTransactionLogForm(false);
  };

  const handleTransactionLogButtonClick = () => {
    setRetrievedAccountInfo(false);
    setshowLoanInfo(false);
    setShowTransactionLogForm(true);
    setShowDepositForm(false);
    setShowWithdrawForm(false);
    setShowRetrieveInfoForm(false);
    setShowLoanApplications(false);
    setShowFreezeAccountForm(false);
  };

  const handleLoanInfoClick = () => {
    setLoanInfo(
      [{ loanId: '101', amount: 10000, interestRate: 5, dateApproved: '2023-01-01', returnDate: '2023-12-31', accountId: '12345', paymentStatus: 'Paid' 
    },
    { loanId: '101', amount: 10000, interestRate: 5, dateApproved: '2023-01-01', returnDate: '2023-12-31', accountId: '12345', paymentStatus: 'Paid' 
  },
  { loanId: '101', amount: 10000, interestRate: 5, dateApproved: '2023-01-01', returnDate: '2023-12-31', accountId: '12345', paymentStatus: 'Paid' 
},
{ loanId: '101', amount: 10000, interestRate: 5, dateApproved: '2023-01-01', returnDate: '2023-12-31', accountId: '12345', paymentStatus: 'Paid' 
    },
    { loanId: '101', amount: 10000, interestRate: 5, dateApproved: '2023-01-01', returnDate: '2023-12-31', accountId: '12345', paymentStatus: 'Paid' 
  },
  { loanId: '101', amount: 10000, interestRate: 5, dateApproved: '2023-01-01', returnDate: '2023-12-31', accountId: '12345', paymentStatus: 'Paid' 
},
{ loanId: '101', amount: 10000, interestRate: 5, dateApproved: '2023-01-01', returnDate: '2023-12-31', accountId: '12345', paymentStatus: 'Paid' 
    },
    { loanId: '101', amount: 10000, interestRate: 5, dateApproved: '2023-01-01', returnDate: '2023-12-31', accountId: '12345', paymentStatus: 'Paid' 
  },
  { loanId: '101', amount: 10000, interestRate: 5, dateApproved: '2023-01-01', returnDate: '2023-12-31', accountId: '12345', paymentStatus: 'Paid' 
},
{ loanId: '101', amount: 10000, interestRate: 5, dateApproved: '2023-01-01', returnDate: '2023-12-31', accountId: '12345', paymentStatus: 'Paid' 
    },
    { loanId: '101', amount: 10000, interestRate: 5, dateApproved: '2023-01-01', returnDate: '2023-12-31', accountId: '12345', paymentStatus: 'Paid' 
  },
  { loanId: '101', amount: 10000, interestRate: 5, dateApproved: '2023-01-01', returnDate: '2023-12-31', accountId: '12345', paymentStatus: 'Paid' 
},
{ loanId: '101', amount: 10000, interestRate: 5, dateApproved: '2023-01-01', returnDate: '2023-12-31', accountId: '12345', paymentStatus: 'Paid' 
    },
    { loanId: '101', amount: 10000, interestRate: 5, dateApproved: '2023-01-01', returnDate: '2023-12-31', accountId: '12345', paymentStatus: 'Paid' 
  },
  { loanId: '101', amount: 10000, interestRate: 5, dateApproved: '2023-01-01', returnDate: '2023-12-31', accountId: '12345', paymentStatus: 'Paid' 
},
{ loanId: '101', amount: 10000, interestRate: 5, dateApproved: '2023-01-01', returnDate: '2023-12-31', accountId: '12345', paymentStatus: 'Paid' 
    },])
    setRetrievedAccountInfo(false);
    setShowTransactionLogForm(false);
    setshowLoanInfo(true);
    setShowDepositForm(false);
    setShowWithdrawForm(false);
    setShowRetrieveInfoForm(false);
    setShowLoanApplications(false);
    setShowFreezeAccountForm(false);
  }

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
      pin:'',
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

  const handleRetrieveInfoSubmit = (e) => {
    setShowRetrieveInfoForm(false);
    e.preventDefault();
    // Simulate fetching account info from a server
    const fetchedInfo = {
      accountId: formValues.accountId,
      contact: '123-456-7890', // Replace with actual data
      email: 'example@email.com', // Replace with actual data
    };
    // Update the state with the retrieved account info
    setRetrievedAccountInfo(fetchedInfo);
    // Reset form values
    setFormValues({
      accountId: '',
      amount: '',
      loanId: '',
      pin: '',
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
          <button className="EHnav-button" onClick={handleLoanInfoClick}>Loans Information</button>
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
                  <div className="form-group">
                  <label>
                    <span>Pin:</span>
                    <input
                      type="password"
                      name="pin"
                      value={formValues.pin}
                      onChange={handleFormInputChange}
                      required
                    />
                  </label>
                  </div>
                </div>
                <button type="submit">Withdraw</button>
              </form>
            )}

            {/* Retrieve Account Info Form */}
            {showRetrieveInfoForm && (
              <form onSubmit={handleRetrieveInfoSubmit} className="retrieve-info-form">
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

            {retrievedAccountInfo && (
              <div className="retrieved-info">
                <h2>Retrieved Account Info</h2>
                <p>Account ID: {retrievedAccountInfo.accountId}</p>
                <p>Contact: {retrievedAccountInfo.contact}</p>
                <p>Email: {retrievedAccountInfo.email}</p>
                <div className="Rib">
                  <button onClick={handleRetrieveInfoButtonClick}>Go Back</button>
                </div>
              </div>
            )}


            {/* Loan Applications Form */}
            {showLoanApplications && (
  <div className="EHcontenttwo-container">
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
          <div className="laf-button-container">
          <button type="submit">Approve</button>
          <button type="submit">Reject</button>
          </div>
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
                  </select>
                </label>
              </div>
              <button type="submit">Freeze Account</button>
            </form>
          )}

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

          {showLoanInfo && (
            <div className="loan-info-table">
            <table>
              <thead>
                <tr>
                  <th>Loan ID</th>
                  <th>Amount</th>
                  <th>Interest Rate</th>
                  <th>Date Approved</th>
                  <th>Return Date</th>
                  <th>Account ID</th>
                  <th>Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {loanInfo.map((info) => (
                  <tr key={info.loanId}>
                    <td>{info.loanId}</td>
                    <td>{info.amount}</td>
                    <td>{info.interestRate}</td>
                    <td>{info.dateApproved}</td>
                    <td>{info.returnDate}</td>
                    <td>{info.accountId}</td>
                    <td>{info.paymentStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}    
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeHome;
