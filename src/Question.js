import React, { useState } from "react";

export default function Question({ item }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  if (selectedAnswer)
    return selectedAnswer === item.answer ? "Correct" : "Wrong";
  return (
    <div>
      <div>{item.question}</div>
      {item.answers.map(answer => (
        <div>
          <input
            type="radio"
            name={item.name}
            value={answer}
            checked={selectedAnswer === answer}
            onChange={() => setSelectedAnswer(answer)}
          ></input>
          {answer}
        </div>
      ))}
    </div>
  );
}
