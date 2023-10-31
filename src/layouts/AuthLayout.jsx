import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <main className="authlayout">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
