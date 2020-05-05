import React from 'react';
// import Quiz from './Quiz';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, withFirestore, isLoaded, isEmpty } from 'react-redux-firebase';
import firebase from 'firebase';
import Quiz from '../TakeQuiz/Quiz';

function MyQuizList(props) {

  const auth = props.firebase.auth();
  const currentUserId = auth.currentUser.uid;
  // console.log("Current User", currentUserId);

  let db = firebase.firestore();
  let quizzesRef = db.collection("quizzes");
  let query = quizzesRef.where("author", "==", currentUserId);

  query.get().then(function(myQuizzes) {
    if (myQuizzes.empty) {
      return (
        <React.Fragment>
          <h3>You haven't made any quizzes yet!</h3>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          {myQuizzes.forEach((quiz) => {
            return <Quiz
            quizName={quiz.data().quizName}
            />
          })}
          {/* {myQuizzes.forEach(function(doc){
            const quiz = doc.data();
            <h4>{quiz.quizName}</h4>
          }())} */}
        </React.Fragment>
      )
          // return (
          //   <React.Fragment>
          //     <h3>My Quizzes</h3>
          //     <hr/>
          //     {myQuizzes.map((quiz) => {
          //       return <Quiz
          //       quizName={quiz.quizName}
          //       // location={quiz.location}
          //       // issue={quiz.issue}
          //       // formattedWaitTime={quiz.formattedWaitTime}
          //       quizId={quiz.quizId}
          //       // key={quiz.id}
          //       />
          //     })}
      
          //     <Quiz />
          //   </React.Fragment>
          // );
        // }
      // results.forEach(function(doc){
      //   const quiz = doc.data();
      //   console.log("Document data:", quiz);
      //   console.log(quiz.quizName);
      // })
    }
  }).catch(function(error) {
    console.log("Error", error);
  })

  // return (
  //   <h1>This is My Quiz List</h1>
  // )
}

export default withFirestore(MyQuizList);