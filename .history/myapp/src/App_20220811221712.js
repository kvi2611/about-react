import { useReducer, useState } from "react";
import "./App.css";

//usestate
// function App() {
//   const [state, setState] = useState(0);
//   const handleIncrease = () => {
//     return setState(state + 1);
//   };
//   return (
//     <div className="App">
//       <h1>counting: {state}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }

//useReducer

function App() {
  const initialVal = 0;
  const [count, dispath]= useReducer(reducer, initialVal)
  return <></>;
}
export default App;
