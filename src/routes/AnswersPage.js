import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../Data/data";

const AnswersPage = ({ grade, numCorrect }) => {
  let navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }
  const Reset = () => {
    navigate("/");
    refreshPage();
  };

  return (
    <div className="answersPage">
      <div className="APGroup">
        <div className="APQuestion">{data[0].question}</div>
        <div className="APAnswer">{data[0].finalAnswer.answerText}</div>
      </div>
      <div className="APGroup">
        <div className="APQuestion">{data[1].question}</div>
        <div className="APAnswer">{data[1].finalAnswer.answerText}</div>
      </div>
      <div className="APGroup">
        <div className="APQuestion">{data[2].question}</div>
        <div className="APAnswer">{data[2].finalAnswer.answerText}</div>
      </div>
      <div className="APGroup">
        <div className="APQuestion">{data[3].question}</div>
        <div className="APAnswer">{data[3].finalAnswer.answerText}</div>
      </div>
      <div className="APGroup">
        <div className="APQuestion">{data[4].question}</div>
        <div className="APAnswer">{data[4].finalAnswer.answerText}</div>
      </div>
      <div className="APGroup">
        <div className="APQuestion">{data[5].question}</div>
        <div className="APAnswer">{data[5].finalAnswer.answerText}</div>
      </div>
      <div className="APGroup">
        <div className="APQuestion">{data[6].question}</div>
        <div className="APAnswer">{data[6].finalAnswer.answerText}</div>
      </div>
      <div className="APGroup">
        <div className="APQuestion">{data[7].question}</div>
        <div className="APAnswer">{data[7].finalAnswer.answerText}</div>
      </div>
      <button className="reset" onClick={Reset}>
        Retake
      </button>
    </div>
  );
};

export default AnswersPage;
