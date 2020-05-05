import React, { useState } from 'react';
import CreateQuizControl from './CreateQuiz/CreateQuizControl';
import TakeQuizControl from './TakeQuiz/TakeQuizControl';
import './App.css';
import Signin from './Signin';
import Register from './Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { withFirestore, isLoaded} from 'react-redux-firebase';

function QuizControl() {

  // DEFAULT STATE ===============================
  const [createQuizControlVisible, setCreateQuizControlVisible] = useState(false);
  const [takeQuizControlVisible, setTakeQuizControlVisible] = useState(true);
  // =============================================

  const handleTakeQuizDisplay = () => {
    setCreateQuizControlVisible(!createQuizControlVisible);
    setTakeQuizControlVisible(!takeQuizControlVisible);
  }

  let currentlyVisibleComponent;
  let buttonText = "";
  const setVisibility = () => {
    if (takeQuizControlVisible) {
      currentlyVisibleComponent = <TakeQuizControl />;
      buttonText="Go to My Quizzes";
    } else {
      currentlyVisibleComponent = <CreateQuizControl />;
      buttonText="Go to Take a Quiz";
    }
  }

  setVisibility();

  return (
    <React.Fragment>
        <Switch>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/signin'>
            <Signin/>
          </Route>
          <Route path="/">
            <button onClick={() => {handleTakeQuizDisplay()}}>{buttonText}</button>
            {currentlyVisibleComponent}
          </Route>
        </Switch>
    </React.Fragment>
  );
}

export default QuizControl;