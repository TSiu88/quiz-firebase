import { useFirestore } from 'react-redux-firebase';
import React from 'react';

function NewQuizForm(props){
  const firestore = useFirestore();

  function addQuizToFirestore(event) {
    event.preventDefault();
    props.onNewQuizCreation();
    return firestore.collection('quizzes').add(
      {
        quizName: event.target.quizName.value,
        dateCreated: firestore.FieldValue.serverTimestamp(),
        author: event.target.userId.value,
        questions: event .taret.questions.value,
      }
    );
  }
  return (
    <React.Fragment>
      <h2>Create New Quiz</h2>
      <form className="newQuizForm" onSubmit={addQuizToFirestore}>
        <div className="form-group">
          <label htmlFor="quizName">
            Quiz Name:
            <input
              className="form-control"
              type="text"
              name="quizName"
              placeholder="Which Harry Potter Character are you?" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="questionOne">
            Question 1:
            <input
              className="form-control"
              type="text"
              name="questionOne"
              placeholder="Which characteristic best describes you?" />
          </label>
        </div>
        <button className="btn btn-primary" type="submit">Add Quiz</button>
      </form>
    </React.Fragment>
  );
}

export default NewQuizForm;