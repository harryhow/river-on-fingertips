import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import monster1 from './monster_1.png';
import monster2 from './monster_2.png';
import monster3 from './monster_3.png';

const AssignQstnOne = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextButtonClick = (event) => {
    event.preventDefault();
    console.log('Next button clicked with option: ', selectedOption);
    navigate('/assign-question-two');
  };

  return (
    <div className="page-container">
      <h1>題目 A</h1>
      <p>有三位小怪獸分別當上了新北市河川流域導覽員，你想先認識誰呢？</p>
      <div className="options-container">
        <div className="option">
          <button
            className={`option-button ${selectedOption === 'option1' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('option1')}
          >
            <img src={monster1} alt="monster 1" />
          </button>
          <p className="option-description">小怪獸名稱</p>
        </div>
        <div className="option">
          <button
            className={`option-button ${selectedOption === 'option2' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('option2')}
          >
            <img src={monster2} alt="monster 2" />
          </button>
          <p className="option-description">小怪獸名稱</p>
        </div>
        <div className="option">
          <button
            className={`option-button ${selectedOption === 'option3' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('option3')}
          >
            <img src={monster3} alt="monster 3" />
          </button>
          <p className="option-description">小怪獸名稱</p>
        </div>
      </div>
      <button className="next-button" onClick={handleNextButtonClick}>
        確認
      </button>
    </div>
  );
};

export default AssignQstnOne;
