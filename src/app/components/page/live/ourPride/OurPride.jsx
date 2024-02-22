import React, { useState } from "react";

import gord from "../../../../assets/img/newsimg/gord.jpg";
import NewsCard from "../../../common/newsCard/news-card";

const OurPride = () => {
  const [isShowing, setIsShowing] = useState(false);
  const info = [
    {
      title: "Cтипендиат Главы Республики Башкортостан!",
      img: gord,
      href: "/home/univercityNews/gordost",
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
export default OurPride;
