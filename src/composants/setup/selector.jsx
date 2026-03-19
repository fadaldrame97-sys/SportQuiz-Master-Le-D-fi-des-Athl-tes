export default function Selector({ value, onChange }) {
  return (
    <div>
      <label>Difficulté :</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="easy">Facile</option>
        <option value="medium">Moyen</option>
        <option value="hard">Difficile</option>
      </select>
    </div>
  );
}