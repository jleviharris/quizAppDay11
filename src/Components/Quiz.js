import React, { useState } from "react";
import Question from "./Question";
import Answer from "./Answer";

const Quiz = ({ grade, setGrade }) => {
  const [numCorrect, setNumCorrect] = useState(0);
  const [questionNum, setQuestionNum] = useState(0);

  return (
    <div className="quiz">
    
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
