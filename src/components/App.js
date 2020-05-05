import React from 'react';
import './App.css';
import Header from './Header';
import QuizControl from './QuizControl';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
   <React.Fragment>
    <Router>
      <Header />
      <QuizControl/>
    </Router>
  </React.Fragment>
  );
}

export default App;
