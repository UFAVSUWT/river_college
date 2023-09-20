import React from "react";
import { NavLink } from "react-router-dom";
const AuthLeftPanel = ({ isActive }) => {
  return (
    <>
      {isActive ? (
        <div>
          <div className={`auth-leftpanel-wrapper auth-leftpanel-wrapper-show`}>
            Личный кабинет
            {}
            <div>
              <NavLink to="admin">Панель администратора</NavLink>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default AuthLeftPanel;
