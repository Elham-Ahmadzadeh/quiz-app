import React from "react";
import {AnswerObject} from '../App'
type questionProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
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
        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </button>
      </div>
    ))}
  </div>
);

export default QuestionCard;
