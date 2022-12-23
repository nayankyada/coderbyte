import { useState, useEffect } from "react";
let timer = null;
export default function App() {
  const [count, setCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const resetInterval = () => {
    clearInterval(timer);
    setIsStarted(false);
  };

  const buttonClick = () => {
    if (isStarted) {
      resetInterval();
    } else {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      setIsStarted(true);
    }
  };

  const reset = () => {
    resetInterval();
    setCount(0);
  };

  return (
    <div>
      <strong>Count: </strong>
      {count}
      <button onClick={buttonClick}>{!isStarted ? "Start" : "Stop"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
