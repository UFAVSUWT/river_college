import React, { useContext, useState } from "react";
import NewsCard from "../../common/newsCard/news-card";
import NewsCardsWrapper from "../../common/news-card-wrapper/news-card-wrapper";
import { Context } from "../../../../index";
import { NewsStore } from "../../../store/news-store";

const NewsCardContainer = () => {
  const [isShowing, setIsShowing] = useState(false);
  const { news, isLoadingNews } = NewsStore;
  const cardsNews = news.filter(
    (n) => (Number(n.card) >= 1 || Number(n.card) <= 6) && n.card !== ""
  );
  if (isLoadingNews) return "Загрузка...";
  return (
    <div
      onClick={() => setIsShowing(!isShowing)}
      className={isShowing ? "showing" : ""}
    >
      <NewsCardsWrapper>
        {cardsNews.map((n) => (
          <NewsCard
            key={n.id}
            id={n.id}
            staticCard={false}
            title={n.title}
            image={process.env.REACT_APP_API_URL + n.image}
          />
        ))}
      </NewsCardsWrapper>
    </div>
  );
};
export default NewsCardContainer;
