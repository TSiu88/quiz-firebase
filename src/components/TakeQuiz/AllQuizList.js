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
        <h1>This is All Quizzes</h1>
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
  } else {
    return (
      <React.Fragment>
        <div>
          <h1>This is an Empty All Quizzes</h1>
        </div>
      </React.Fragment>
    )
  }
}

AllQuizList.propTypes = {
  onQuizSelection: PropTypes.func
};

export default AllQuizList;