import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TextField from "../../common/form/textField/TextField";
import Button from "../../common/button/Button";
import { ReactComponent as User } from "../../../assets/svg/user.svg";
import { ReactComponent as Key } from "../../../assets/svg/key.svg";
import { observer } from "mobx-react-lite";
import {
  toggleIconColor,
  toggleIconHeightSize,
  toggleIconWidthSize,
} from "../../../utils/disabled";
const DesktopLogIn = observer(({ isActive, setIsActive }) => {
  const [data, setData] = useState({ login: "", password: "" });
  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  });
  const detectKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsActive(false);
    }
  };
  const getModalWindow = (e) => {
    if (
      e.target.id === "loginModalWindow" ||
      e.target.id === "loginModalWindow_wrapper"
    ) {
      setIsActive(false);
    }
  };
  return (
    <>
      {isActive ? (
        <div
          className={`leftPanel__wrapper-moove-login ${
            isActive ? "leftPanel__wrapper-moove-login-show" : ""
          }`}
        >
          <div className="leftPanel__wrapper-moove-login-top">
            <div> Стань капитаном своей судьбы!</div>
          </div>
          <div className="leftPanel__wrapper-moove-login-form">
            {" "}
            <h1>Авторизация</h1>
            <form onSubmit={handleSubmit}>
              <div className="login_form-inputWrapper">
                <User
                  width={toggleIconWidthSize("25px", "27px", "27px", "30px")}
                  height={toggleIconHeightSize("25px", "27px", "27px", "30px")}
                  fill={toggleIconColor("#325572")}
                />
                <TextField
                  inputClassName={"login_form-inputWrapper-input"}
                  onChange={handleChange}
                  value={data.login}
                  name={"login"}
                  type={"text"}
                  placeholder={"Введите ваш логин"}
                />
              </div>
              <div className="login_form-inputWrapper">
                <Key
                  width={toggleIconWidthSize("25px", "27px", "27px", "30px")}
                  height={toggleIconHeightSize("25px", "27px", "27px", "30px")}
                  fill={toggleIconColor("#325572")}
                />
                <TextField
                  inputClassName={"login_form-inputWrapper-input"}
                  onChange={handleChange}
                  value={data.password}
                  name={"password"}
                  type={"password"}
                  placeholder={"Введите ваш пароль"}
                />
              </div>
              <Button
                className="login_form-btnLogin"
                text="Войти"
                type="submit"
              />
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
});
DesktopLogIn.propTypes = {
  isActive: PropTypes.bool,
  setIsActive: PropTypes.func,
};
export default DesktopLogIn;
