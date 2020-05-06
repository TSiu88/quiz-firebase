import React from 'react';
import firebase from 'firebase/app';
import { withRouter, useHistory, Link } from 'react-router-dom';

function Register(props){

  let history = useHistory();

  function doSignUp(event){
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      let user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: username,
        }).then(function() {
          // Update successful.
          console.log("Username added");
        }).catch(function(error) {
          // An error happened.
          console.log("Error: Couldn't add username");
        });
      console.log('successfully signed up!');
      // Routes directly to being signed in
      history.push('/signin');
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
      <h1>Register</h1>
      <form onSubmit={doSignUp}>
      <input
          type='text'
          name='username'
          placeholder='username'
        />
        <input
          type='text'
          name='email'
          placeholder='email'
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
        />
        <button type='submit'>Register</button>
      </form>
    </React.Fragment>
  )
}

export default Register;