import React from "react";
import { Outlet } from "react-router";
import BreadCrumbs from "../components/common/breadCrumbs/BreadCrumbs";
import ChapterMenu from "../components/ui/chapterMenu/ChapterMenu";
const Training = () => {
  const linksMenu = [
    {
      title: "О центре конвенционной подготовки и доп. образования",
      path: "aboutCdo",
    },
    {
      title: "Программы повышения квалификации членов экипажей",
      path: "advancedTraining",
    },
    {
      title: "Дистанционное обучение",
      path: "distanceLearning",
    },
  ];
  return (
    <div className="_container min-height">
      <BreadCrumbs />
      <div className="chapter__menu-show">
        <ChapterMenu linksArray={linksMenu} />
      </div>
      <Outlet />
    </div>
  );
};
export default Training;
