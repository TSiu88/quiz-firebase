import React, { useState } from 'react';
import EditQuizForm from './EditQuizForm';
import MyQuizList from './MyQuizList';
import NewQuizForm from './NewQuizForm';

function CreateQuizControl(props) {

  // DEFAULT STATE ==================================
  const [myQuizListVisible, setMyQuizListVisible] = useState(true);
  const [newQuizFormVisible, setNewQuizFormVisible] = useState(false);
  const [editQuizFormVisible, setEditQuizFormVisible] = useState(false);
  const [selectedQuiz, setQuiz] = useState(null);
  // ================================================

  const handleNewQuizFormVisible = () => {
    setMyQuizListVisible(!myQuizListVisible);
    setNewQuizFormVisible(!newQuizFormVisible);
  }

  const handleEditingFormVisible = () => {
    setEditQuizFormVisible(!setEditQuizFormVisible);
  }

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

  let currentlyVisibleComponent;
  let buttonText = "";
  const setVisibility = () => {
    if (editQuizFormVisible) {
      currentlyVisibleComponent = <EditQuizForm onEditingSubmit={handleEditingFormVisible} onQuizSelecton={handleChangingSelectedQuiz} quiz={selectedQuiz}/>
    } else {
      if (newQuizFormVisible) {
        currentlyVisibleComponent =
          <NewQuizForm
            onNewQuizCreation={handleNewQuizFormVisible}
          />;
        buttonText = "Back to My Quizzes";
        // } else if (editQuizFormVisible) {
        // currentlyVisibleComponent = <EditQuizForm />;
        // buttonText = "Back to My Surveys";
      } else {
        currentlyVisibleComponent = <MyQuizList />;
        buttonText = "Create a Quiz";
      }
    }
  }

  setVisibility();

  return (
    <React.Fragment>
      <h2>{props.username}'s Dashboard</h2>
      <button onClick={() => { handleNewQuizFormVisible() }}>{buttonText}</button>
      {currentlyVisibleComponent}
    </React.Fragment>
  );
}

export default CreateQuizControl;