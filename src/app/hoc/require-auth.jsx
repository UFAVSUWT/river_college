import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { Context } from "../../index";

const RequireAuth = ({ children }) => {
  const location = useLocation();

  const { user } = useContext(Context);
  console.log(user);
  const isAuth = user.isAuth;
  console.log(user);
  if (!isAuth) return <Navigate to="/" state={{ from: location }} />;
  return children;
};
export default RequireAuth;
