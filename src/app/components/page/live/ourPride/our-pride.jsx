import React, { useContext } from "react";
import { Context } from "../../../../../index";
import NewsCardsWrapper from "../../../ui/newsCardsWrapper/news-cards-wrapper";
import NewsCard from "../../../common/newsCard/news-card";
const OurPride = () => {
  const { news } = useContext(Context);
  const prideNews = news.news.filter((n) => n.page === "STUDENT_PRIDE");
  return (
    <NewsCardsWrapper>
      {prideNews.map((n) => (
        <NewsCard link={n.id} title={n.title} image={n.image} />
      ))}
    </NewsCardsWrapper>
  );
};
export default OurPride;
