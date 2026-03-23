import { useState } from 'react'
import './App.css'
import {HomePage} from "./composants/Pages/HomePage.jsx";

function App() {
  const [gameState, setGameState] = useState("home")
  const [questions,setQuestions] = useState([])
  const [score, setScore] = useState(0)
  const [answersHistory, setAnswersHistory] = useState([]);

  return (
    <HomePage />
  )
}

export default App
