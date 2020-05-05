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

  // compose(
  //   firestoreConnect(props => [
  //     { collection: 'quizzes' },
  //     {
  //       collection: 'quizzes',
  //       where: [
  //         ['uid', '==', currentUserId]
  //       ],
  //       storeAs: myQuizzesReduxName
  //     }
  //   ]),
  //   connect((state, props) => ({
  //     quizzes: state.firestore.data.quizzes,
  //     myQuizzes: state.firestore.data[myQuizzesReduxName]
  //   }))
  // )

  // const auth = props.firebase.auth();
  // const currentUserId = auth.currentUser.uid;
  // console.log("Current User", currentUserId);

  let db = firebase.firestore();
  let quizzesRef = db.collection("quizzes")
    .where("author", "==", currentUserId);

  // console.log("My Quizzes", quizzesRef.get());

  let currentVisibleComponent;

  quizzesRef.get().then(function (myQuizzes) {

    if (isLoaded(myQuizzes)) {
      currentVisibleComponent =
        <React.Fragment>
          <Quiz
            quizName="testtestestset"
          />
        </React.Fragment>
      console.log("My Quizzes Type:", typeof myQuizzes);
      console.log("My Quizzes Data:", myQuizzes);
      // return (
      for (let doc in myQuizzes) {
        console.log("DOC", doc);
        console.log("DOC TEST", doc);
        const quiz = doc.data();
        const { quizName, author } = quiz;
        console.log("QUIZ", quiz);
        console.log("QUIZ NAME", quizName);
        // console.log("Author", author);
        console.log("Test", quiz.author);
        return <Quiz quizName="Quizzzz!!!" />
      }
    }

  }).catch(function (error) {
    console.error("Error in MyQuizList component:", error);
  });
  return (
    <React.Fragment>
      {currentVisibleComponent}
    </React.Fragment>
  );
}

export default withFirestore(MyQuizList);

// currentVisibleComponent =
      // <React.Fragment>

      // myQuizzes.forEach(function (doc) {
      //   const quiz = doc.data();
      //   const { quizName, author } = quiz;
      //   console.log("QUIZ", quiz);
      //   console.log("QUIZ NAME", quizName);
      //   // console.log("Author", author);
      //   console.log("Test", quiz.author);


      //   return (<Quiz
      //     quizName="testtestestset"
      //   />)

      // })

      // <Quiz quizName="outside!" />
      // </React.Fragment>
      //     
      // )
      // }