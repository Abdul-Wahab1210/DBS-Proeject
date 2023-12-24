// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css'; // Import the CSS file
// import ClientHome from './ClientHome';

// function Home() {
//   const [showClientLoginForm, setShowClientLoginForm] = useState(false);

//   const handleClientLoginClick = () => {
//     setShowClientLoginForm(true);
//   };

//   const handleModalClose = () => {
//     setShowClientLoginForm(false);
//   };
//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-container">
//           <h1>
//             BANKEEZ<i className='fab fa-typo3' />
//           </h1>
//         </div>
//       </nav>


//       <div className="vertical-navbar">
//         <button className="nav-button">Home</button>
//         <button className="nav-button">About Us</button>
//         <button className="nav-button">Contact</button>
//       </div>

//       <div className="login">
//       <button onClick={han}>Client</button>
//       <button>Employee</button>
//       </div>

//       {showClientLoginForm && (
//         <div className="overlay">
//           <div className="login-form">
//             {/* Your login form content goes here */}
//             <h2>Login Form</h2>
//             <form>
//               {/* Add your form fields */}
//               <button type="button" onClick={handleModalClose}>Close</button>
//             </form>
//           </div>
//         </div>
//         )
//       }
//    </>
//   );
// }

// export default Home;








import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file
import ClientHome from './ClientHome';

function Home() {
  const [showClientLoginForm, setShowClientLoginForm] = useState(false);
  const [accountId, setAccountId] = useState('');
  const [password, setPassword] = useState('');

  const handleClientLoginClick = () => {
    setShowClientLoginForm(true);
  };

  const handleClientModalClose = () => {
    setShowClientLoginForm(false);
  };

  const handleAccountNumberChange = (event) => {
    setAccountId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginFormSubmit = (event) => {
    // Add your logic here for handling form submission
    // You can access the entered values using accountId and password variables
    event.preventDefault(); // Prevents the form from reloading the page
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
            <h2>Login Form</h2>
            <form onSubmit={handleLoginFormSubmit}>
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

              <button type="submit">Submit</button>
              <button type="button" onClick={handleClientModalClose}>Close</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
