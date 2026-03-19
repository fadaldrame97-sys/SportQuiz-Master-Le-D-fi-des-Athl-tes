import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import QuizSetupForm from "./composants/setup/quizSetupForm";
import Loader from "./composants/setup/laoder";
import ErrorMessage from "./composants/setup/errorMessage";

function App() {
  const [gameState, setGameState] = useState("setup"); 

  const [error, setError] = useState(null);
  const [questions, setQuestions] = useState([]);

  const startQuiz = async ({ amount, difficulty }) => {
    setGameState("loading");
    setError(null);

    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&category=21&difficulty=${difficulty}&type=multiple`
      );
      const data = await response.json();

      if (data.response_code !== 0) {
        throw new Error("Pas assez de questions");
      }

      setQuestions(data.results);
      setGameState("ready");

    } catch (err) {
      setError("Erreur lors du chargement ");
      setGameState("error");
    }
  };

  return (
    <div className="bg-green-500 text-white p-10 text-2xl">

      {gameState === "setup" && (
        <QuizSetupForm onStart={startQuiz} />
      )}

      {gameState === "loading" && <Loader />}

      {gameState === "error" && <ErrorMessage message={error} />}

      {gameState === "ready" && (
  <>
    <p>Quiz chargé 👍 — voici les données :</p>
    <pre className="text-sm text-black bg-white p-4 rounded">
      {JSON.stringify(questions, null, 2)}
    </pre>
  </>
)}
    </div>
  );
}

export default App;