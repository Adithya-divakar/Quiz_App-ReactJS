import React, { useState, useEffect } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Quiz.css'

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10');
      const data = await response.json();
      setQuestions(data.results);
    } catch (error) {
      console.log('Error fetching questions:', error);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAnswer = () => {
    const answer = selectedOption;
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
    setSelectedOption('');
  };

  if (showResult) {
    return (
      <div className='container-fluid'>
        <h2>Quiz Result</h2>
        <p>Your score: {score}</p>
        <button onClick={handleRestart}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <h2 className='text-center'>Quiz App</h2>
      {questions.length > 0 && (
        <>
          <p className='text-center mt-2'>Question {currentQuestion + 1}</p>
          <p className='text-center'>{questions[currentQuestion].question}</p>
          <form>
            {questions[currentQuestion].incorrect_answers.map((option, index) => (
              <div key={index} className='ans'>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              </div>
            ))}
            <div className='ans'>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={questions[currentQuestion].correct_answer}
                  checked={selectedOption === questions[currentQuestion].correct_answer}
                  onChange={handleOptionChange}
                />
                {questions[currentQuestion].correct_answer}
              </label>
            </div>
          </form>
          <button className='text-center' onClick={handleAnswer}>Submit</button>
        </>
      )}
    </div>
  );
};

export default Quiz;
