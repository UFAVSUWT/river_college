import React from "react";
import { Outlet } from "react-router";
import BreadCrumbs from "../components/common/breadCrumbs/BreadCrumbs";
import ChapterMenu from "../components/ui/chapterMenu/ChapterMenu";
const Live = () => {
  const linksArray = [
    {
      title: "Новости",
      path: "../home/univercityNews",
    },
    {
      title: "Мероприятия",
      path: "../home/univercityEvents",
    },
    { title: "Наша гордость", path: "ourPride" },
  ];
  return (
    <main className="_container min-height">
      <BreadCrumbs />
      <div className="chapter__menu-show">
        <ChapterMenu linksArray={linksArray} />
      </div>
      <Outlet />
    </main>
  );
};
export default Live;
