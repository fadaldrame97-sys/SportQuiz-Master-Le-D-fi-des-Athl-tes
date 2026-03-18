import ResultScreen from "../Result/Resultscreen";
export default function PageResultat(){

const fakeData={
    score: 7,
    total: 10,
    answers: [
      {
        question: "Quelle est la capitale de la France ?",
        correctAnswer: "Paris",
        userAnswer: "Lyon"
      },
      {
        question: "2 + 2 ?",
        correctAnswer: "4",
        userAnswer: "4"
      }
    ]
  };

}


<ResultScreen   Score={fakeData.score} Total={fakeData.total} Reponses={fakeData.answers}/>