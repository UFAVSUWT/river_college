import React, { useState } from "react";
import { ReactComponent as User } from "../../../assets/svg/user.svg";
import { ReactComponent as Logo } from "../../../assets/svg/riveruniversityLogo.svg";
import { ReactComponent as Glasses } from "../../../assets/svg/glasses.svg";
import { ReactComponent as Museum } from "../../../assets/svg/museum.svg";
import { ReactComponent as Calendar } from "../../../assets/svg/calendar.svg";
import { toggleIconColor } from "../../../utils/disabled";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
const LeftPanel = observer(() => {
  const [isMegaMenu, setIsMegaMenu] = useState(false); //переменная для отображения контента контейнера меню, когда мышка на элементе меню
  const [isElementOfMenu, setIsElementOfMenu] = useState(""); // дублирующая переменная для отображения контента в контейнере меню, когда курсор находится на самом контейнере
  const [isMegaMenuContainerIsActive, setIsMegaMenuContainerIsActive] =
    useState(false); // переменная для отображения самого контейнера
  /* Открываем меню при наведении на элементы главного списка */
  const onMouseEnter = (event) => {
    setIsMegaMenuContainerIsActive(true);
    if (event.target.innerHTML) {
      setIsMegaMenu("isShow");
      setIsElementOfMenu("isShow");
    }
  };
  /* закрываем меню при уходе курсора с элемента списка */
  const onMouseOut = (event) => {
    setIsMegaMenu(false);
  };
  const megaMenuIsActive = (e) => {
    setIsMegaMenu(isElementOfMenu);
  };
  const megaMenuIsOut = () => {
    setIsMegaMenu(false);
    setIsElementOfMenu("");
  };
  const [isLinks, setIsLinks] = useState("");
  const onLinkEnter = (event) => {
    let id = event.target.id;
    if (id === "User" || id === "User_link") {
      setIsLinks("User");
    }
  };
  const onLinkOut = (e) => {
    setIsLinks("");
  };
  return (
    <div
      onMouseEnter={(e) => onMouseEnter(e)}
      onMouseLeave={(e) => onMouseOut(e)}
      className="leftPanel__wrapper"
    >
      <div
        onMouseEnter={(e) => megaMenuIsActive(e)}
        onMouseLeave={(e) => megaMenuIsOut(e)}
        className={`leftPanel__wrapper-moove ${isMegaMenu ? isMegaMenu : ""}`}
      >
        <div className="leftPanel__wrapper-moove-top">
          <div> Стань капитаном своей судьбы!</div>
        </div>
        <div className="leftPanel__wrapper-moove-links">
          <div
            id="User_link"
            className={`links__container ${
              isLinks === "User" ? "links__container-active" : ""
            }`}
          >
            <NavLink to={""}>Личный кабинет</NavLink>
          </div>
          <div className="links__container">
            <NavLink to={""}>Расписание занятий</NavLink>
          </div>
          <div className="links__container">
            <NavLink to={""}>Сведения об образовательной организации</NavLink>
          </div>
          <div className="links__container">
            <NavLink to={""}>Версия для слабовидящих</NavLink>
          </div>
        </div>
      </div>
      <div className="leftPanel__wrapper-static">
        <div className="leftPanel__wrapper-static-top">
          <div>
            <Logo
              fill={toggleIconColor("#0C1C2B", "", "#000")}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
        <div className="leftPanel__wrapper-static-icons">
          <div
            onMouseEnter={(e) => onLinkEnter(e)}
            onMouseLeave={(e) => onLinkOut(e)}
            id="User"
            className={`icon__container ${
              isLinks === "User" ? "icon__container-active" : ""
            }`}
          >
            <User
              fill={toggleIconColor("#fff")}
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div id="Calendar" className="icon__container">
            <Calendar
              fill={toggleIconColor("#fff")}
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div id="Museum" className="icon__container">
            <Museum
              fill={toggleIconColor("#fff")}
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div id="Glasses" className="icon__container">
            <Glasses
              fill={toggleIconColor("#fff")}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
export default LeftPanel;
