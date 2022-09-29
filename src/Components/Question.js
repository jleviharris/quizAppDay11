import React from "react";
import data from "../Data/data";

const Question = ({ questionNum }) => {
  return (
    <div className="question">
      <h1>{data[questionNum].question}</h1>
    </div>
  );
};

export default Question;
