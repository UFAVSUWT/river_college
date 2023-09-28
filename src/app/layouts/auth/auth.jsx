import React, { useContext } from "react";
import { toggleClassName } from "../../utils/disabled";
import { observer } from "mobx-react-lite";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../components/common/button/Button";
import { Context } from "../../../index";
import { logOut } from "../../utils/utils";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  return (
    <section
      className={toggleClassName(
        "education__container",
        "education__container-white",
        "education__container-black",
        "education__container-contrast"
      )}
    >
      <h1 className="education__container-title">Личный кабинет</h1>
      <div className="education__container-content flex min-height">
        {" "}
        <div>
          {user.user.role === "ADMIN" ? (
            <NavLink to="../admin">Панель администратора</NavLink>
          ) : null}
        </div>
        <Button onClick={() => logOut(user, navigate)}>Выйти</Button>
      </div>
    </section>
  );
});
export default Auth;
