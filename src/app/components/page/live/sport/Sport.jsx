import React, { useContext } from "react";
import { Context } from "../../../../../index";
import NewsCardsWrapper from "../../../ui/newsCardsWrapper/news-cards-wrapper";
import NewsCard from "../../../common/newsCard/news-card";
const Sport = () => {
  const { news } = useContext(Context);
  const sportNews = news.news.filter((n) => n.page === "STUDENT_SPORT");

  return (
    <NewsCardsWrapper>
      {sportNews.map((n) => (
        <NewsCard link={n.id} title={n.title} image={n.image} />
      ))}
    </NewsCardsWrapper>
  );
};
export default Sport;
