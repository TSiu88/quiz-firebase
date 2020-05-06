import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import QuizControl from './QuizControl';
import { BrowserRouter as Router } from 'react-router-dom';
import { withFirestore } from 'react-redux-firebase';
import firebase from 'firebase';

function App() {

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("New User");
  const [username, setUsername] = useState("New User");

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setUsername(user.displayName);
      setUserEmail(user.email);
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  });

  return (
   <React.Fragment>
    <Router>
      <Header userSignInStatus={isSignedIn} username={username} userEmail={userEmail}/>
      <QuizControl userSignInStatus={isSignedIn} username={username} />
    </Router>
  </React.Fragment>
  );
}

export default withFirestore(App);
