import React from "react";
import Question from "./Question";
import "./App.css";

const items = [
  {
    name: "a",
    question: "How do you spell dog",
    answers: ["doog", "dog", "dogg"],
    answer: "dog",
  },
  {
    name: "b",
    question: "How do you spell frog",
    answers: ["doog", "dog", "dogg"],
    answer: "dog",
  },
];

function App() {
  return (
    <div className="App">
      {items.map(item => (
        <Question item={item} />
      ))}
    </div>
  );
}

export default App;
