import { useState, lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./component/Layout";
import NoMatch from "./component/NoMatch";
const Home = lazy(() => import("./pages/Home"));

import "./assets/app.scss";
import { initDB } from "./utils/db";

const LazyRoute = ({ children }: { children: React.JSX.Element }) => {
  return <Suspense fallback={<>Loading...</>}>{children}</Suspense>;
};

function App() {
  const [isDbReady, setIsDbReady] = useState<boolean>(false);

  useEffect(() => {
    async function init() {
      const isReady: boolean = await initDB();
      setIsDbReady(isReady);
    }

    init();
  }, []);

  if (!isDbReady) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <LazyRoute>
              <Home />
            </LazyRoute>
          }
        />
        {/* <Route path="add" element={<AddTransaction />} />
        <Route path="edit/:transactionId" element={<EditTransaction />} /> */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
