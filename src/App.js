import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("november,26,1998");
  date.setDate(date.getDate() + count);
  function handleRest() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="counter">
      <div>
        <input
          min="0"
          max="10"
          type="range"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>step:{step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          value={count}
          type="text"
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? ` ${count} a day from today is `
            : ` ${Math.abs(count)}days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
      <button onClick={handleRest}>Reset</button>
    </div>
  );
}
