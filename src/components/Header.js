import React from 'react';
import { Link } from "react-router-dom";
import { withFirestore, isLoaded } from 'react-redux-firebase';
import './App.css';

function Header(props) {

  let buttonText;
  const [isSignedIn, setIsSignedIn] = useState(props);

  const setVisibility = () => {
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      buttonText = "Sign In";
    } else {
      buttonText = "Sign Out";
    }
  }

  setVisibility();

  if ((isLoaded(auth)) && (auth.currentUser != null)) {
    return (
      <h1><Link to="/">Firebase Quiz</Link></h1>
    )
  } else{
    return (
      <React.Fragment>
      {/* <h1><Link to="/">Firebase Quiz</Link></h1> */}
      <Link to="/register">Register</Link>
      <Link to="/signin">{buttonText}</Link>
      {/* <hr /> */}
      </React.Fragment>
    )
  }
}

export default Header;