import React, { useContext } from "react";
import { toggleClassName } from "../../utils/disabled";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import Button from "../../components/common/button/Button";
import { Context } from "../../../index";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };
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
          <NavLink to="../admin">Панель администратора</NavLink>
        </div>
        <Button onClick={() => logOut()}>Выйти</Button>
      </div>
    </section>
  );
});
export default Auth;
