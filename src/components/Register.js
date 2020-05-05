import React from 'react';
import firebase from 'firebase/app';

function Register(){

  function Register(event){
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then( () => {
      console.log('successfully signed up!');
    }).catch((error) => {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
      <h1>Register</h1>
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
      <form>

      </form>

    </React.Fragment>
  )
}