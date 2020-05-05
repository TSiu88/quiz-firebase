import React from 'react';

function Quiz(props) {

  console.log("Props in Quiz", props);

  return (
    <React.Fragment>
      <h3>This is a Quiz of mine</h3>
      <h4>{props.quizName}</h4>
      <button className="btn btn-secondary">Edit</button>
      <button className="btn btn-secondary">Delete</button>
    </React.Fragment>
  );
}

export default Quiz;