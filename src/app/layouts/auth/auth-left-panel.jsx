import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/common/button/Button";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";

const AuthLeftPanel = observer(({ isActive }) => {
  const { user } = useContext(Context);
  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };
  return (
    <>
      {isActive ? (
        <div>
          <div className={`auth-leftpanel-wrapper auth-leftpanel-wrapper-show`}>
            <NavLink to="../admin">Личный кабинет</NavLink>
            {}
            <div>
              <NavLink to="admin">Панель администратора</NavLink>
            </div>
            <Button onClick={() => logOut()}>Выйти</Button>
          </div>
        </div>
      ) : null}
    </>
  );
});
export default AuthLeftPanel;
