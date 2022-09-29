import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Quiz from "./Components/Quiz";
import LastPage from "./routes/LastPage";

function App() {
  const [grade, setGrade] = useState(0);
  return (
    <div className="App">
      <h1>Die Maschine Quiz</h1>
      <Routes>
        <Route path="/" element={<Quiz grade={grade} setGrade={setGrade} />} />
        <Route path="/grade" element={<LastPage grade={grade} />} />
      </Routes>
    </div>
  );
}

export default App;
