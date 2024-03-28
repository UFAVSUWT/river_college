import React, { useState } from "react";

import NewsCard from "../../common/newsCard/news-card";
import sport from "../../../assets/img/newsimg/sport.jpg";
import gord from "../../../assets/img/newsimg/gord.jpg";
import proect from "../../../assets/img/newsimg/proect.jpg";
import scien from "../../../assets/img/newsimg/1.jpeg";
import anons from "../../../assets/img/newsimg/2.jpg";
import moryachok from "../../../assets/img/newsimg/3.jpg";
const NewsCardContainer = () => {
  const [isShowing, setIsShowing] = useState(false);
  const info = [
    {
      title: "Викторина А ну-ка, морячок!",
      img: moryachok,
      href: "home/univercityNews/moryachok",
    },
    {
      title: "Анонс попечительского совета",
      img: anons,
      href: "home/univercityNews/anonsPopechSoveta",
    },
    {
      title: "Лыжня России — 2024!",
      img: sport,
      href: "home/univercityNews/sport",
    },
    {
      title: "Cтипендиат Главы Республики Башкортостан!",
      img: gord,
      href: "home/univercityNews/gordost",
    },
    {
      title: "«Проектория»",
      img: proect,
      href: "home/univercityNews/studentsLive",
    },
    {
      title: "«Формула профессионального успеха»",
      img: scien,
      href: "home/univercityNews/science",
    },
  ];
  return (
    <div
      onClick={() => setIsShowing(!isShowing)}
      className={`cards + ${isShowing ? "showing" : ""}`}
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {info.map((e) => (
        <NewsCard key={e.title} title={e.title} image={e.img} link={e.href} />
      ))}

      {/*     <NewsCard />
      <NewsCard /> */}
    </div>
  );
};
export default NewsCardContainer;
