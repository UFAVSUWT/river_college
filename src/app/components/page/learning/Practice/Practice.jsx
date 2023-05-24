import React from "react";
import { Outlet } from "react-router";
import Image from "../../../common/image/Image";
import Port from "../../../../assets/img/education/port.jpg";
import ChapterMenu from "../../../ui/chapterMenu/ChapterMenu";
import { observer } from "mobx-react-lite";
import { toggleClassName } from "../../../../utils/disabled";
const Practice = observer(() => {
  const linksMenu = [
    { title: "Отдел практической подготовки", path: "" },
    {
      title: "Курсанты и выпускники филиала о практике",
      path: "reviews",
    },

    {
      title:
        "График проведения учебных, производственных и преддипломных практик",
      path: "shedule",
    },
  ];
  return (
    <>
      <div
        className={toggleClassName(
          "education__container",
          "education__container-white",
          "education__container-black",
          "education__container-contrast"
        )}
      >
        <h1 className="education__container-title">
          Отдел практической подготовки
        </h1>
        <div className="education__container-image">
          <Image src={Port} width={"100%"} height={"400px"} />
        </div>
        <div className="education__container-navigate">
          <ChapterMenu
            title={"Навигация раздела «Отдел практической подготовки»"}
            linksArray={linksMenu}
          />
        </div>
        <div className="education__container-content">
          <Outlet />
        </div>
      </div>
    </>
  );
});
export default Practice;
