import { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds <= 0) {
      onAnswered(false);
      return;
    }
    const timer = setTimeout(() => {
      setSeconds((s) => s - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [seconds, onAnswered]);

  return <p>{seconds} seconds remaining</p>;
}

export default Question;
