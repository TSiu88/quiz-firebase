import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import QuizControl from './QuizControl';
import { BrowserRouter as Router } from 'react-router-dom';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import firebase from 'firebase';

function App(props) {

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("New User");

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setUserEmail(user.email);
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  });

  return (
   <React.Fragment>
    <Router>
      <Header userSignInStatus={isSignedIn} userEmail={userEmail}/>
      <QuizControl userSignInStatus={isSignedIn} />
    </Router>
  </React.Fragment>
  );
}

export default withFirestore(App);
