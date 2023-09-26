import React, { useContext, useState } from "react";
import { Context } from "../../../../../index";
import NewsCardsWrapper from "../../../ui/newsCardsWrapper/news-cards-wrapper";
import NewsCard from "../../../common/newsCard/news-card";
import PaginationComponent from "../../../common/pagination/Pagination";
import { paginate } from "../../../../utils/utils";
const Sport = () => {
  const { news } = useContext(Context);
  /* сортируем новости постранично */
  const sportNews = news.news.filter((n) => n.page === "STUDENT_SPORT");
  /* задаем размер страницы */
  const pageSize = 12;
  /* текущая страница */
  const [currentPage, setCurrentPage] = useState(1);
  /* получаем размер массива на одну страницу */
  const newsCrop = paginate(sportNews, currentPage, pageSize);
  return (
    <>
      <NewsCardsWrapper>
        {newsCrop.map((n) => (
          <NewsCard key={n.id} link={n.id} title={n.title} image={n.image} />
        ))}
      </NewsCardsWrapper>
      {sportNews.length <= pageSize ? null : (
        <PaginationComponent
          pageSize={pageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          news={sportNews}
        />
      )}
    </>
  );
};
export default Sport;
