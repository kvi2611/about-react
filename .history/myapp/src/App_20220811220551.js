import { useState } from "react";
import "./App.css";

//usestate
function App() {
  const [state, setState] = useState(0);
  const handleIncrease = () =>{
    state ++
  }
  return (
    <div className="App">
      <h1>counting: 1</h1>
      <button>Increase</button>
    </div>
  );
}

export default App;
