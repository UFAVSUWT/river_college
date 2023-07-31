import React from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import { Breadcrumb } from "antd";
import { toggleClassName } from "../../../utils/disabled";
import { observer } from "mobx-react-lite";

const BreadCrumbs = observer(() => {
  const location = useLocation();
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    return (
      <div
        className={toggleClassName(
          "breadCrumbs__container",
          "breadCrumbs__container-white",
          "breadCrumbs__container-black",
          "breadCrumbs__container-contrast"
        )}
      >
         <NavLink to={"/"}>Главная</NavLink> 
         {pathnames.map((item, index)=>{
          const route = `/${pathnames
            .slice(0, index + 1)
            .join("/")}`;
          <NavLink id={index} to={`${route}`}>{item}</NavLink>
         })
         
         }
      </div>
    );
  };

  return <>{breadCrumbView()}</>;
});

export default BreadCrumbs;
