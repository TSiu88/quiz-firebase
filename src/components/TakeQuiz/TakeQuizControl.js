import React, { useState } from 'react';
import AllQuizList from './AllQuizList';
import TakeQuizForm from './TakeQuizForm';
import { withFirestore } from 'react-redux-firebase'


function TakeQuizControl(props) {

  const [selectedQuiz, setQuiz] = useState(null);

  const handleChangingSelectedQuiz = (id) => {
    props.firestore.get({
      collection: 'quizzes', 
      doc: id
    }).then((quiz) => {
      const firestoreQuiz = {
        quizName: quiz.quizName
        // names: ticket.get("names"),
        // location: ticket.get("location"),
        // issue: ticket.get("issue"),
        // id: ticket.id
      }
      setQuiz(firestoreQuiz);
    })
  }

  let currentlyVisibleState;

  const selectQuiz = () => {
    if (selectedQuiz != null) {
      currentlyVisibleState = 
      <TakeQuizForm 
        quiz = {selectedQuiz}
        />;
      // <button onClick={() => {setQuiz(null)}}>Back to Quiz List</button>
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