export default function AnswerButton({
    answer,
    selected,
    correctAnswer,
    onClick,
  }) {
    const getClass = () => {
      if (selected === null) {
        return "bg-gray-700 text-white";
      }
  
      if (answer === correctAnswer) {
        return "bg-green-500 text-white";
      }
  
      if (answer === selected) {
        return "bg-red-500 text-white";
      }
  
      return "bg-gray-800 text-gray-400";
    };
  
    return (
      <button
        onClick={onClick}
        className={`w-full p-3 rounded ${getClass()}`}
      >
        {answer}
      </button>
    );
  }