// TypingArea.js
import React from 'react';

const TypingArea = ({
  typingText,
  inpFieldValue,
  timeLeft,
  mistakes,
  WPM,
  CPM,
  initTyping,
  handleKeyDown,
  resetGame,
}) => {
  return (
    <>
    <div className="section">
      <div className="section1">
        <p id="paragraph">{typingText}</p>
      </div>
      <div className="section2">
        <ul className="resultDetails">
          <li className="time">
            <p>Time Left:</p>
            <span>
              <b>{timeLeft}</b>s
            </span>
          </li>
          <li className="mistake">
            <p>Mistakes:</p>
            <span>{mistakes}</span>
          </li>
          <li className="wpm">
            <p>WPM:</p>
            <span>{WPM}</span>
          </li>
          <li className="cpm">
            <p>CPM:</p>
            <span>{CPM}</span>
          </li>
        </ul>
        <button onClick={resetGame} className="btn">
          Try Again
        </button>
      </div>
    </div>
    <div>
      <p>Created by: <i>Roman Khan</i></p>
      <p>Contact me at <a href="https://amromankhan@gmail.com" target='_blank'>amromankhan@gmail.com</a> | <a href="https://github.com/amromankhan" target='_blank'>Github</a> | <a href="https://www.linkedin.com/in/amromankhan/" target='_b;ank'>LinkedIn</a></p>
    </div>
    </>
  );
};

export default TypingArea;
