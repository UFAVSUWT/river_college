import React, { useContext } from "react";
import { Context } from "../../../../../index";
import NewsCardsWrapper from "../../../ui/newsCardsWrapper/news-cards-wrapper";
import NewsCard from "../../../common/newsCard/news-card";
const Science = () => {
  const { news } = useContext(Context);
  const scienceNews = news.news.filter((n) => n.page === "STUDENT_SCIENCE");
  return (
    <NewsCardsWrapper>
      {scienceNews.map((n) => (
        <NewsCard link={n.id} title={n.title} image={n.image} />
      ))}
    </NewsCardsWrapper>
  );
};
export default Science;
