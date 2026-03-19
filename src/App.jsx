import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import QuizSetupForm from "./composants/setup/quizSetupForm";

const startQuiz = (config) => {
  console.log("Config choisie :", config);
};
function App() {
   return (
    <div className="bg-green-500 text-white p-10 text-3xl">
      <QuizSetupForm onStart={startQuiz} />
    </div>
  );
}
export default App;
