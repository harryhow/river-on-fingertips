import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this if navigation is required
import './App.css'; // Importing the global styles
// import './AssignQuestionOne.css'; // Uncomment if you have specific styles
import monster1 from './monster_1.png';
import monster2 from './monster_2.png';
import monster3 from './monster_3.png';


const AssignQstnOne = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // Add this if navigation is required

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextButtonClick = () => {
    console.log('Next button clicked with option: ', selectedOption);
    // Add navigation logic if needed, e.g., navigate('/next-page');
  };

  return (
    <div className="page-container">
      <h1>題目 A</h1>
      <p>有三位小怪獸分別當上了新北市河川流域導覽員，你想先認識誰呢？</p>
      <div className="options-container">
        {/* Update these button groups with correct image paths */}
        <button
          className={`option-button ${selectedOption === 'option1' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('option1')}
        >
          <img src={monster1} alt="monster 1" />
        </button>
        {/* ...similar for other buttons... */}
        <button
          className={`option-button ${selectedOption === 'option2' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('option2')}
        >
          <img src={monster2} alt="monster 2" />
        </button>
         {/* ...similar for other buttons... */}
         <button
          className={`option-button ${selectedOption === 'option3' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('option3')}
        >
          <img src={monster3} alt="monster 3" />
        </button>
      </div>
      <button className="next-button" onClick={handleNextButtonClick}>
        確認
      </button>
    </div>
  );
};

export default AssignQstnOne;
