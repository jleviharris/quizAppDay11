import React from "react";
import { useNavigate } from "react-router-dom";

const LastPage = ({ grade }) => {
  let navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }
  const Reset = () => {
    navigate("/");
    refreshPage();
  };

  return (
    <div className="lastPage">
      <div className="score"> Your Score: {grade}%</div>
      <button className="reset" onClick={Reset}>
        Reset
      </button>
    </div>
  );
};

export default LastPage;
