import { Outlet } from "react-router-dom";

import Header from "./UI/Header";

const Layout = (): React.JSX.Element => {
  return (
    <div className="wallet-layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
