import React from 'react';
import PropTypes from 'prop-types';

function Quiz(props) {

  return (
    <React.Fragment>
      <h4>{props.quizName}</h4>
      <button className="btn btn-secondary" onClick = {() => {props.whenEditQuizClicked(props.id)}}>Edit</button>
      <button className="btn btn-secondary" onClick = {() => {props.whenDeleteQuizClicked(props.id)}}>Delete</button>
    </React.Fragment>
  );
}

Quiz.propTypes = {
  whenEditQuizClicked: PropTypes.func,
  whenDeleteQuizClicked: PropTypes.func
}

export default Quiz;