import React from "react";
import { useNavigate } from "react-router-dom";

const LastPage = ({ grade }) => {
  let navigate = useNavigate();
  const Reset = () => {
    navigate("/");
  };

  return (
    <div>
      <div> You got a {grade}%</div>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default LastPage;
