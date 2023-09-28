import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../components/common/button/Button";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import { logOut } from "../../utils/utils";

const AuthLeftPanel = observer(({ isActive }) => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
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
            <Button onClick={() => logOut(user, navigate)}>Выйти</Button>
          </div>
        </div>
      ) : null}
    </>
  );
});
export default AuthLeftPanel;
