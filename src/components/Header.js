import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { withFirestore, isLoaded } from 'react-redux-firebase';
import './App.css';

function Header(props) {
  const {userEmail} = props;

  let buttonText;
  let currentlyVisible;

  const setVisibility = () => {
    if (props.userSignInStatus) {
      currentlyVisible = "";
      buttonText = "Sign Out";
    } else {
      currentlyVisible = <Link to="/register">Register</Link>;
      buttonText = "Sign In";
    }
  }

  setVisibility();
  console.log("USERNAME", user.displayName);

  return (
    <React.Fragment>
      {/* <h1><Link to="/">Firebase Quiz</Link></h1> */}
      <h4>Welcome, {userEmail}!</h4>
      {currentlyVisible}
      <Link to="/signin">{buttonText}</Link>
      <hr />
    </React.Fragment>
  )
}

export default Header;