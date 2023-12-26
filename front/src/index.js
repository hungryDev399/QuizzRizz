import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import App from './App';
import SignIn from './signIn';
import SignUp from './signUp';
import Quizzes from './quizzes/index';
import Quiz from './quizzes/[quizId]';
import Results from './quizzes/results';
import Resources from './resources/index';
import Resource from './resources/[subjectId]';
import NavBar from './components/NavBar';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quizzes/:quizID" element={<Quiz />} />
        <Route path="/quizzes/results" element={<Results />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:subjectID" element={<Resource />} />
        <Route path="/:courseCode/:lectures" element={<Resource />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);