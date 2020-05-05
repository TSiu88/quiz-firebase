import React, { useState } from 'react';
import AllQuizList from './AllQuizList';
import TakeQuizForm from './TakeQuizForm';
import { withFirestore } from 'react-redux-firebase'


function TakeQuizControl(props) {

  const [selectedQuiz, setQuiz] = useState(null);

  const handleChangingSelectedQuiz = (id) => {
    if (selectedQuiz == null) {
        props.firestore.get({
        collection: 'quizzes', 
        doc: id
      }).then((quiz) => {
        const firestoreQuiz = {
          quizName: quiz.quizName,
          dateCreated: quiz.dateCreated,
          questionOne: quiz.questionOne,
          questionOne1: quiz.questionOne1,
          questionOne2: quiz.questionOne2,
          questionOne3: quiz.questionOne3,
          questionTwo: quiz.questionTwo,
          questionTwo1: quiz.questionTwo1,
          questionTwo2: quiz.questionTwo2,
          questionTwo3: quiz.questionTwo3,
          questionThree: quiz.questionThree,
          questionThree1: quiz.questionThree1,
          questionThree2: quiz.questionThree2,
          questionThree3: quiz.questionThree3,
          id: quiz.id
        }
        setQuiz(firestoreQuiz);
      })
    } else {
      setQuiz(null);
    }
  }

  let currentlyVisibleState;

  const selectQuiz = () => {
    if (selectedQuiz != null) {
      currentlyVisibleState = 
      <TakeQuizForm 
        quiz = {selectedQuiz}  onQuizSelection={handleChangingSelectedQuiz}
        />;
    } else {
      currentlyVisibleState = 
      <AllQuizList
        onQuizSelection={handleChangingSelectedQuiz}
      />; 
    }
  }

  selectQuiz();

  return (
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment>
  );
}

export default withFirestore(TakeQuizControl);