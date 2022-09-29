import React from "react";
import data from "../Data/data";
import { useNavigate } from "react-router-dom";

const Answer = ({
  questionNum,
  setQuestionNum,
  numCorrect,
  setNumCorrect,
  setGrade,
}) => {
  let navigate = useNavigate();
  const handleClick = (item) => {
    if (!data[questionNum + 1]) {
      setGrade(Math.round((numCorrect / questionNum) * 100));
      navigate("/grade");
    }
    setQuestionNum(questionNum + 1);
    if (item.correctAnswer === true) {
      setNumCorrect(numCorrect + 1);
    }
  };

  return (
    <div className="buttons">
      <div className="btn-left">
        <button className="answerBtn"
          onClick={() => {
            handleClick(data[questionNum].answers[0]);
          }}
        >
          {data[questionNum].answers[0].answerText}
        </button>
        <button className="answerBtn"
          onClick={() => {
            handleClick(data[questionNum].answers[1]);
          }}
        >
          {data[questionNum].answers[1].answerText}
        </button>
      </div>
      <div className="btn-right">
        <button className="answerBtn"
          onClick={() => {
            handleClick(data[questionNum].answers[2]);
          }}
        >
          {data[questionNum].answers[2].answerText}
        </button>
        <button className="answerBtn"
          onClick={() => {
            handleClick(data[questionNum].answers[3]);
          }}
        >
          {data[questionNum].answers[3].answerText}
        </button>
      </div>
    </div>
  );
};

export default Answer;
