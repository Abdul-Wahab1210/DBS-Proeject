// import React from 'react';
// import './EmployeeHome.css';
// import { useLocation } from 'react-router-dom';
// import Header from './Header';

// function EmployeeHome() {
//   const location = useLocation();
//   const { accountId, password } = location.state || {};

//   return (
//     <div className="Employee-home-container">
//       <Header />
// <div className="EHcontainer">
//       <div className="EHvertical-navbar">
//         <button className="EHnav-button">Retrieve Account Info</button>
//         <button className="EHnav-button">Loan Applications</button>
//         <button className="EHnav-button">Deposit</button>
//         <button className="EHnav-button">Withdraw</button>
//         <button className="EHnav-button">Freeze Account</button>
//         <button className="EHnav-button">Customer Transaction Log</button>
//       </div>

//       <div className="EHcontent-container">
//           <div className="EHcontent">Hello</div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default EmployeeHome;

import React from 'react';
import './EmployeeHome.css';
import { useLocation } from 'react-router-dom';
import Header from './Header';

function EmployeeHome() {
  const location = useLocation();
  const { accountId, password } = location.state || {};

  return (
    <div className="Employee-home-container">
      <Header />
      <div className="EHcontainer">
        <div className="EHvertical-navbar">
          <button className="EHnav-button">Retrieve Account Info</button>
          <button className="EHnav-button">Loan Applications</button>
          <button className="EHnav-button">Deposit</button>
          <button className="EHnav-button">Withdraw</button>
          <button className="EHnav-button">Freeze Account</button>
          <button className="EHnav-button">Customer Transaction Log</button>
        </div>

        <div className="EHcontent-container">
          <div className="EHcontent">EMPHello</div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeHome;
