import React from "react";
import firebase from "firebase/app";
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

function Signin(props){

  const auth = props.firebase.auth()

  function doSignIn(event){
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
    }).catch((error) => {
      console.log(error.message);
    });
  }

  if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
      <React.Fragment>
        <h1>Sign In</h1>
        <form onSubmit={doSignIn}>
          <input
            type='text'
            name='signinEmail'
            placeholder='email' />
          <input
            type='password'
            name='signinPassword'
            placeholder='Password' />
          <button type='submit'>Sign in</button>
        </form>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h1>You are already signed in!</h1>
        <Link to="/">Go To All Quizzes</Link>
      </React.Fragment>
    )
  }
}

export default withFirestore(Signin);