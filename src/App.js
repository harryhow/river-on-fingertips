import React, { useState } from 'react';
import './App.css'; // Assuming you have an App.css file for your styles

const App = () => {
  const [studentId, setStudentId] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);

  const handleIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const toggleUserType = () => {
    setIsTeacher((prevIsTeacher) => !prevIsTeacher);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isTeacher) {
      // Logic for teacher submission
    } else {
      // Logic for student submission
    }
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
          {isTeacher ? '切換到學生' : '切換到老師'}
      </button>

      </div>
    </div>
  );
};

export default App;
