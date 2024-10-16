import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Header />}
      <div className="container py-2 md:py-5">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
