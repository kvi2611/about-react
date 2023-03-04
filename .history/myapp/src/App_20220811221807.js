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
const reducer = (state, action) =>{

}
function App() {
  const initialVal = 0;
  //dispatch là function để truyền đi action
  const [count, dispatch] = useReducer(reducer, initialVal); 
  return <></>;
}
export default App;
