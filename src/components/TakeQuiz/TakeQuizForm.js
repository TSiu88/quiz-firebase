import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function TakeQuizForm(props) {

  // const firestore = useFirestore();

  // function addResponseToFirestore(event){
  //   event.preventDefault();
  //   props.onQuizSelection();
  //   return firestore.collection('responses').add(

  //   )
  // }

  const { quiz } = props;

  return (
    <React.Fragment>
      <p>TakeQuizForm</p>
      <h1>{quiz.quizName}</h1>
      <h3>{quiz.dateCreated}</h3>
      <form className="responseForm">
        <div className="form-group">
          <p>{quiz.questionOne}</p>:
          <div>
            <input type="radio" name="responseOne" value={quiz.questionOne1}/>
            <label for={quiz.questionOne1}>{quiz.questionOne1}</label>
            <input type="radio" name="responseOne" value={quiz.responseOne2}/>
            <label for={quiz.responseOne2}>{quiz.questionOne2}</label>
            <input type="radio" name="responseOne" value={quiz.questionOne3}/>
            <label for={quiz.questionOne3}>{quiz.questionOne3}</label>
          </div>
          <p>{quiz.questionTwo}</p>:
          <div>
            <input type="radio" name="responseTwo" value={quiz.questionTwo1}/>
            <label for={quiz.questionTwo1}>{quiz.questionTwo1}</label>
            <input type="radio" name="responseTwo" value={quiz.questionTwo2}/>
            <label for={quiz.questionTwo2}>{quiz.questionTwo2}</label>
            <input type="radio" name="responseTwo" value={quiz.questionTwo3}/>
            <label for={quiz.questionTwo3}>{quiz.questionTwo3}</label>
          </div>
          <p>{quiz.questionThree}</p>:
          <div>
            <input type="radio" name="responseThree" value={quiz.questionThree1}/>
            <label for={quiz.questionThree1}>{quiz.questionThree1}</label>
            <input type="radio" name="responseThree" value={quiz.questionThree2}/>
            <label for={quiz.questionThree2}>{quiz.questionThree2}</label>
            <input type="radio" name="responseThree" value={quiz.questionThree3}/>
            <label for={quiz.questionThree3}>{quiz.questionThree3}</label>
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
  

export default TakeQuizForm;