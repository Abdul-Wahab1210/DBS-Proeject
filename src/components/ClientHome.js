import React, { useState } from 'react';
import './ClientHome.css';
import { useLocation } from 'react-router-dom';
import Header from './Header';

function ClientHome() {
  const location = useLocation();
  const { accountId, password, accountHolderName, amount } = location.state || {};
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [showTransactionLog, setShowTransactionLog] = useState(false);
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
  const [showTransferForm, setShowTransferForm] = useState(false);
  const [showLoanRequestForm, setShowLoanRequestForm] = useState(false);
  const [showLoanPending, setShowLoanPending] = useState(false);
  const [formValues, setFormValues] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const [transferFormValues, setTransferFormValues] = useState({
    receiverAccountId: '',
    amount: '',
    purpose:'',
  });

  const [accountInfoValues] = useState([{
    accountid:accountId,
    balance:'sda',
    opendate:'21-2-20',
    status:'active',
    branchID:'sad',
  }]);

  const [LoanPendings, setLoanPendings] = useState([{
    loanid:'',
    amount:'',
    dateapproved:'',
    returndate:'',
  }])
  
  const [transactionLogData, settransactionLogData] = useState({
    transactionid:'',
    senderid:'',
    amount:'',
    time:'',
    date:'',
    recipientid:'',
    recipientname:'',
    purpose:'',
  })

  const [loanRequestFormValues, setLoanRequestFormValues] = useState({
    amount: '',
    duration: '',
  });

  const [paymentvalues, setPaymentValues] = useState ({
    loadid:'',
    amount:'',
  })
    
  const handleTransactionLogClick = () => {
    settransactionLogData([
      {
        transactionid: '1',
        senderid: '1001',
        amount: '500.00',
        time: '10:30 AM',
        date: '2023-01-01',
        recipientid: '2001',
        recipientname: 'John Doe',
        purpose: 'Payment',
      },
      {
        transactionid: '2',
        senderid: '1002',
        amount: '300.00',
        time: '02:45 PM',
        date: '2023-01-02',
        recipientid: '2002',
        recipientname: 'Jane Smith',
        purpose: 'Transfer',
      },
      {
        transactionid: '3',
        senderid: '1003',
        amount: '150.00',
        time: '08:00 AM',
        date: '2023-01-03',
        recipientid: '2003',
        recipientname: 'Bob Johnson',
        purpose: 'Withdrawal',
      },
      {
        transactionid: '4',
        senderid: '1004',
        amount: '700.00',
        time: '01:20 PM',
        date: '2023-01-04',
        recipientid: '2004',
        recipientname: 'Emily Davis',
        purpose: 'Deposit',
      },
      {
        transactionid: '5',
        senderid: '1005',
        amount: '450.00',
        time: '11:15 AM',
        date: '2023-01-05',
        recipientid: '2005',
        recipientname: 'Mark Wilson',
        purpose: 'Expense',
      },
      {
        transactionid: '6',
        senderid: '1006',
        amount: '250.00',
        time: '03:30 PM',
        date: '2023-01-06',
        recipientid: '2006',
        recipientname: 'Sara Miller',
        purpose: 'Payment',
      },
      {
        transactionid: '7',
        senderid: '1007',
        amount: '600.00',
        time: '09:45 AM',
        date: '2023-01-07',
        recipientid: '2007',
        recipientname: 'Alex Turner',
        purpose: 'Transfer',
      },
      {
        transactionid: '8',
        senderid: '1008',
        amount: '350.00',
        time: '05:10 PM',
        date: '2023-01-08',
        recipientid: '2008',
        recipientname: 'Grace Taylor',
        purpose: 'Withdrawal',
      },
      {
        transactionid: '9',
        senderid: '1009',
        amount: '800.00',
        time: '12:40 PM',
        date: '2023-01-09',
        recipientid: '2009',
        recipientname: 'Tom Brown',
        purpose: 'Deposit',
      },
      {
        transactionid: '10',
        senderid: '1010',
        amount: '200.00',
        time: '10:00 AM',
        date: '2023-01-10',
        recipientid: '2010',
        recipientname: 'Linda White',
        purpose: 'Expense',
      },
      {
        transactionid: '11',
        senderid: '1011',
        amount: '550.00',
        time: '02:20 PM',
        date: '2023-01-11',
        recipientid: '2011',
        recipientname: 'Chris Adams',
        purpose: 'Payment',
      },
      {
        transactionid: '12',
        senderid: '1012',
        amount: '400.00',
        time: '11:50 AM',
        date: '2023-01-12',
        recipientid: '2012',
        recipientname: 'Sophia Parker',
        purpose: 'Transfer',
      },
      {
        transactionid: '13',
        senderid: '1013',
        amount: '180.00',
        time: '04:15 PM',
        date: '2023-01-13',
        recipientid: '2013',
        recipientname: 'Mike Hall',
        purpose: 'Withdrawal',
      },
      {
        transactionid: '14',
        senderid: '1014',
        amount: '670.00',
        time: '08:30 AM',
        date: '2023-01-14',
        recipientid: '2014',
        recipientname: 'Eva Green',
        purpose: 'Deposit',
      },
      {
        transactionid: '15',
        senderid: '1015',
        amount: '320.00',
        time: '03:00 PM',
        date: '2023-01-15',
        recipientid: '2015',
        recipientname: 'Jack Robinson',
        purpose: 'Expense',
      },
      {
        transactionid: '16',
        senderid: '1016',
        amount: '750.00',
        time: '09:20 AM',
        date: '2023-01-16',
        recipientid: '2016',
        recipientname: 'Olivia Carter',
        purpose: 'Payment',
      },
      {
        transactionid: '17',
        senderid: '1017',
        amount: '290.00',
        time: '01:40 PM',
        date: '2023-01-17',
        recipientid: '2017',
        recipientname: 'David King',
        purpose: 'Transfer',
      },
      {
        transactionid: '18',
        senderid: '1018',
        amount: '500.00',
        time: '10:05 AM',
        date: '2023-01-18',
        recipientid: '2018',
        recipientname: 'Mia Turner',
        purpose: 'Withdrawal',
      },
      {
        transactionid: '19',
        senderid: '1019',
        amount: '620.00',
        time: '04:30 PM',
        date: '2023-01-19',
        recipientid: '2019',
        recipientname: 'Daniel Brown',
        purpose: 'Deposit',
      },
      {
        transactionid: '20',
        senderid: '1020',
        amount: '700.00',
        time: '09:15 AM',
        date: '2023-01-20',
        recipientid: '2020',
        recipientname: 'Alice Johnson',
        purpose: 'Expense',
      },
    ])

    setShowAccountInfo(false);
    setShowTransactionLog(true);
    setShowChangePasswordForm(false);
    setShowTransferForm(false);
    setShowLoanRequestForm(false);
    setShowLoanPending(false);
  };

  const handleShowChangePasswordForm = () => {
    setShowAccountInfo(false);
    setShowTransactionLog(false);
    setShowChangePasswordForm(true);
    setShowTransferForm(false);
    setShowLoanRequestForm(false);
    setShowLoanPending(false);
  };

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
  
    // Check if the entered value is a digit
    if (/^\d*$/.test(value) || value === '') {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
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

  const handlePaymentInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleTransferButtonClick = () => {
    setShowAccountInfo(false);
    setShowTransactionLog(false);
    setShowChangePasswordForm(false);
    setShowTransferForm(true);
    setShowLoanRequestForm(false);
    setShowLoanPending(false);
  };

  const handleChangePasswordClick = () => {
    // Handle click logic here
  };

  const handleLoanPendingClick = () => {
    setLoanPendings([    
      {
        loanid: '1',
        amount: '5000.00',
        dateapproved: '2023-01-01',
        returndate: '2023-02-01',
      },
      {
        loanid: '2',
        amount: '3000.00',
        dateapproved: '2023-01-02',
        returndate: '2023-02-02',
      },
      {
        loanid: '3',
        amount: '1500.00',
        dateapproved: '2023-01-03',
        returndate: '2023-02-03',
      },
      {
        loanid: '4',
        amount: '7000.00',
        dateapproved: '2023-01-04',
        returndate: '2023-02-04',
      },
      {
        loanid: '5',
        amount: '4500.00',
        dateapproved: '2023-01-05',
        returndate: '2023-02-05',
      },
      {
        loanid: '6',
        amount: '2500.00',
        dateapproved: '2023-01-06',
        returndate: '2023-02-06',
      },
      {
        loanid: '7',
        amount: '6000.00',
        dateapproved: '2023-01-07',
        returndate: '2023-02-07',
      },
      {
        loanid: '8',
        amount: '3500.00',
        dateapproved: '2023-01-08',
        returndate: '2023-02-08',
      },
      {
        loanid: '9',
        amount: '8000.00',
        dateapproved: '2023-01-09',
        returndate: '2023-02-09',
      },
      {
        loanid: '10',
        amount: '2000.00',
        dateapproved: '2023-01-10',
        returndate: '2023-02-10',
      },
      {
        loanid: '11',
        amount: '5500.00',
        dateapproved: '2023-01-11',
        returndate: '2023-02-11',
      },
      {
        loanid: '12',
        amount: '4000.00',
        dateapproved: '2023-01-12',
        returndate: '2023-02-12',
      },
      {
        loanid: '13',
        amount: '1800.00',
        dateapproved: '2023-01-13',
        returndate: '2023-02-13',
      },
      {
        loanid: '14',
        amount: '6700.00',
        dateapproved: '2023-01-14',
        returndate: '2023-02-14',
      },
      {
        loanid: '15',
        amount: '3200.00',
        dateapproved: '2023-01-15',
        returndate: '2023-02-15',
      },
      {
        loanid: '16',
        amount: '7500.00',
        dateapproved: '2023-01-16',
        returndate: '2023-02-16',
      },
      {
        loanid: '17',
        amount: '2900.00',
        dateapproved: '2023-01-17',
        returndate: '2023-02-17',
      },
      {
        loanid: '18',
        amount: '5000.00',
        dateapproved: '2023-01-18',
        returndate: '2023-02-18',
      },
      {
        loanid: '19',
        amount: '6200.00',
        dateapproved: '2023-01-19',
        returndate: '2023-02-19',
      },
      {
        loanid: '20',
        amount: '7000.00',
        dateapproved: '2023-01-20',
        returndate: '2023-02-20',
      },
    ]);
  
    setShowAccountInfo(false);
    setShowTransactionLog(false);
    setShowChangePasswordForm(false);
    setShowTransferForm(false);
    setShowLoanRequestForm(false);
    setShowLoanPending(true);
  }

  const handleLoanRequestClick = () => {
    setShowAccountInfo(false);
    setShowTransactionLog(false);
    setShowChangePasswordForm(false);
    setShowTransferForm(false);
    setShowLoanRequestForm(true);
    setShowLoanPending(false);
  };

  const handleTransferFormSubmitClick = () => {
    // Handle click logic here
  };

  const handleAccountInfoClick = () => {
    setShowAccountInfo(true);
    setShowTransactionLog(false);
    setShowChangePasswordForm(false);
    setShowTransferForm(false);
    setShowLoanRequestForm(false);
    setShowLoanPending(false);
  };

  return (
    <div className="client-home-container">
      <Header />

      <div className="CHcontainer">
        <div className="CHvertical-navbar">
          <button className="CHnav-button" onClick={handleAccountInfoClick}>
            Account Info
          </button>
          <button className="CHnav-button" onClick={handleTransferButtonClick}>
            Transfer
          </button>
          <button className="CHnav-button" onClick={handleShowChangePasswordForm}>
            Change Pin
          </button>
          <button className="CHnav-button" onClick={handleTransactionLogClick}>
            Transaction History
          </button>
          <button className="CHnav-button" onClick={handleLoanRequestClick}>
            Loan Application
          </button>
          <button className="CHnav-button" onClick={handleLoanPendingClick}>
            Loan Payment
          </button>
        </div>

        <div className="CHcontent-container">
          {showTransactionLog && (
            <div className="transaction-log-table">
              <table>
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Sender ID</th>
                    <th>Amount</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th>Recipinet Account ID</th>
                    <th>Recipinet Name</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionLogData.map((log, index) => (
                    <tr key={index}>
                      <td>{log.transactionid}</td>
                      <td>{log.senderid}</td>
                      <td>{log.amount}</td>
                      <td>{log.time}</td>
                      <td>{log.date}</td>
                      <td>{log.recipientid}</td>
                      <td>{log.recipientname}</td>
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
                  <span>Old Pin:</span>
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
                  <span>New Pin:</span>
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
                  <span>Confirm New Pin:</span>
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

          {showLoanPending && (
            <div className="CHcontent">
            <div className="loan-payment-table">
              <table>
                <thead>
                  <tr>
                    <th>Loan ID</th>
                    <th>Amount</th>
                    <th>Date Approved</th>
                    <th>Return Date</th>
                  </tr>
                </thead>
                <tbody>
                  {LoanPendings.map((payment) => (
                    <tr key={payment.loanid}>
                      <td>{payment.loanid}</td>
                      <td>{payment.amount}</td>
                      <td>{payment.dateapproved}</td>
                      <td>{payment.returndate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      
            <div className="loan-payment-form">
              <form >
                <div className="form-group">
                  <label>
                    <span>Loan ID:</span>
                    <input
                      type="text"
                      name="loanId"
                      value={paymentvalues.loanId}
                      onChange={handlePaymentInputChange}
                      required
                    />
                  </label>
                  <label>
                    <span>Amount:</span>
                    <input
                      type="text"
                      name="values"
                      value={paymentvalues.amount}
                      onChange={handlePaymentInputChange}
                      required
                    />
                  </label>
                </div>
                <button type="submit">Pay</button>
              </form>
            </div>
          </div>
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
              <div className="form-group">
                <label>
                  <span>Purpose</span>
                  <input
                    type="text"
                    name="purpose"
                    value={transferFormValues.purpose}
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

          {showAccountInfo && (
            <div className="CHcontent account-info">
              <p><strong>Account ID:</strong> {accountInfoValues.accountid}</p>
              <p><strong>Balance:</strong> {accountInfoValues.balance}</p>
              <p><strong>Open Date:</strong> {accountInfoValues.opendate}</p>
              <p><strong>Status:</strong> {accountInfoValues.status}</p>
              <p><strong>Branch ID:</strong> {accountInfoValues.branchID}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClientHome; 