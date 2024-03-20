import React, { useState } from "react";

import scien from "../../../../assets/img/newsimg/1.jpeg";
import NewsCard from "../../../common/newsCard/news-card";

const Science = () => {
  const [isShowing, setIsShowing] = useState(false);
  const info = [
    {
      title: "«Формула профессионального успеха»",
      img: scien,
      href: "/home/univercityNews/science",
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
export default Science;
