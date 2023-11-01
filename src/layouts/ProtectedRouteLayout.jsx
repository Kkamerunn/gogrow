import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRouteLayout = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth.currentUser ? (
        <main className="protectedRouteLayout">
          <Outlet />
        </main>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default ProtectedRouteLayout;
