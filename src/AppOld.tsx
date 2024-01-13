import { /*useReducer,*/ useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./component/Button";
import GreetMessage from "./component/GreetMessage";

function App() {
  const [count, setCount] = useState<number>(0);

  // const [state, dispatch] = useReducer(appReducer, appState);
  // const { count } = state;

  // const setCount = (input: number) => {
  //   dispatch({ type: "change", payload: input });
  // };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button setCount={setCount} count={count} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* default prop example */}
      <GreetMessage />
      {/* Form event types */}
    </>
  );
}

export default App;

// const appState = {
//   count: 0,
// };

// type ACTIONS = { type: "change"; payload: number };

// const appReducer = (state: typeof appState, action: ACTIONS) => {
//   switch (action.type) {
//     case "change":
//       return { ...state, count: state.count + 1 };
//     default:
//       return { ...state };
//   }
// };
