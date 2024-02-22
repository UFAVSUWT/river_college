import React, { useState } from "react";
import sport from "../../../../assets/img/newsimg/sport.jpg";

import NewsCard from "../../../common/newsCard/news-card";

const Sport = () => {
  const [isShowing, setIsShowing] = useState(false);
  const info = [
    {
      title: "Лыжня России — 2024!",
      img: sport,
      href: "/home/univercityNews/sport",
    },
  ];
  return (
    <>
      {" "}
      <div
        onClick={() => setIsShowing(!isShowing)}
        className={`cards + ${isShowing ? "showing" : ""}`}
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {info.map((e) => (
          <NewsCard key={e.title} title={e.title} image={e.img} link={e.href} />
        ))}
      </div>
    </>
  );
};
export default Sport;
