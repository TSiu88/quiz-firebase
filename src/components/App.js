import React from 'react';
import './App.css';
import Header from './Header';
import QuizControl from './QuizControl';
import { BrowserRouter as Router } from 'react-router-dom';
import { withFirestore, isLoaded } from 'react-redux-firebase';

function App(props) {

  const auth = props.firebase.auth();
  const handleIsSignedIn = () => {
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return true;
    } else {
      return false;
    }
  }

  return (
   <React.Fragment>
    <Router>
      <Header userSignInStatus={handleIsSignedIn} />
      <QuizControl userSignInStatus={handleIsSignedIn} />
    </Router>
  </React.Fragment>
  );
}

export default withFirestore(App);
