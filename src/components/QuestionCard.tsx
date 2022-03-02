import React from "react";

type questionProps = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
};
const QuestionCard: React.FunctionComponent<questionProps> = ({
  question, 
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    {answers.map((answer) => (
      <div key={answer}>
        <button disabled={userAnswer} value={answer} onClick={callback}>
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </button>
      </div>
    ))}
  </div>
);

export default QuestionCard;
