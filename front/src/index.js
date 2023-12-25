import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import App from './App';
import SignIn from './signIn';
import SignUp from './signUp';
import Quizzes from './quizzes';
import Quiz from './quiz';
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
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);