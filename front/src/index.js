import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {atom} from 'jotai';
import './index.css';

import App from './App';
import SignIn from './signIn';
import SignUp from './signUp';
import Quizzes from './quizzes/index';
import Quiz from './quizzes/[quizId]';
import AddQuiz from './quizzes/addQuiz';
import AddQuestions from './quizzes/addQuestions';
import Results from './quizzes/results';
import Resources from './resources/index';
import Slides from './resources/slides/[subjectId]';
import Videos from './resources/videos/[subjectId]';
import Exams from './resources/exams/[subjectId]';
import NavBar from './components/NavBar';
import Footer from './components/footer';



// export const signedAtom = atom(false);
export const signedAtom = atom({signed: true, userType: "instructor", userId: 202201862});
// export const signedAtom = atom({signed: true, userType: "student", userId: 202201863});

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
        <Route path="/quizzes/addQuiz" element={<AddQuiz />} />
        <Route path="/quizzes/AddQuestions" element={<AddQuestions />} />
        <Route path="/quizzes/results" element={<Results />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/slides/:subjectId" element={<Slides />} />
        <Route path="/resources/videos/:subjectId" element={<Videos />} />
        <Route path="/resources/exams/:subjectId" element={<Exams />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);