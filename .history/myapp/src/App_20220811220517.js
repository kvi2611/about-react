import "./App.css";

//usestate
function App() {
  const [state, setState] = useState(0)
  return (
    <div className="App">
      <h1>counting: 1</h1>
      <button>count++</button>
    </div>
  );
}

export default App;
