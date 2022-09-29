import React from "react";
import data from "../Data/data";

const Question = ({ questionNum }) => {
  return <div className="question">{data[questionNum].question}</div>;
};

export default Question;
