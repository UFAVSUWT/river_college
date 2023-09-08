import React from "react";
import NewsCard from "../../../common/newsCard/news-card";
import studentLife from "../../../../assets/img/liveImg/life.JPG";
import sport from "../../../../assets/img/liveImg/sprt.jpg";
import science from "../../../../assets/img/liveImg/nau.jpg";
import winner from "../../../../assets/img/liveImg/gordost.JPG";
import { toggleClassName } from "../../../../utils/disabled";

const UniversityNews = () => {
  const newsLinks = [
    {
      title: "Студенческая жизнь",
      image: studentLife,
      link: "../../live/studentsLive",
    },
    {
      title: "Спорт",
      image: sport,
      link: "../../live/sport",
    },
    {
      title: "Наша гордость",
      image: winner,
      link: "../../live/ourPride",
    },
    {
      title: "Наука",
      image: science,
      link: "../../live/science",
    },
  ];
  return (
    <section
      className={toggleClassName(
        "education__container",
        "education__container-white",
        "education__container-black",
        "education__container-contrast"
      )}
    >
      <h1 className="education__container-title">Новости</h1>
      <div className="education__container-content flex min-height university-news-container">
        {newsLinks.map((item, index) => {
          return (
            <NewsCard
              key={index}
              link={item.link}
              image={item.image}
              title={item.title}
            />
          );
        })}
      </div>
    </section>
  );
};
export default UniversityNews;
