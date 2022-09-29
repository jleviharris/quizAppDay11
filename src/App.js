import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Quiz from "./Components/Quiz";
import LastPage from "./routes/LastPage";

function App() {
  const [grade, setGrade] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  const [questionNum, setQuestionNum] = useState(0);
  return (
    <div className="App">
    
      <Routes>
        <Route
          path="/"
          element={
            <Quiz
              grade={grade}
              setGrade={setGrade}
              questionNum={questionNum}
              setQuestionNum={setQuestionNum}
              numCorrect={numCorrect}
              setNumCorrect={setNumCorrect}
            />
          }
        />
        <Route path="/grade" element={<LastPage grade={grade} />} />
      </Routes>
    </div>
  );
}

export default App;
