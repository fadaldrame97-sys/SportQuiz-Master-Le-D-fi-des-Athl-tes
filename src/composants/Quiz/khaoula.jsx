import { useState, useEffect } from "react";

const questions = [
  {
    type: "boolean",
    difficulty: "medium",
    category: "Entertainment: Television",
    question:
      "In the animated series Futurama, the character Phllip J. Fry is his own grandfather.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Mathematics",
    question:
      "What is the only Millennium Prize Problem that has been solved so far?",
    correct_answer: "Poincaré conjecture",
    incorrect_answers: [
      "P vs. NP problem",
      "Riemann Hypothesis",
      "Fermat's conjecture",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Japanese Anime & Manga",
    question:
      'In "Toriko", which of the following Heavenly Kings has an enhanced sense of Hearing?',
    correct_answer: "Zebra",
    incorrect_answers: ["Coco", "Sunny", "Toriko"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science & Nature",
    question: "A person can get sunburned on a cloudy day.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Sports",
    question: '"Stadium of Light" is the home stadium for which soccer team?',
    correct_answer: "Sunderland FC",
    incorrect_answers: [
      "Barcelona FC",
      "Paris Saints-Germain",
      "Manchester United",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Gadgets",
    question: "What round is a classic AK-47 chambered in?",
    correct_answer: "7.62x39mm",
    incorrect_answers: ["7.62x51mm", "5.56x45mm", "5.45x39mm"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Music",
    question: "Korean girl group TWICE is under which Entertainment Label?",
    correct_answer: "JYP",
    incorrect_answers: ["MBK", "YG", "Stone Music"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science & Nature",
    question: "Which is the most abundant element in the universe?",
    correct_answer: "Hydrogen",
    incorrect_answers: ["Helium", "Lithium", "Oxygen"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "Which actor and martial artist starred as Colonel Guile in the 1994 action film adaptation of Street Fighter?",
    correct_answer: "Jean-Claude Van Damme",
    incorrect_answers: ["Chuck Norris", "Steven Seagal", "Scott Adkins"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "DHCP stands for Dynamic Host Configuration Port.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
];

const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

export default function App() {
  const [shuffledQuestions] = useState(() => shuffleArray(questions));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [timer, setTimer] = useState(15);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = shuffledQuestions[currentIdx];

  // Shuffle answers when question changes
  useEffect(() => {
    setAnswers(
      shuffleArray([current.correct_answer, ...current.incorrect_answers]),
    );
    setSelected(null);
    setTimer(15);
  }, [currentIdx]);

  // Countdown timer
  useEffect(() => {
    if (selected !== null || timer === 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer, selected]);

  const handleSelect = (answer) => {
    if (selected !== null || timer === 0) return;
    setSelected(answer);
    if (answer === current.correct_answer) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentIdx + 1 >= shuffledQuestions.length) {
      setFinished(true);
    } else {
      setCurrentIdx((i) => i + 1);
    }
  };

  const getAnswerClass = (answer) => {
    const base =
      "w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-colors ";
    if (selected === null && timer > 0) {
      return (
        base +
        "border-gray-600 bg-gray-800 text-white hover:bg-gray-700 cursor-pointer"
      );
    }
    if (answer === current.correct_answer) {
      return (
        base + "border-green-500 bg-green-500/20 text-green-300 cursor-default"
      );
    }
    if (answer === selected) {
      return base + "border-red-500 bg-red-500/20 text-red-300 cursor-default";
    }
    return base + "border-gray-700 bg-gray-800/50 text-gray-500 cursor-default";
  };

  //  if (finished) {
  //     return (
  //       <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
  //         < div className="bg-gray-800 rounded-2xl p-8 w-full max-w-md text-center">
  //           <div className="text-5xl mb-4">🎉</div>
  //           <h2 className="text-2xl font-bold text-white mb-2">Quiz Finished!</h2>
  //           <p className="text-gray-400 mb-6">
  //             You scored <span className="text-white font-bold">{score}</span> out
  //             of{" "}
  //             <span className="text-white font-bold">
  //               {shuffledQuestions.length}
  //             </span>
  //           </p>
  //           <button
  //             onClick={handleRestart}
  //             className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
  //           >
  //             Play Again
  //           </button>
  //         </>
  //       </div>
  //     );
  //   }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-md">
        {/* Top row: progress + timer */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-400">
            Question{" "}
            <span className="text-white font-semibold">{currentIdx + 1}</span> /{" "}
            {shuffledQuestions.length}
          </span>
          <span
            className={`text-sm font-bold ${timer <= 5 ? "text-red-400" : "text-gray-300"}`}
          >
            ⏱ {timer}s
          </span>
        </div>

        {/* Timer bar */}
        <div className="w-full h-1.5 bg-gray-700 rounded-full mb-5">
          <div
            className={`h-full rounded-full transition-all duration-1000 ${timer > 10 ? "bg-green-500" : timer > 5 ? "bg-yellow-500" : "bg-red-500"}`}
            style={{ width: `${(timer / 15) * 100}%` }}
          />
        </div>

        {/* Category */}
        <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">
          {current.category}
        </p>

        {/* Question */}
        <h2 className="text-white font-semibold text-base leading-relaxed mb-5">
          {current.question}
        </h2>

        {/* Answers */}
        <div className="space-y-2">
          {answers.map((answer, i) => (
            <button
              key={i}
              onClick={() => handleSelect(answer)}
              className={getAnswerClass(answer)}
            >
              {answer}
            </button>
          ))}
        </div>

        {/* Timeout hint */}
        {timer === 0 && selected === null && (
          <p className="text-yellow-400 text-xs text-center mt-3">Time's up!</p>
        )}

        {/* Footer: score + next */}
        <div className="flex items-center justify-between mt-5">
          <span className="text-sm text-gray-400">
            Score: <span className="text-white font-bold">{score}</span>
          </span>
          {(selected !== null || timer === 0) && (
            <button
              onClick={handleNext}
              className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
            >
              {currentIdx + 1 >= shuffledQuestions.length ? "Finish" : "Next →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
