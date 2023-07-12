import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/Main.css';

export const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <nav>
      <div className="navbar-left">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-right">
        <div className="dropdown">
          <button className="dropbtn">Menu &#9662;</button>
          <div className="dropdown-content">
            {!isLoggedIn && (
              <React.Fragment>
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
              </React.Fragment>
            )}
            <Link to="/generate">Generate a card</Link>
            {/* <Link to="/auth">Authenticate</Link> */}
            {isLoggedIn && (
              <React.Fragment>
                <Link to="/settings">Settings</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/preview">Card Preview</Link>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
