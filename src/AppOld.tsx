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

  // const [isDBReady, setIsDBReady] = useState<boolean>(false);

  // const handleDb = async (): Promise<void> => {
  //   const status = await initDB();
  //   setIsDBReady(status);
  // };

  // const handleAddRecords = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const target = e.target as typeof e.target & {
  //     title: { value: string };
  //     description: { value: string };
  //     amount: { value: number };
  //     dateAndTime: { value: string };
  //   };

  //   const title = target.title.value;
  //   const description = target.description.value;
  //   const amount = target.amount.value;
  //   const dateAndTime = target.dateAndTime.value;
  //   // we must pass an Id since it's our primary key declared in our createObjectStoreMethod  { keyPath: 'id' }
  //   const id = Date.now();

  //   try {
  //     await addData(Stores.Transactions, {
  //       id,
  //       title,
  //       description,
  //       amount,
  //       dateAndTime,
  //     });
  //   } catch (err: unknown) {
  //     if (err instanceof Error) {
  //       console.log("TCL ~ handleAddRecords ~ err:", err.message);
  //       // setError(err.message);
  //     } else {
  //       console.log("TCL ~ handleAddRecords ~ Something went wrong:");
  //       // setError("Something went wrong");
  //     }
  //   }
  // };

  // const handleGetUsers = async () => {
  //   const users = await getStoreData<Transaction>(Stores.Transactions);
  //   console.log("TCL ~ handleGetUsers ~ users:", users);
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
