import React from 'react';

function Quiz(props) {

  return (
    <React.Fragment>
      <h4>{props.quizName}</h4>
      <button className="btn btn-secondary">Edit</button>
      <button className="btn btn-secondary">Delete</button>
    </React.Fragment>
  );
}

export default Quiz;