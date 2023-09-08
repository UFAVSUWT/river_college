import React from "react";
const AuthLeftPanel = ({ isActive }) => {
  return (
    <div
      className={`auth-leftpanel-wrapper ${
        isActive ? "auth-leftpanel-wrapper-show" : null
      }`}
    >
      Личный кабинет
    </div>
  );
};
export default AuthLeftPanel;
