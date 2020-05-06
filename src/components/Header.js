import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { withFirestore, isLoaded } from 'react-redux-firebase';
import './App.css';
import firebase from "firebase/app";

function Header(props) {
  const {userEmail} = props;

  const auth = props.firebase.auth()

  let currentlyVisible;
  let registerVisible;

  function doSignOut(){
    firebase.auth().signOut().then(function(){
      console.log('Successfully signed out!');
    }).catch((error) => {
      console.log(error.message);
    })
  }

  
  const setVisibility = () => {
    if (props.userSignInStatus) {
      currentlyVisible = <div><Link onClick={() => doSignOut()} to="/signin">Sign Out</Link></div>;
      registerVisible = <p></p>;
    } else {
      currentlyVisible = <Link to="/signin">Sign In</Link>;
      registerVisible = <Link to="/register">Register</Link>;
      // <Link to="/">Go back to Homepage</Link>
    }
  }

  setVisibility();

  return (
    <React.Fragment>
      <h4>Welcome, {userEmail}!</h4>
      {currentlyVisible}
      {registerVisible}
      <hr />
    </React.Fragment>
  )
}

export default withFirestore(Header);