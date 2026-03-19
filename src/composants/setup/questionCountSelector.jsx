export default function QuestionCountSelector({ value, onChange }) {
  return (
    <div>
      <label>Nombre de questions :</label>
      <input
        type="number"
        min="1"
        max="20"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}