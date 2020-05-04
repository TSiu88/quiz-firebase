import React, { useState } from 'react';
import CreateQuizControl from './CreateQuiz/CreateQuizControl';
import TakeQuizControl from './TakeQuiz/TakeQuizControl';

function QuizControl() {

  // DEFAULT STATE ===============================
  const [createQuizControlVisible, setCreateQuizControlVisible] = useState(false);
  const [takeQuizControlVisible, setTakeQuizControlVisible] = useState(true);
  // selectedQuiz: null

  // const handleCreateQuizDisplay = () => {
  //   setCreateQuizControlVisible(true);
  //   setTakeQuizControlVisible(false);
  // }

  const handleTakeQuizDisplay = () => {
    setCreateQuizControlVisible(!createQuizControlVisible);
    setTakeQuizControlVisible(!takeQuizControlVisible);
  }

  let currentlyVisibleComponent;
  let buttonText = "";
  const setVisibility = () => {
    if (takeQuizControlVisible) {
      currentlyVisibleComponent = <TakeQuizControl />;
      buttonText="Go to My Surveys";
    } else {
      currentlyVisibleComponent = <CreateQuizControl />;
      buttonText="Go to Take Surveys";
    }
  }

  setVisibility();

  return (
    <React.Fragment>
      <h3>QuizControl</h3>
      <button onClick={() => {handleTakeQuizDisplay()}}>{buttonText}</button>
      {currentlyVisibleComponent}
    </React.Fragment>
  );
}

export default QuizControl;