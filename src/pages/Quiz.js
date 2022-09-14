import React, { useState } from "react";
import "../components/Quiz.css";
import { Link } from "react-router-dom";

function Quiz() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "What does HTML stand for?",
      options: [
        {
          id: 0,
          text: "HyperLinks and Text Markup Language",
          isCorrect: false,
        },
        { id: 1, text: "Home Tool Markup Language", isCorrect: false },
        { id: 2, text: "Home Tomato Mayo Latin", isCorrect: false },
        { id: 3, text: "Hypertext Markup Language", isCorrect: true },
      ],
    },
    {
      text: "Which of the following HTML tags will insert a line break?",
      options: [
        { id: 0, text: "<br>", isCorrect: true },
        { id: 1, text: "<p>", isCorrect: false },
        { id: 2, text: "<break>", isCorrect: false },
        { id: 3, text: "<line>", isCorrect: false },
      ],
    },
    {
      text: "What is the purpose of HTML forms?",
      options: [
        { id: 0, text: "To collect user input.", isCorrect: true },
        {
          id: 1,
          text: "To display the content of an email.",
          isCorrect: false,
        },
        { id: 2, text: "To display animation effect.", isCorrect: false },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "<a> and </a> are the tags used for __",
      options: [
        { id: 0, text: "Audio-voiced text", isCorrect: false },
        { id: 1, text: "Adding links to your page", isCorrect: true },
        { id: 2, text: "Aligning text", isCorrect: false },
        { id: 3, text: "Adding image", isCorrect: false },
      ],
    },
    {
      text: "Choose the correct HTML tag to make a text italic",
      options: [
        { id: 0, text: "<italic>", isCorrect: false },
        { id: 1, text: "<it>", isCorrect: false },
        { id: 2, text: "<i>", isCorrect: true },
        { id: 3, text: "<il>", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  };

  return (
    <div>
      <h1>&nbsp;</h1>

      {showFinalResults ? (
        <div className="final-result">
          <h2 className="final-title">You Scored: </h2>
          <h2 className="final-score">
            {score}/{questions.length} - ({(score / questions.length) * 100}%){" "}
          </h2>
          <button className="playAgainBtn" onClick={() => restartGame()}>
            Go again?
          </button>
          <Link to="/settings">
            <button className="backToSet">Settings</button>
          </Link>
          <Link to="/">
            <button className="backToHome">Home</button>
          </Link>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question {currentQuestion + 1}/{questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>

          <h2 className="score-text">
            Score: {score}/{questions.length}
          </h2>
        </div>
      )}
    </div>
  );
}

export default Quiz;
