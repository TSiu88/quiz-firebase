import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore, withFirestore } from 'react-redux-firebase';

function TakeQuizForm(props) {

  console.log("PROPS IN TAKEQUIZFORM", props);

  const { quiz } = props;

  const firestore = useFirestore();
  const auth = props.firebase.auth();
  const currentUserId = auth.currentUser.uid;

  function addResponseToFirestore(event){
    event.preventDefault();
    props.onQuizSelection();
    
    return firestore.collection('responses').add(
      {
        quizId: quiz.id,
        submittedOn: firestore.FieldValue.serverTimestamp(),
        author: quiz.author,
        userId: currentUserId,
        responseOne: event.target.responseOne.value,
        responseTwo: event.target.responseTwo.value,
        responseThree: event.target.responseThree.value
      }
        
    )
    props.onQuizSelection();
  }

  

  return (
    <React.Fragment>
      <h1>{quiz.quizName}</h1>
      <h3>{quiz.dateCreated}</h3>
      <form className="responseForm" onSubmit={addResponseToFirestore}>
        <div className="form-group">
          <p>{quiz.questionOne}:</p>
          <div>
            <input type="radio" name="responseOne" value={quiz.questionOne1}/>
            <label htmlFor={quiz.questionOne1}>{quiz.questionOne1}</label>
            <input type="radio" name="responseOne" value={quiz.responseOne2}/>
            <label htmlFor={quiz.responseOne2}>{quiz.questionOne2}</label>
            <input type="radio" name="responseOne" value={quiz.questionOne3}/>
            <label htmlFor={quiz.questionOne3}>{quiz.questionOne3}</label>
          </div>
          <p>{quiz.questionTwo}:</p>
          <div>
            <input type="radio" name="responseTwo" value={quiz.questionTwo1}/>
            <label htmlFor={quiz.questionTwo1}>{quiz.questionTwo1}</label>
            <input type="radio" name="responseTwo" value={quiz.questionTwo2}/>
            <label htmlFor={quiz.questionTwo2}>{quiz.questionTwo2}</label>
            <input type="radio" name="responseTwo" value={quiz.questionTwo3}/>
            <label htmlFor={quiz.questionTwo3}>{quiz.questionTwo3}</label>
          </div>
          <p>{quiz.questionThree}:</p>
          <div>
            <input type="radio" name="responseThree" value={quiz.questionThree1}/>
            <label htmlFor={quiz.questionThree1}>{quiz.questionThree1}</label>
            <input type="radio" name="responseThree" value={quiz.questionThree2}/>
            <label htmlFor={quiz.questionThree2}>{quiz.questionThree2}</label>
            <input type="radio" name="responseThree" value={quiz.questionThree3}/>
            <label htmlFor={quiz.questionThree3}>{quiz.questionThree3}</label>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit Response</button>
      </form>
      <button onClick={() => {props.onQuizSelection()}}>Return to Quiz List</button>
    </React.Fragment>
  );
}

TakeQuizForm.propTypes = {
  onQuizSelection: PropTypes.func,
  quiz: PropTypes.object
};
  

export default withFirestore(TakeQuizForm);