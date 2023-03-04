import { useCallback, useMemo, useReducer, useState } from "react";
import "./App.css";
import ChildComponent from "./ChildComponent";

//============================usestate=========================================//
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

//=============================useReducer======================================//
//state lúc này có thể coi là thằng count
// const reducer = (state, action) => {
//   switch (action) {
//     case "TANG":
//       return state + 1;
//     case "GIAM":
//       return state - 1;
//     case "XOA TAT CA":
//       return 0;
//     default:
//       break;
//   }
// };

// const reducer2 = (state, action) => {
//   switch (action.type) {
//     case "GAN GIA TRI":
//       return action.data;

//     default:
//       return state;
//   }
// };
// function App() {
//   const initialVal = 0;
//   //dispatch là function để truyền đi action, dispatch : reducer, count : initital value
//   const [count, dispatch] = useReducer(reducer, initialVal);
//   const [count2, dispatch2] = useReducer(reducer2, initialVal);

//   return (
//     <>
//       {/* MỖI KHI THỰC HIỆN ACTION DISPATCH THÌ REDUCER SẼ ĐƯỢC CHẠY, VÀ TÙY THEO GIÁ TRỊ ĐƯỢC TRUYỀN TRONG DISPATCH MÀ REDUCER SẼ XỬ LÝ LOGIC */}
//       <h1>COUNT: {count}</h1>
//       <button onClick={() => dispatch("TANG")}>TĂNG</button>
//       <button onClick={() => dispatch("GIAM")}>GIẢM</button>
//       <button onClick={() => dispatch("XOA TAT CA")}>XÓA TẤT CẢ</button>

//       {/*  với kiểu dispatch là obj */}
//       <h2>COUNT2: {count2}</h2>
//       <button
//         onClick={() =>
//           dispatch2({
//             type: "GAN GIA TRI",
//             data: 10,
//           })
//         }
//       >
//         GÁN GIÁ TRỊ
//       </button>
//     </>
//   );
// }

//=================================useMemo : tối ưu perfomance, khi function thực thi cần nhiều tgian tính toán và khi truyền cùng 1 tham số đầu vào có cùng kết quả trả về giống nhau =======================================//
// function expensiveFn(number) {
//   console.log("bat dau");
//   const start = new Date();

//   while (new Date() - start < 3000);
//   console.log("ket thuc", new Date() - start, "ms");
//   return number * number;
// }
// function App() {
//   const [count, setCount] = useState(0);
//   const [num, setNum] = useState(20);
//   // const number = expensiveFn(10); //mỗi khi bấm nút add thì thằng expensivefn vẫn bị re-render theo và thằng count phải đợi 3s mới được tăng giá trị 1 lần
//   const number = useMemo(() => {
//     return expensiveFn(num);
//   }, [num]); //với deps là 1 mảng rỗng thì scope của useMemo chỉ chạy 1 lần, còn truyền giá trị cho deps thì scope sẽ thực thi mỗi khi giá trị của deps được thay đổi
//   return (
//     <>
//       <p>Count: {count}</p>

//       <button onClick={() => setCount(count + 1)}>Add</button>
//       <p>Number: {number}</p>
//     </>
//   );
// }

//================================ useCallback ===================================//
function App() {
  const [users, setUsers] = useState([]);

  //
  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`);
  }, []);

  const handleClick = () => {
    getData("users")
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };

  return (
    <div className="">
      <p>Data: </p>
      <button onClick={handleClick}>Get users data</button>
      <p>{JSON.stringify(users)}</p>
      <ChildComponent getData={getData}></ChildComponent>
    </div>
  );
}
export default App;
