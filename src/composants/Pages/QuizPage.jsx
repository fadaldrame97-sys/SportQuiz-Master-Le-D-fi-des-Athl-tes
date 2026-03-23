import { QuizContainer } from "../Quiz/QuizContainer";

export default function QuizPage({ questions, onFinishQuiz }) {
  return <QuizContainer questions={questions} onFinishQuiz={onFinishQuiz} />;
}