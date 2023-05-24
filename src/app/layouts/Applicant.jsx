import React from "react";
import { Outlet } from "react-router";
import BreadCrumbs from "../components/common/breadCrumbs/BreadCrumbs";
const Applicant = () => {
  return (
    <div className="_container min-height">
      <BreadCrumbs />
      <Outlet />
    </div>
  );
};
export default Applicant;
