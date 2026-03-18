import React from "react";
import { QuizContainer } from "./quizContainer";

export function Timer({timeleft}) {
    return (
        <div className="flex justify-center items-center w-8 h-8 rounded-full">
            {timeleft}
        </div>
    )
}