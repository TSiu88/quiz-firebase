import React from 'react';
import PropTypes from 'prop-types';

function Quiz(props) {

  return (
    <React.Fragment>
      <h3>This is a Quiz</h3> 
      <h4>{props.quizName}</h4>
      <h4>{props.id}</h4>
      <button onClick = {() => {props.whenQuizClicked(props.id)}}>Take Quiz</button>
    </React.Fragment>
  );
}

Quiz.propTypes = {
  whenQuizClicked: PropTypes.func
}

export default Quiz;