import React from "react";
import { Navigate } from "react-router";
interface props {
  isAuthenticated: boolean;
  children: React.ReactNode;
}
const PrivateRoute = ({ isAuthenticated, children }: props) => {
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};

export default PrivateRoute;
