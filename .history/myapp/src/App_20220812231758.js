import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
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

//================================ useCallback : giúp tránh việc useEffect ở component con bị thực thi lại khi nhận vô 1 function từ component cha ===================================//
// function App() {
//   const [users, setUsers] = useState([]);

//   //ghi nhớ fnc ở trong scope của useCallback mà không tạo lại function mới khi app component được re-render => lúc này getData chỉ tham chiếu tới 1 vùng nhớ duy nhất
//   const getData = useCallback((type) => {
//     return fetch(`https://reqres.in/api/${type}`);
//   }, []);

//   const handleClick = () => {
//     getData("users")
//       .then((res) => res.json())
//       .then((res) => {
//         const users = res.data;
//         setUsers(users);
//       });
//   };

//   return (
//     <div className="">
//       <p>Data: </p>
//       <button onClick={handleClick}>Get users data</button>
//       <p>{JSON.stringify(users)}</p>
//       <ChildComponent getData={getData}></ChildComponent>
//     </div>
//   );
// }

//============================== useEffect: sử dụng để thực hiện gọi API, thao tác với dom trực tiếp, làm việc với time(setTimeout, setInterval) hoặc thêm xóa các event listeners => ĐỂ TRÁNH NHỮNG LẦN RE-RENDER KHÔNG CẦN THIẾT ==================================//
function App() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  //thực thi lại useEffect khi có sự thay đổi về state
  useEffect(() => {
    console.log("useEffect first calling");
    return () => {
      //clean up fucntion : luôn được chạy trước, giúp xóa các dữ liệu trước đó
      console.log("clean up");
    };
  }, [count]);

  useEffect(() => {
    fetch(`https://reqres.in/api/${action}`)
      .then((res) => console.log({ res }))
      .catch((err) => console.log(err));
  }, [action]);

  useEffect(() => {
    //componentDidMount
    document.addEventListener("scroll", handleScroll);

    return () => {
      //componentWillUnmount
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "3000px" }}>
      <p>
        You clicked <strong>{count}</strong> time
      </p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <button
        onClick={() => setAction("users")}
        style={{ background: "green" }}
      >
        Get users
      </button>
      <button
        onClick={() => setAction("comments")}
        style={{ background: "yellow" }}
      >
        Get comments
      </button>

      <p style={{ position: "fixed", bottom: "20px", left: "20px" }}>
        {scrollPosition}
      </p>
    </div>
  );
}
export default App;
