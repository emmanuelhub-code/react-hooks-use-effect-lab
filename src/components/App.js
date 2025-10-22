import { useState, useEffect } from "react";
import Question from "./Question";

function App() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((r) => r.json())
      .then((data) => setQuestions(data));
  }, []);

  const currentQuestion = questions[index];

  return (
    <div className="App">
      {currentQuestion ? (
        <Question question={currentQuestion} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
