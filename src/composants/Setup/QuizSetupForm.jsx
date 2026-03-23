import { useState } from "react";

export default function QuizSetupForm({ onStart }) {
  const [amount, setAmount] = useState(10);
  const [difficulty, setDifficulty] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    onStart({ amount, difficulty });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Number of questions</label>
        <input
          type="number"
          
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border rounded-xl p-3"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Difficulty</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="border rounded-xl p-3"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full h-12 bg-gradient-to-r from-[#6971FF] to-[#3F4499] rounded-2xl text-white font-bold"
      >
        Start Quiz
      </button>
    </form>
  );
}