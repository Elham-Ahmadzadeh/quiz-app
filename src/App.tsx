import React from 'react';
import QuestinonCard from './components/QuestinonCard';

function App() {
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
      <QuestinonCard/>
      <button className='next' onClick={nextQuestion}>Next Qustion</button>
    </div>
  );
}

export default App;
