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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const startQuiz = async ({ amount, difficulty }) => {
    setGameState("loading");
    setError(null);

    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&category=21&difficulty=${difficulty}&type=multiple`
      );

      const data = await response.json();

      if (data.response_code !== 0) {
        throw new Error("Pas assez de questions disponibles");
      }

      setQuestions(data.results);
      setGameState("ready");
    } catch (err) {
      setError("Erreur lors du chargement ");
      setGameState("error");
    }
  };

  const getShuffledAnswers = (question) => {
    const answers = [
      question.correct_answer,
      ...question.incorrect_answers,
    ];
    return answers.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="bg-green-500 text-white p-10 text-2xl min-h-screen">

      {gameState === "setup" && (
        <QuizSetupForm onStart={startQuiz} />
      )}

      {gameState === "loading" && <Loader />}

      {gameState === "error" && <ErrorMessage message={error} />}

      {gameState === "ready" && questions.length > 0 && (
        <div className="bg-white text-black p-5 rounded space-y-6">
        
          <h2
            className="text-xl font-bold"
            dangerouslySetInnerHTML={{
              __html: questions[currentQuestionIndex].question,
            }}
          />

          {getShuffledAnswers(questions[currentQuestionIndex]).map((answer, index) => (
            <button
              key={index}
              className="block w-full bg-gray-200 text-black p-3 rounded hover:bg-gray-300"
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          ))}
        </div>
      )}

    </div>
  );
}

export default App;