import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'; // This imports the styles from App.css
import AssignQstnOne from './AssignQuestionOne'; // Make sure this path is correct


const LoginForm = () => {
  const [studentId, setStudentId] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);
  let navigate = useNavigate();

  const handleIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const toggleUserType = () => {
    setIsTeacher((prevIsTeacher) => !prevIsTeacher);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle your form validation and submission
    // For example purposes, we are just navigating to the next page
    navigate('/assign-question-one');
  };

  return (
    <div className="app-background">
      <div className="login-form">
        <h1>{isTeacher ? '老師登入' : '學生登入'}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={studentId}
            onChange={handleIdChange}
            placeholder={isTeacher ? '請輸入老師密碼' : '請輸入學號'}
          />
          <button type="submit" className="submit-button">確定</button>
        </form>
        <button 
          onClick={toggleUserType} 
          className="toggle-user-type"
          style={{ background: 'none', border: 'none', padding: 0, margin: 0, color: 'gray', textDecoration: 'underline' }}
        >
          {isTeacher ? '切換到學生身份' : '切換到老師身份'}
        </button>
      </div>
    </div>
  );
};



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/assign-question-one" element={<AssignQstnOne />} />
      </Routes>
    </Router>
  );
};

export default App;