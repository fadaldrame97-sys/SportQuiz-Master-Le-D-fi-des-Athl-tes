import React from "react";

export function QuestionCounter({currentQuestionIndex,totalQuestions}){
    return(
        <div>
          <p className="text-xs text-gray-400 uppercase">Question</p>
          <p className="font-bold text-gray-700">
            {currentQuestionIndex + 1}/{totalQuestions}
          </p>
        </div>
    )
}