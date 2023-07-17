import { useState } from "react";
import "./App.css";

interface ResultProps{
  name: string;
  age: number;
}

function App() {
  const [name, setName] = useState<string>("");
  const [year, setYear] = useState<number>();
  const [result, setResult] = useState<ResultProps>();

  function calculateAge(){
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear()
    
    if (year) return setResult({
      name,
      age: currentYear - year,
    });

    setName("");
    setYear(0);
  }

  return (
    <div className="container centralize">
      <h1 id="title">Descubra sua idade</h1>
      <div className="form centralize">
        <label className="label">Digite seu nome:</label>
        <input
          className="input"
          placeholder="Digite seu nome"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="label">Digite o ano que você nasceu:</label>
        <input
          className="input"
          placeholder="Digite o ano que você nasceu"
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        />

        <button className="button" onClick={calculateAge}>
          Calcular idade
        </button>
      </div>
      {result && result.name !== "" && (
        <h2 className="result">{`${result.name} você tem: ${result.age}`}</h2>
      )}
    </div>
  );
}

export default App;
