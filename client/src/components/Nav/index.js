import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import {useGoogleLogout} from 'react-google-login'
require('dotenv').config();
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Nav() {

  const customOnLogOutSuccess = (googleAuthResponse) => {
    console.log(`[LogOut Success]  : `, googleAuthResponse )
    
  }

  const onFailure = (googleAuthResponse) => {
    console.log(`[Login Failure]  : `, googleAuthResponse )
  }

  const {signOut} = useGoogleLogout({ clientId, customOnLogOutSuccess, onFailure,})

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => { signOut(); Auth.logout();   }}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">🛍️</span>
          -Shop-Shop
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
