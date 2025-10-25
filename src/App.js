import { useState, useRef } from "react";
import "./Timer.css";



export default function Timer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  return (
    <div className="timer">
      <h1 className="timer__display">{time} сек</h1>
      <div className="timer__buttons">
        <button className="timer__btn" onClick={start}> Старт</button>
        <button className="timer__btn" onClick={stop}> Стоп</button>
        <button className="timer__btn" onClick={reset}> Сброс</button>
      </div>
    </div>
  );
}
