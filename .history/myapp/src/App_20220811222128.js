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
const reducer = (state, action) => {
  switch (action) {
    case "TANG":
      return state + 1;
    case "GIAM":
      return state - 1;
    case "XOA TAT CA":
      return 0;
    default:
      break;
  }
};
function App() {
  const initialVal = 0;
  //dispatch là function để truyền đi action, dispatch : reducer, count : initital value
  const [count, dispatch] = useReducer(reducer, initialVal);
  return (
    <>
    <h1>COUNT: {count}</h1>
      <button onClick={() => dispatch('TANG')}>TĂNG</button>
      <button onClick={() => dispatch('GIAM')}>GIẢM</button>
      <button onClick={() => dispatch('XOA TAT CA')}>XÓA TẤT CẢ</button>
    </>
  );
}
export default App;
