import { useState } from "react";
import QuestionCountSelector from "./questionCountSelector";
import Selector from "./selector";
import StartButton from "./startButton";

export default function QuizSetupForm({ onStart }) {
  const [questionCount, setQuestionCount] = useState(5);
  const [difficulty, setDifficulty] = useState("easy");

  const handleStart = (e) => {
    e.preventDefault();

    onStart({
      amount: questionCount,
      difficulty: difficulty,
    });
  };

  return (
    <form onSubmit={handleStart}>
      <h2>Configurer votre Quiz</h2>

      <QuestionCountSelector
        value={questionCount}
        onChange={setQuestionCount}
      />

      <Selector
        value={difficulty}
        onChange={setDifficulty}
      />

      <StartButton />
    </form>
  );
}