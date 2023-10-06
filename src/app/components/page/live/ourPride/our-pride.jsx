import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../../../index";
import NewsCardsWrapper from "../../../ui/newsCardsWrapper/news-cards-wrapper";
import NewsCard from "../../../common/newsCard/news-card";
import { paginate } from "../../../../utils/utils";
import PaginationComponent from "../../../common/pagination/Pagination";
import { fetchNews } from "../../../../httpService/newsApi";
import { observer } from "mobx-react-lite";
const OurPride = observer(() => {
  const { news } = useContext(Context);
  useEffect(() => {
    fetchNews().then((data) => news.setNews(data));
  }, [news]);
  /* сортируем новости постранично */
  const prideNews = news.news
    .filter((n) => n.page === "STUDENT_PRIDE")
    .reverse();
  /* задаем размер страницы */
  const pageSize = 12;
  /* текущая страница */
  const [currentPage, setCurrentPage] = useState(1);
  /* получаем размер массива на одну страницу */
  const newsCrop = paginate(prideNews, currentPage, pageSize);
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
            link={n.id}
            title={n.title}
            image={process.env.REACT_APP_API_URL + n.image}
          />
        ))}
      </NewsCardsWrapper>
      {prideNews.length <= pageSize ? null : (
        <PaginationComponent
          pageSize={pageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          news={prideNews}
        />
      )}
    </>
  );
});
export default OurPride;