import React, { useContext, useState } from "react";

import NewsCard from "../../common/newsCard/news-card";
import NewsCardsWrapper from "../newsCardsWrapper/news-cards-wrapper";
import { Context } from "../../../../index";

const NewsCardContainer = () => {
  const [isShowing, setIsShowing] = useState(false);
  const { news } = useContext(Context);
  const cardsNews = news.news.filter((n) => n.card !== "");
  return (
    <div
      onClick={() => setIsShowing(!isShowing)}
      className={isShowing ? "showing" : ""}
    >
      <NewsCardsWrapper>
        {cardsNews.map((n) => (
          <NewsCard link={n.id} title={n.title} image={n.image} />
        ))}
      </NewsCardsWrapper>
    </div>
  );
};
export default NewsCardContainer;
