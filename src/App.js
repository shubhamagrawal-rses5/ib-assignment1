import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const storedValueAsNumber = Number(localStorage.getItem('count'));
  const [count, setCount] = useState(
    Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0
  );

  useEffect(() => {
    localStorage.setItem('count', String(count));
  }, [count]);
  return (
    <div className="App">
      <h1>Count Value: {count}</h1>
      <button className="bn11" onClick={() => setCount((c) => c - 1)}>Decrease</button>
      <button className="bn11" onClick={() => setCount((c) => c + 1)}>Increase</button>
    </div>
  );
}

export default App;
