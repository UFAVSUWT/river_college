import React, { useContext, useState } from "react";
import { Context } from "../../../../../index";
import NewsCardsWrapper from "../../../ui/newsCardsWrapper/news-cards-wrapper";
import NewsCard from "../../../common/newsCard/news-card";
import { paginate } from "../../../../utils/utils";
import PaginationComponent from "../../../common/pagination/Pagination";
const Science = () => {
  const { news } = useContext(Context);
  /* сортируем новости постранично */
  const scienceNews = news.news.filter((n) => n.page === "STUDENT_SCIENCE");
  /* задаем размер страницы */
  const pageSize = 12;
  /* текущая страница */
  const [currentPage, setCurrentPage] = useState(1);
  /* получаем размер массива на одну страницу */
  const newsCrop = paginate(scienceNews, currentPage, pageSize);
  return (
    <>
      <NewsCardsWrapper>
        {newsCrop.map((n) => (
          <NewsCard key={n.id} link={n.id} title={n.title} image={n.image} />
        ))}
      </NewsCardsWrapper>
      {scienceNews.length <= pageSize ? null : (
        <PaginationComponent
          pageSize={pageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          news={scienceNews}
        />
      )}
    </>
  );
};
export default Science;
