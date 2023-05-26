import React from "react";
import { Outlet } from "react-router";
import ChapterMenu from "../components/ui/chapterMenu/ChapterMenu";
const Home = () => {
  const linksArray = [
    { title: "Главная", path: "/" },
    { title: "О филиале", path: "/home/aboutBranch" },
    { title: "Историческая справка", path: "/home/historicalReference" },
    { title: "Новости", path: "/home/univercityNews" },
    { title: "План мероприятий", path: "/home/univercityEvents" },
  ];
  return (
    <div className="_container min-height">
      <div className="chapter__menu-show">
        <ChapterMenu linksArray={linksArray} />
      </div>
      <Outlet />
    </div>
  );
};
export default Home;
