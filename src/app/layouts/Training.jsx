import React from "react";
import { Outlet } from "react-router";
import BreadCrumbs from "../components/common/breadCrumbs/BreadCrumbs";
import ChapterMenu from "../components/ui/chapterMenu/ChapterMenu";
import { toggleClassName } from "../utils/disabled";
import { observer } from "mobx-react-lite";
const Training = observer(() => {
  const linksMenu = [
    {
      title: "О центре конвенционной подготовки и дополнительного образования",
      path: "aboutCdo",
    },
    {
      title:
        "Программы повышения квалификации членов экипажей судов внутреннего водного транспорта",
      path: "advancedTraining",
    },
    {
      title: "Программы дополнительного образования детей и взрослых",
      path: "obsherazvivaushie-programmi",
    },
    {
      title: "Программы профессионального обучения",
      path: "programmi-prof-obuchenia",
    },
    {
      title:
        "Программы повышения квалификации и профессиональной переподготовки",
      path: "programmi-prof-perepodgotovka",
    },

    {
      title: "Дистанционное обучение",
      path: "distanceLearning",
    },
    {
      title: "Контакты",
      path: "contacts",
    },
  ];
  return (
    <div
      className={` ${toggleClassName(
        "_container-main min-height",
        "_container-white min-height-white",
        " _container-black min-height-black",
        "_container-contrast min-height-contrast"
      )}`}
    >
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
        <Outlet />
      </div>
    </div>
  );
});
export default Training;
