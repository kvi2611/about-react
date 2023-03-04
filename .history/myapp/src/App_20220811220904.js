import { useState } from "react";
import "./App.css";

//usestate
function App() {
  const [state, setState] = useState(0);
const handleIncrease = ()=>{
  return state++
}
  return (
    <div className="App">
      <h1>counting: {state}</h1>
      <button
        onClick={() => {
          state++;
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default App;
