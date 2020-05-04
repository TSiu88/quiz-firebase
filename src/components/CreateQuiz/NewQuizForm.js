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
        // author: event.target.userId.value,
        // TODO: ADD AUTHOR TO FORM
        questionOne: event.target.questionOne.value,
        questionOne1: event.target.questionOne1.value,
        questionOne2: event.target.questionOne2.value,
        questionOne3: event.target.questionOne3.value,
        questionTwo: event.target.questionTwo.value,
        questionTwo1: event.target.questionTwo1.value,
        questionTwo2: event.target.questionTwo2.value,
        questionTwo3: event.target.questionTwo3.value,
        questionThree: event.target.questionThree.value,
        questionThree1: event.target.questionThree1.value,
        questionThree2: event.target.questionThree2.value,
        questionThree3: event.target.questionThree3.value,
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
              placeholder="Which Harry Potter Character are you?" 
              required />
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
        <div className="form-group">
          <label htmlFor="questionOne1">
            Question 1, Answer 1:
            <input
              className="form-control"
              type="text"
              name="questionOne1"
              placeholder="Brave" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="questionOne2">
            Question 1, Answer 2:
            <input
              className="form-control"
              type="text"
              name="questionOne2"
              placeholder="Clever" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="questionOne3">
            Question 1, Answer 3:
            <input
              className="form-control"
              type="text"
              name="questionOne3"
              placeholder="Cunning" />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="questionTwo">
            Question 2:
            <input
              className="form-control"
              type="text"
              name="questionTwo"
              placeholder="What's your favorite treat?" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="questionTwo1">
            Question 2, Answer 1:
            <input
              className="form-control"
              type="text"
              name="questionTwo1"
              placeholder="Butterbeer" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="questionTwo2">
            Question 2, Answer 2:
            <input
              className="form-control"
              type="text"
              name="questionTwo2"
              placeholder="Chocolate frogs" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="questionTwo3">
            Question 2, Answer 3:
            <input
              className="form-control"
              type="text"
              name="questionTwo3"
              placeholder="Pretzel wands" />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="questionThree">
            Question 3:
            <input
              className="form-control"
              type="text"
              name="questionThree"
              placeholder="What is your favorite Patronus?" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="questionThree1">
            Question 3, Answer 1:
            <input
              className="form-control"
              type="text"
              name="questionThree1"
              placeholder="Stag" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="questionThree2">
            Question 3, Answer 2:
            <input
              className="form-control"
              type="text"
              name="questionThree2"
              placeholder="Otter" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="questionThree3">
            Question 3, Answer 3:
            <input
              className="form-control"
              type="text"
              name="questionThree3"
              placeholder="Horse" />
          </label>
        </div>

        {/* <button className="btn btn-secondary" type="button">Add Question</button> */}
        <button className="btn btn-primary" type="submit">Submit New Quiz</button>
      </form>
    </React.Fragment>
  );
}

export default NewQuizForm;