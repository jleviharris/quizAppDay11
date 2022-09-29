import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../Data/data";

const LastPage = ({ grade, numCorrect }) => {
  let navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }
  const Reset = () => {
    navigate("/");
    refreshPage();
  };
  const NavToAnswers = () => {
    navigate("/answers");
  };

  return (
    <div className="lastPage">
      <div className="ratio">
        {" "}
        {numCorrect} out of {data.length}
      </div>

      <div className="score">{grade}%</div>
      <button className="reset" onClick={Reset}>
        Retake
      </button>
      <button className="answersBtn" onClick={NavToAnswers}>
        See Answers
      </button>
    </div>
  );
};

export default LastPage;
