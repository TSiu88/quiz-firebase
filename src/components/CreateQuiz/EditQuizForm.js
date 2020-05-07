//https://www.debuggr.io/react-update-unmounted-component/
import React from 'react';
import { useFirestore } from 'react-redux-firebase';

function EditQuizForm(props) {

  const firestore = useFirestore();
  const { quiz } = props;

  function handleEditQuizFormSubmission(event) {
    event.preventDefault();
    props.onEditingQuizSubmit();
    const propertiesToUpdate = {
      quizName: event.target.quizName.value,
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
    return firestore.update({ collection: 'quizzes', doc: quiz.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <h2>Edit Quiz</h2>
      <form className="editQuizForm" onSubmit={handleEditQuizFormSubmission}>
        <div className="form-group">
          <label htmlFor="quizName">
            Quiz Name:
            <input
              className="form-control"
              type="text"
              name="quizName"
              // value={quiz.quizName}
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
            // defaultValue={quiz.questionOne} />
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="questionOne1">
            Question 1, Answer 1:
            <input
              className="form-control"
              type="text"
              name="questionOne1"
            // defaultValue={quiz.questionOne1}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="questionOne2">
            Question 1, Answer 2:
            <input
              className="form-control"
              type="text"
              name="questionOne2"
            // defaultValue={quiz.questionOne2} 
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="questionOne3">
            Question 1, Answer 3:
            <input
              className="form-control"
              type="text"
              name="questionOne3"
            // defaultValue={quiz.questionOne3} 
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="questionTwo">
            Question 2:
            <input
              className="form-control"
              type="text"
              name="questionTwo"
            // defaultValue={quiz.questionTwo} 
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="questionTwo1">
            Question 2, Answer 1:
            <input
              className="form-control"
              type="text"
              name="questionTwo1"
            // defaultValue={quiz.questionTwo1} 
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="questionTwo2">
            Question 2, Answer 2:
            <input
              className="form-control"
              type="text"
              name="questionTwo2"
            //       defaultValue={quiz.questionTwo2} 
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="questionTwo3">
            Question 2, Answer 3:
            <input
              className="form-control"
              type="text"
              name="questionTwo3"
            // defaultValue={quiz.questionTwo3} 
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="questionThree">
            Question 3:
            <input
              className="form-control"
              type="text"
              name="questionThree"
            // defaultValue={quiz.questionThree} 
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="questionThree1">
            Question 3, Answer 1:
            <input
              className="form-control"
              type="text"
              name="questionThree1"
            // defaultValue={quiz.questionThree1} 
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="questionThree2">
            Question 3, Answer 2:
            <input
              className="form-control"
              type="text"
              name="questionThree2"
            // defaultValue={quiz.questionThree2} 
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="questionThree3">
            Question 3, Answer 3:
            <input
              className="form-control"
              type="text"
              name="questionThree3"
            // defaultValue={quiz.questionThree3} 
            />
          </label>
        </div>

        {/* <button className="btn btn-secondary" type="button">Add Question</button> */}
        <button className="btn btn-primary" type="submit">Update Quiz</button>
      </form>
    </React.Fragment>
  );
}

export default EditQuizForm;