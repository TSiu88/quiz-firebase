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
          username: quiz.get("username"),
          quizName: quiz.get("quizName"),
          dateCreated: quiz.get("dateCreated").toDate().toString(),
          questionOne: quiz.get("questionOne"),
          questionOne1: quiz.get("questionOne1"),
          questionOne2: quiz.get("questionOne2"),
          questionOne3: quiz.get("questionOne3"),
          questionTwo: quiz.get("questionTwo"),
          questionTwo1: quiz.get("questionTwo1"),
          questionTwo2: quiz.get("questionTwo2"),
          questionTwo3: quiz.get("questionTwo3"),
          questionThree: quiz.get("questionThree"),
          questionThree1: quiz.get("questionThree1"),
          questionThree2: quiz.get("questionThree2"),
          questionThree3: quiz.get("questionThree3"),
          id: id,
          author: quiz.get("author")
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
        quiz = {selectedQuiz}
        onQuizSelection={handleChangingSelectedQuiz}
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