import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux'
import { firestoreConnect, useFirestoreConnect, withFirestore, isLoaded, isEmpty } from 'react-redux-firebase';
import firebase from 'firebase';
import Quiz from './Quiz';
const myQuizzesReduxName = "myQuizzes";

function MyQuizList(props) {

  const auth = props.firebase.auth();
  const currentUserId = auth.currentUser.uid;
  // console.log("Current User", currentUserId);

  useFirestoreConnect([
    { collection: 'quizzes', where: ["author", "==", currentUserId] }
  ]);

  const quizzes = useSelector(state => state.firestore.ordered.quizzes);

  if (isLoaded(quizzes)) {
    return (
      <React.Fragment>
        <h1>This is My Quizzes</h1>
        <hr />
        {
          quizzes
            .map((quiz) => {
              return <Quiz
                whenQuizClicked={props.onQuizSelection}
                quizName={quiz.quizName}
                dateCreated={quiz.dateCreated}
                id={quiz.id}
                key={quiz.id}
              />
        })}
      </React.Fragment>
    );
  } else if (isEmpty(quizzes)) {
    return (
      <React.Fragment>
        <div>
          <h1>This is an Empty My Quizzes</h1>
        </div>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h1>This is a Loading My Quizzes</h1>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

export default withFirestore(MyQuizList);