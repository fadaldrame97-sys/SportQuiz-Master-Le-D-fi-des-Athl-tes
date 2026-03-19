import React from "react";

export function ProgressBar({score,totalQuestions,progress}){
    return (
        <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center gap-1 text-sm font-semibold text-gray-600">
          {score}/{totalQuestions}
        </div>
      </div>
    )
}