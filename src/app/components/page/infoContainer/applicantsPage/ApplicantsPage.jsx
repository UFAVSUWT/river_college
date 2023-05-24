import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  toggleClassName,
  toggleFontSize,
  toggleIconColor,
} from "../../../../utils/disabled";
import Button from "../../../common/button/Button";
import { ReactComponent as ArrowButton } from "../../../../assets/svg/arrowButton.svg";
import Image from "../../../common/image/Image";
const ApplicantsPage = observer(() => {
  return (
    <div className="applicantsPage">
      <div className="infocontainer__button eventsBtn__container">
        <span className="infocontainer__titile">Приемная кампания</span>
        <NavLink to="enrollee/applicants">
          <Button
            style={{ fontSize: toggleFontSize(1) }}
            className={toggleClassName(
              "infopage__button",
              "white white-radius",
              "black black-radius",
              "contrast contrast-radius"
            )}
          >
            <span>Сведения для поступающих</span>
            {<ArrowButton fill={toggleIconColor("#C80000")} />}
          </Button>
        </NavLink>
      </div>
      <div className="applicantsPage__main">
        <Image
          src="img/newsimg/postuplenie.png"
          alt="Фото уплыло:("
          height="100%"
          width="100%"
        />

        <div className="applicants__container">
          <ul
            className={toggleClassName(
              "container-links",
              "container-links-white",
              "container-links-black",
              "container-links-contrast"
            )}
          >
            <li>
              {" "}
              <NavLink to={"enrollee/applicants"}>Выбор профессии</NavLink>
            </li>
            <li>
              <NavLink to={"enrollee/applicants/reception"}>
                Приемная кампания 2023
              </NavLink>
            </li>
            <li>
              <NavLink to={"enrollee/applicants/submissionDoc"}>
                Подача документов
              </NavLink>
            </li>
            <li style={{ backgroundColor: "red" }}>
              <NavLink to={"enrollee/applicants/monitoring"}>
                Мониторинг подачи документов
              </NavLink>
            </li>
            <li>
              <NavLink to={"enrollee/applicants/applicantsInfo"}>
                Узнать как стать нашим курсантом
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to={"enrollee/open-day"}>Дни открытых дверей</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});
export default ApplicantsPage;
