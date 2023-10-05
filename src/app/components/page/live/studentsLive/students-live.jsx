import { Context } from "../../../../../index";
import React, { useContext, useEffect, useState } from "react";
import NewsCard from "../../../common/newsCard/news-card";
import NewsCardsWrapper from "../../../ui/newsCardsWrapper/news-cards-wrapper";
import Pagination from "../../../common/pagination/Pagination";
import { paginate } from "../../../../utils/utils";
import { fetchNews } from "../../../../httpService/newsApi";
import { observer } from "mobx-react-lite";

const StudentsLive = observer(() => {
  const { news } = useContext(Context);
  useEffect(() => {
    fetchNews().then((data) => news.setNews(data));
  }, [news]);
  /* сортируем новости постранично */
  const liveNews = news.news.filter((n) => n.page === "STUDENT_LIFE").reverse();
  /* задаем размер страницы */
  const pageSize = 12;
  /* текущая страница */
  const [currentPage, setCurrentPage] = useState(1);
  /* получаем размер массива на одну страницу */
  const newsCrop = paginate(liveNews, currentPage, pageSize);
  if (newsCrop.length === 0 || !newsCrop)
    return "На этой странице новостей пока что нет...";
  return (
    <>
      <NewsCardsWrapper>
        {newsCrop.map((n) => (
          <NewsCard
            id={n.id}
            staticCard={false}
            key={n.id}
            title={n.title}
            image={process.env.REACT_APP_API_URL + n.image}
          />
        ))}
      </NewsCardsWrapper>
      {liveNews.length <= pageSize ? null : (
        <Pagination
          pageSize={pageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          news={liveNews}
        />
      )}
    </>
  );
});
export default StudentsLive;
