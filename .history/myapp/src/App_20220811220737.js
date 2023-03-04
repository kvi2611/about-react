import { useState } from "react";
import "./App.css";

//usestate
function App() {
  const [state, setState] = useState(0);

  return (
    <div className="App">
      <h1>counting: {state}</h1>
      <button onClick={())}>Increase</button>
    </div>
  );
}

export default App;
