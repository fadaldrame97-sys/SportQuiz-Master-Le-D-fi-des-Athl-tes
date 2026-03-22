import { useEffect, useState } from "react";

const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

export default function QuestionCard({ questionData, onSelect }) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setAnswers(
      shuffleArray([
        questionData.correct_answer,
        ...questionData.incorrect_answers,
      ])
    );
  }, [questionData]);

  return (
    <div>
      <p className="text-xs text-gray-500 mb-2">
        {questionData.category}
      </p>

      <h2 className="text-white mb-4">
        {questionData.question}
      </h2>

      <div className="space-y-2">
        {answers.map((ans, i) => (
          <button
            key={i}
            onClick={() => onSelect(ans)}
            className="w-full p-3 bg-gray-700 text-white rounded"
          >
            {ans}
          </button>
        ))}
      </div>
    </div>
  );
}