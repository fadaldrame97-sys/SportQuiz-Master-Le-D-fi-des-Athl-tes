import React, { useState, useEffect } from "react";
import { Scoreboard } from "./ScoreBoard";
import { Timer } from "./Timer";
import { Button } from "./Button";
import { ProgressBar } from "./ProgressBar";
import { QuestionCounter } from "./QuestionCounter";
import { questionsDB } from "./questionsDB";


export function QuizContainer() {
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(15)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [hintUsed, setHintUsed] = useState(false)
  const [hiddenOptions, setHiddenOptions] = useState([])
  const [questions, setQuestions] = useState(questionsDB)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  // Static data just for design testing

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  useEffect(()=>{
    if (!currentQuestion) return;

      const options = [
    currentQuestion.correct_answer,
    ...currentQuestion.incorrect_answers,
  ];

    const shuffled = [...options].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled)
  },[currentQuestionIndex])


  const handleAnswerSelect = (selectedAnswer, correctAnswer) => {
    if (hasAnswered) return;

    setHasAnswered(true);
    if (selectedAnswer === correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNextQuestion = () => {
    setHasAnswered(false)
    setTimeLeft(15)
    setHiddenOptions([])
    if(currentQuestionIndex < totalQuestions-1){
      setCurrentQuestionIndex((prev) => prev + 1)
    }
  }

  useEffect(() => {
    if (hasAnswered) return;
    if (timeLeft === 0) {
      handleNextQuestion()
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000);

    return () => clearInterval(interval)
  }, [timeLeft, hasAnswered])

  const handleHintUse = () => {
    if (hintUsed) return;

    const shuffled = [...currentQuestion.incorrect_answers].sort(
      () => Math.random() - 0.5
    );
    const toHide = shuffled.slice(0, 2);

    setHiddenOptions(toHide);
    setHintUsed(true);
  }

  const letters = ["A", "B", "C", "D"];

  return (
    <div className="max-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6">
        {/* 🔝 Top: Progress + Score */}
        <ProgressBar score={score} totalQuestions={totalQuestions} progress={progress} />
        {/* 📊 Question + Timer */}
        <div className="flex justify-between items-center mb-6">
          <QuestionCounter currentQuestionIndex={currentQuestionIndex} totalQuestions={totalQuestions} />
          <Timer timeLeft={timeLeft} />
        </div>
        <h2 className="text-xl font-extrabold text-gray-800 mb-6 leading-snug">
          {currentQuestion.question}
        </h2>

        {/* 📌 Answers */}
        <div className="space-y-4">
          {shuffledOptions.map((option, index) => {
            if (hiddenOptions.includes(option)) return null;

            return (
              <button
                key={option}
                onClick={() =>
                  handleAnswerSelect(option, currentQuestion.correct_answer)
                }
                disabled={hasAnswered}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition ${hasAnswered
                    ? option === currentQuestion.correct_answer
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-red-500 text-white border-red-500"
                    : "bg-white border-gray-200 hover:border-indigo-400 hover:shadow"
                  }`}
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${hasAnswered
                      ? "bg-white/20 text-white"
                      : "bg-indigo-100 text-indigo-500"
                    }`}
                >
                  {letters[index]}
                </div>

                <span className="font-semibold">{option}</span>
              </button>
            );
          })}
        </div>

        {/* 🎯 Buttons */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={handleHintUse}
            disabled={hintUsed}
            className={`flex-1 py-3 rounded-xl font-bold text-white ${hintUsed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
              }`}
          >
            {hintUsed ? "50/50 utilisé" : "50/50"}
          </button>

          <button
            onClick={handleNextQuestion}
            className="flex-1 py-3 rounded-xl font-bold text-white bg-indigo-500 hover:bg-indigo-600"
          >
            Suivant
          </button>
        </div>

      </div>
    </div>
  );
}