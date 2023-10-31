import { Outlet } from "react-router-dom";

const ProtectedRouteLayout = () => {
  return (
    <>
      <main className="protectedRouteLayout">
        <Outlet />
      </main>
    </>
  );
};

export default ProtectedRouteLayout;
