import React from 'react';
import PropTypes from 'prop-types';

function TakeQuizForm(props) {
  return (
    <React.Fragment>
      <p>TakeQuizForm</p>
      <h1>{props.quizName}</h1>
      <button onClick={() => {props.onQuizSelection()}}>Return to Quiz List</button>
    </React.Fragment>
  );
}

TakeQuizForm.propTypes = {
  onQuizSelection: PropTypes.func
};
  

export default TakeQuizForm;