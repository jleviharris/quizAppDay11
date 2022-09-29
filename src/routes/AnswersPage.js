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
      <button className="reset" onClick={Reset}>
        Reset
      </button>
    </div>
  );
};

export default AnswersPage;
