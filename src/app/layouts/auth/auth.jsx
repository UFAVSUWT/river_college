import React, { useContext } from "react";
import { toggleClassName } from "../../utils/disabled";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/button/Button";
import { Context } from "../../../index";
import { logOut } from "../../utils/utils";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const getRole = () => {
    if (user.user.role === "ADMIN") {
      return "Администратор";
    }
  };

  return (
    <section
      className={toggleClassName(
        "_container education__container",
        "_container education__container-white",
        "_container education__container-black",
        "_container education__container-contrast"
      )}
    >
      <h1 className="education__container-title">Личный кабинет</h1>
      <div
        className={toggleClassName(
          "education__container-content flex min-height",
          "education__container-content flex min-height-white",
          "education__container-content flex min-height-black",
          "education__container-content flex min-height-contrast"
        )}
      >
        <div
          className={toggleClassName(
            "auth-wrapper",
            "auth-wrapper auth-wrapper-white",
            "auth-wrapper auth-wrapper-black",
            "auth-wrapper auth-wrapper-contrast"
          )}
        >
          <div className="cards">
            <h2>Информация о пользователе:</h2>
            <span>Права доступа: {getRole()}</span>
          </div>
          <div className="cards">
            <h2>Доступные возможности:</h2>
            <div>
              {user.isLoading ? (
                "Загрузка"
              ) : user.user.role === "ADMIN" ? (
                <Button onClick={() => navigate("../admin")}>
                  Панель администратора
                </Button>
              ) : null}

              <Button onClick={() => logOut(user, navigate)}>Выйти</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
export default Auth;
