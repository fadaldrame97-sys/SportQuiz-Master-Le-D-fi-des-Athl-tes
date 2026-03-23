import { useState } from "react";
import Home from "./composants/Pages/HomePage.jsx";
import QuizPage from "./composants/Pages/QuizPage.jsx";
import ResultPage from "./composants/Pages/ResultPage.jsx";
import { fetchQuizQuestions } from "./composants/Service/quizApi.js";

function App() {
  const [gameState, setGameState] = useState("home");
  const [questions, setQuestions] = useState([]);
  const [finalScore, setFinalScore] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

const handleStartQuiz = async ({ amount, difficulty }) => {
  try {
    setError("");
    setIsLoading(true);

    const fetchedQuestions = await fetchQuizQuestions(amount, difficulty);
    setQuestions(fetchedQuestions);
    setGameState("quiz");

    return true;
  } catch (err) {
    setError(err.message);
    return false;
  } finally {
    setIsLoading(false);
  }
};

  const handleFinishQuiz = ({ finalScore }) => {
    setFinalScore(finalScore);
    setGameState("result");
  };

  const handleRestartQuiz = () => {
    setGameState("home");
  };

  const handleBackHome = () => {
    setGameState("home");
  };

  return (
    <>
      {gameState === "home" && (
        <Home onStartQuiz={handleStartQuiz} error={error} isLoading={isLoading}/>
      )}

      {gameState === "quiz" && (
        <QuizPage questions={questions} onFinishQuiz={handleFinishQuiz} />
      )}

      {gameState === "result" && (
        <ResultPage
          score={finalScore}
          total={questions.length}
          onRestart={handleRestartQuiz}
          onBackHome={handleBackHome}
        />
      )}
    </>
  );
}

export default App;