import React from "react";
import { QuizContainer } from "./quizContainer";

export function Timer({timeLeft}) {
    return (
        <div className="bg-gray-100 px-4 py-2 rounded-xl text-sm font-bold text-gray-700 shadow-sm">
          {timeLeft}s
        </div>
    )
}