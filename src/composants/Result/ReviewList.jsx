export function ListdesReponses({ reponses }) {
  return (
    <div>
      {reponses.map((q, index) => {
        const corrcte = q.userAnswer === q.correctAnswer;

        let textReponse="Incorrecte";
        let CouleurReponse="text-red-600"
        if(corrcte){

            textReponse="Correte"
            CouleurReponse="text-green-600";
        }

        return (
          <div key={index}>
            
          </div>
        );
      })}
    </div>
  );
}