import React from 'react';
import firebase from 'firebase/app';

function Register(props){

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
        }).catch(function(error) {
          // An error happened.
        });
      console.log('successfully signed up!');
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