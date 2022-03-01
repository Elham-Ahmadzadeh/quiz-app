import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions, Difficulty } from './Api';

const TOTal_QUESTIONS = 10

function App() {
  const[loading, setLoading]= useState(false)
  const[questions, setQuestions]= useState([])
  const[number, setNumber]= useState(0)
  const[userAnswers, setUserAnswers]= useState([])
  const[score, setScore]= useState(0)
  const[gameOver, setGameOver]= useState(true)
  console.log(fetchQuizQuestions(TOTal_QUESTIONS, Difficulty.EASY))
  const startTrivia = async () => {

  }
  const chackAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }
  const nextQuestion = () => {

  }
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button onClick={startTrivia}>Start</button>
      <p className='score'>Score :</p>
      <p>Loading quetions ...</p>
  {/*     <QuestionCard 
      questionNr={number + 1 }
      totalQuestions={TOTal_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={chackAnswer}
      /> */}
      <button className='next' onClick={nextQuestion}>Next Qustion</button>
    </div>
  );
}

export default App;
