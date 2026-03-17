import React, { useState,useEffect } from "react";

export function QuizContainer(){
    const [score,setScore] = useState(0)
    const [timeLeft, setTimeLeft] = useState(15)
    const [hasAnswered,setHasAnswered] = useState(false)
    const [hintUsed,setHintUsed] = useState(false)
    const [hiddenOptions,setHiddenOptions] = useState([])

    const handleAnswerSelect = (selectedAnswer,correctAnswer) => {
        if(hasAnswered) return;

        setHasAnswered(true);
        if(selectedAnswer === correctAnswer){
            setScore((prev) => prev + 1)
        }
    }

    const handleNextQuestion = () => {
        setHasAnswered(false)
        setTimeLeft(15)
        setHiddenOptions([])
    }

    useEffect(() => {
        if(hasAnswered) return;
        if(timeLeft === 0){
            handleNextQuestion()
            return;
        }

        const interval = setInterval(() => {
            setTimeLeft(prev => prev - 1)
        }, 1000);

        return ()=>clearInterval(interval)
    },[timeLeft,hasAnswered])
    
    const handleHintUse = () => {
        if(hintUsed) return;
        setHintUsed(true)

    }
    return(
    <div>
      <h2>Quiz Container</h2>
      <p>Score: {score}</p>
      <p>Time Left: {timeLeft}s</p>

      <button className="bg-green-300 cursor-pointer" onClick={() => handleAnswerSelect("France", "France")}>
        Test correct answer
      </button>

      <button className="bg-amber-300 cursor-pointer" onClick={() => handleAnswerSelect("Brazil", "France")}>
        Test wrong answer
      </button>

      <button className="bg-orange-800 cursor-pointer" onClick={handleNextQuestion}>Next Question</button>
    </div>
    )
}