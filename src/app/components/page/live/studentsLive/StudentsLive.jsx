import React, { useState } from "react";

import proect from "../../../../assets/img/newsimg/proect.jpg";
import NewsCard from "../../../common/newsCard/news-card";

const StudentsLive = () => {
  const [isShowing, setIsShowing] = useState(false);
  const info = [
    {
      title: "«Проектория»",
      img: proect,
      href: "/home/univercityNews/studentsLive",
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
export default StudentsLive;
