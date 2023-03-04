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
//state lúc này có thể coi là thằng count
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

const reducer2 = (state, action) => {
  switch (action.type) {
    case "GAN GIA TRI":
      return action.data;

    default:
      return state;
  }
};
function App() {
  const initialVal = 0;
  //dispatch là function để truyền đi action, dispatch : reducer, count : initital value
  const [count, dispatch] = useReducer(reducer, initialVal);
  const [count2, dispatch2] = useReducer(reducer2, initialVal);

  return (
    <>
      {/* MỖI KHI THỰC HIỆN ACTION DISPATCH THÌ REDUCER SẼ ĐƯỢC CHẠY, VÀ TÙY THEO GIÁ TRỊ ĐƯỢC TRUYỀN TRONG DISPATCH MÀ REDUCER SẼ XỬ LÝ LOGIC */}
      <h1>COUNT: {count}</h1>
      <button onClick={() => dispatch("TANG")}>TĂNG</button>
      <button onClick={() => dispatch("GIAM")}>GIẢM</button>
      <button onClick={() => dispatch("XOA TAT CA")}>XÓA TẤT CẢ</button>

      {/*  với kiểu dispatch là obj */}
      <h2>COUNT2: {count2}</h2>
      <button
        onClick={() =>
          dispatch2({
            type: "GAN GIA TRI",
            data: 10,
          })
        }
      >
        GÁN GIÁ TRỊ
      </button>
    </>
  );
}
export default App;
