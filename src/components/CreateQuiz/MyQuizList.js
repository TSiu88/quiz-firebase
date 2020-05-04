import React from 'react';
import Quiz from './Quiz';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function MyQuizList(props) {

  useFirestoreConnect([
    { collection: 'quizzes'}
  ]);

  //const currentUser = useSelector(state => state.userId);
  //const myQuizzes = useSelector(state => state.firestore.ordered.quizzes.currentUser)

  // if(isLoaded(myQuizzes)){
  //   return (
  //     <React.Fragment>
  //       <h3>My Quizzes</h3>
  //       <hr/>
  //       {myQuizzes.map((quiz) => {
  //         return <Quiz
  //         quizName={quiz.quizName}
  //         // location={quiz.location}
  //         // issue={quiz.issue}
  //         // formattedWaitTime={quiz.formattedWaitTime}
  //         quizId={quiz.quizId}
  //         // key={quiz.id}
  //         />
  //       })}

  //       <Quiz />
  //     </React.Fragment>
  //   );
  // }
  return (
    <h1>This is My Quiz List</h1>
  )
}

export default MyQuizList;