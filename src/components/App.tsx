"use client";
import { useState } from "react";
import "./App.scss";

export const App = () => {
  const [count, setCount] = useState(0);

  const changeCOunt = (operation: "+" | "-") => {
    if (operation === "+") {
      setCount((count) => count + 1);
    } else {
      count === 0 || count < 0 ? null : setCount((count) => count - 1);
    }
  };

  return (
    <>
      <div>Hello</div>
      <p>World</p>
      <button onClick={() => changeCOunt("+")}>
        <span>+</span>
      </button>
      <p>{count}</p>
      <button onClick={() => changeCOunt("-")}>-</button>
    </>
  );
};
