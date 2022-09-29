import React, { useState } from "react";
import Question from "./Question";
import Answer from "./Answer";

const Quiz = ({
  grade,
  setGrade,
  numCorrect,
  setNumCorrect,
  questionNum,
  setQuestionNum,
}) => {
  return (
    <div className="quiz">
      <h1>Die Maschine Quiz</h1>
      <Question questionNum={questionNum} />
      <Answer
        questionNum={questionNum}
        setQuestionNum={setQuestionNum}
        numCorrect={numCorrect}
        setNumCorrect={setNumCorrect}
        setGrade={setGrade}
      />
    </div>
  );
};

export default Quiz;
