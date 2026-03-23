import React, { useEffect, useState } from "react";

export function QuizContainer({ questions, onFinishQuiz }) {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersHistory, setAnswersHistory] = useState([]);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  useEffect(() => {
    if (!currentQuestion) return;

    const options = [
      currentQuestion.correct_answer,
      ...currentQuestion.incorrect_answers,
    ];

    const shuffled = [...options].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
  }, [currentQuestionIndex, currentQuestion]);

  const handleAnswerSelect = (selectedAnswer) => {
    if (hasAnswered) return;

    setHasAnswered(true);

    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore((prev) => prev + 1);
    }

    setAnswersHistory((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        correctAnswer: currentQuestion.correct_answer,
        userAnswer: selectedAnswer,
      },
    ]);
  };

  const handleNextQuestion = () => {
    setHasAnswered(false);
    setTimeLeft(15);
    setHiddenOptions([]);

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      onFinishQuiz({
        finalScore: score,
        history: answersHistory,
      });
    }
  };

  useEffect(() => {
    if (hasAnswered) return;

    if (timeLeft === 0) {
      setAnswersHistory((prev) => [
        ...prev,
        {
          question: currentQuestion.question,
          correctAnswer: currentQuestion.correct_answer,
          userAnswer: "Temps écoulé",
        },
      ]);
      handleNextQuestion();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, hasAnswered]);

  const handleHintUse = () => {
    if (hintUsed) return;

    const shuffled = [...currentQuestion.incorrect_answers].sort(
      () => Math.random() - 0.5
    );
    const toHide = shuffled.slice(0, 2);

    setHiddenOptions(toHide);
    setHintUsed(true);
  };

  const letters = ["A", "B", "C", "D"];

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen flex flex-col gap-4 p-4 bg-[#FFF9FE]">
      <div className="flex gap-2 justify-between p-2 bg-white shadow-md rounded-2xl">
        <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="font-bold">
          {currentQuestionIndex + 1}/{totalQuestions}
        </p>
      </div>

      <div className="flex justify-between">
        <p>score: {score}</p>
        <div className="flex justify-center items-center bg-gray-200 p-2 rounded-xl">
          {timeLeft}s
        </div>
      </div>

      <h2
        className="text-center font-bold"
        dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
      />

      {shuffledOptions.map((option, index) => {
        if (hiddenOptions.includes(option)) return null;

        return (
          <button
            key={option}
            onClick={() => handleAnswerSelect(option)}
            disabled={hasAnswered}
            className={`flex gap-16 items-center rounded-xl p-2 cursor-pointer ${
              hasAnswered
                ? option === currentQuestion.correct_answer
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
                : "bg-white"
            }`}
          >
            <div className="flex justify-center items-center h-10 w-10 bg-[#8382DA] rounded-full">
              <p className="font-bold text-white">{letters[index]}</p>
            </div>
            <p
              className="font-bold text-lg"
              dangerouslySetInnerHTML={{ __html: option }}
            />
          </button>
        );
      })}

      <div className="flex items-center my-8 justify-between gap-4">
        <button
          onClick={handleHintUse}
          disabled={hintUsed}
          className="self-center w-40 h-12 bg-gradient-to-r from-[#518CFE] to-[#305498] rounded-2xl text-white font-bold cursor-pointer disabled:opacity-50"
        >
          50/50
        </button>

        <button
          onClick={handleNextQuestion}
          className="self-center w-40 h-12 bg-gradient-to-r from-[#6971FF] to-[#3F4499] rounded-2xl text-white font-bold cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}