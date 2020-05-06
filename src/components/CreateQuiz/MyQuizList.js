import React from 'react';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, withFirestore, isLoaded, isEmpty } from 'react-redux-firebase';
import Quiz from './Quiz';

function MyQuizList(props) {

  const auth = props.firebase.auth();
  const currentUserId = auth.currentUser.uid;

  useFirestoreConnect([
    { collection: 'quizzes', where: ["author", "==", currentUserId] }
  ]);

  const quizzes = useSelector(state => state.firestore.ordered.quizzes);

  if (!isLoaded(quizzes)) {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  } else if (isLoaded(quizzes)) {
    return (
      <React.Fragment>
        <h1>My Quizzes</h1>
        <hr />
        {
          quizzes
            .map((quiz) => {
              return <Quiz
                whenQuizClicked={props.onQuizSelection}
                whenEditQuizClicked={props.onEditingSubmit}
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
          <h1>You have not created any quizzes yet!</h1>
        </div>
      </React.Fragment>
    )
  } else {
    return (
      <h1>Something went wrong. :(</h1>
    )
  }
}

export default withFirestore(MyQuizList);