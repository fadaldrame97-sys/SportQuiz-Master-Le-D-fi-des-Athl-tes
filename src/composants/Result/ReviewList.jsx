export function ListdesReponses({reponses}){
    return (
        
   <div>
      {reponses.map((q, index) => (
        <div key={index}>
            
        </div>
      ))}
    </div>
    );
}