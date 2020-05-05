import React from 'react';
import Quiz from './Quiz';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function AllQuizList(props) {

  useFirestoreConnect([
    { collection: 'quizzes' }
  ]);

  const quizzes = useSelector(state => state.firestore.ordered.quizzes);
  // console.log(quizzes);
  // const sortQuizzes = quizzes.sort((a,b) => a.dateCreated - b.dateCreated);

  if (isLoaded(quizzes)) {
    return (
      <React.Fragment>
        <h1>This is All Quizzes</h1>
        <hr/>
        {
        quizzes
        .map((quiz) => {
          return <Quiz
            whenQuizClicked = { props.onQuizSelection }
            quizName = {quiz.quizName}
            // names={quiz.names}
            // location={quiz.location}
            // issue={quiz.issue}
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
          <h1>This is an Empty All Quizzes</h1>
        </div>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h1>This is a Loading All Quizzes</h1>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}
  
AllQuizList.propTypes = {
  onQuizSelection: PropTypes.func
};
  
export default AllQuizList;