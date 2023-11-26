import { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [isShow, setIsshow] = useState(false);

  function handleStepChange(e) {
    setStep(Number(e.target.value));
    setIsshow(true);
  }

  function handleCountDec() {
    setCount((c) => c - step);
    if (count > 0) setIsshow(true);
  }

  function handleCountInc() {
    setCount((c) => c + step);
    setIsshow(true);
  }
  function handleReset() {
    setStep(1);
    setCount(0);
  }

  function addDaysToDate(daysToAdd) {
    const currentDate = new Date();
    const result = new Date(currentDate);
    result.setDate(result.getDate() + daysToAdd);
    return result.toDateString();
  }

  return (
    <div className="App">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={handleStepChange}
        />
        {step}
      </div>
      <div>
        <button onClick={handleCountDec}>-</button>
        <input
          type="number"
          placeholder={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleCountInc}>+</button>
        <p>
          {count === 0
            ? `Today is ${addDaysToDate(count)}`
            : `${count} days from today is ${addDaysToDate(count)}`}
        </p>

        {count > 0 || step > 1 ? (
          <button onClick={handleReset}>Reset</button>
        ) : null}
      </div>
    </div>
  );
}
