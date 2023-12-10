import React, {useState} from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to = '/'>
            BANKEEZ<script src="https://kit.fontawesome.com/6a88dcfcdd.js" crossorigin="anonymous"></script>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar