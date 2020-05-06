import React from 'react';
import Quiz from './Quiz';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function AllQuizList(props) {

  useFirestoreConnect([
    { collection: 'quizzes', orderBy: ["dateCreated", "desc"] }
  ]);

  const quizzes = useSelector(state => state.firestore.ordered.quizzes);

  if(!isLoaded(quizzes)) {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  } else if (isLoaded(quizzes)) {
    return (
      <React.Fragment>
        <h1>All Quizzes</h1>
        <h4>Get started by clicking "Take Quiz" below!</h4>
        <hr />
        {
          quizzes
            .map((quiz) => {
              return <Quiz
                username={quiz.username}
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
          <h1>There are currently no quizzes saved in our database.</h1>
        </div>
      </React.Fragment>
    )
  } else {
    return (
      <h1>Something went wrong. :(</h1>
    )
  }
}

AllQuizList.propTypes = {
  onQuizSelection: PropTypes.func
};

export default AllQuizList;