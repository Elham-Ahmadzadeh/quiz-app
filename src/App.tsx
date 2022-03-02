import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { QuestionState, fetchQuizQuestions, Difficulty } from "./Api";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAl_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAl_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const chackAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      // user's answer
      const answer = e.currentTarget.value
      // chack answer against coreect answer
      const correct = questions[number].correct_answer === answer
      // add score if answer is correct
      if(correct)setScore(prev => prev + 1 )
      // save answer in the arr 
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,

      
    }
    setUserAnswers(prev => [...prev , answerObject])
  };
  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === TOTAl_QUESTIONS ? (
        <button onClick={startTrivia}>Start</button>
      ) : null}

      {!gameOver ? <p className="score">Score : {score}</p> : null}
      {loading && <p>Loading quetions ...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAl_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={chackAnswer}
        />
      )}
      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== TOTAl_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Qustion
        </button>
      ) : null}
    </div>
  );
}

export default App;
