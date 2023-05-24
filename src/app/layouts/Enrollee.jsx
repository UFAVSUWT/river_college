import React from "react";
import { Outlet } from "react-router";
import BreadCrumbs from "../components/common/breadCrumbs/BreadCrumbs";
import ChapterMenu from "../components/ui/chapterMenu/ChapterMenu";
import { observer } from "mobx-react-lite";
import { toggleClassName } from "../utils/disabled";
const Enrolly = observer(() => {
  const linksMenu = [
    {
      title: "Приемная кампания 2023",
      path: "reception",
    },
    {
      title: "Подача документов",
      path: "submissionDoc",
    },
    {
      title: "Обращение директора",
      path: "messageFromDirector",
    },
    {
      title: "Мониторинг подачи документов",
      path: "monitoring",
    },
    {
      title: "Узнать как стать нашим курсантом",
      path: "applicantsInfo",
    },
    { title: "Дни открытых дверей", path: "open-day" },
  ];

  return (
    <div className="_container min-height">
      <BreadCrumbs />
      <div className="chapter__menu-show">
        <ChapterMenu linksArray={linksMenu} />
      </div>
      <div
        className={toggleClassName(
          "education__container",
          "education__container-white",
          "education__container-black",
          "education__container-contrast"
        )}
      >
        <div className="education__container-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
});
export default Enrolly;
