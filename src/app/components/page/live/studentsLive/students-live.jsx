import { Context } from "../../../../../index";
import React, { useContext } from "react";
import NewsCard from "../../../common/newsCard/news-card";
import NewsCardsWrapper from "../../../ui/newsCardsWrapper/news-cards-wrapper";
const StudentsLive = () => {
  const { news } = useContext(Context);
  const liveNews = news.news.filter((n) => n.page === "STUDENT_LIFE");
  return (
    <NewsCardsWrapper>
      {liveNews.map((n) => (
        <NewsCard link={n.id} title={n.title} image={n.image} />
      ))}
    </NewsCardsWrapper>
  );
};
export default StudentsLive;
