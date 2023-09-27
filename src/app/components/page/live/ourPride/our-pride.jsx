import React, { useContext, useState } from "react";
import { Context } from "../../../../../index";
import NewsCardsWrapper from "../../../ui/newsCardsWrapper/news-cards-wrapper";
import NewsCard from "../../../common/newsCard/news-card";
import { paginate } from "../../../../utils/utils";
import PaginationComponent from "../../../common/pagination/Pagination";
const OurPride = () => {
  const { news } = useContext(Context);
  /* сортируем новости постранично */
  const prideNews = news.news.filter((n) => n.page === "STUDENT_PRIDE");
  /* задаем размер страницы */
  const pageSize = 12;
  /* текущая страница */
  const [currentPage, setCurrentPage] = useState(1);
  /* получаем размер массива на одну страницу */
  const newsCrop = paginate(prideNews, currentPage, pageSize);
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
};
export default OurPride;
