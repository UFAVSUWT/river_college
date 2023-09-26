import { Context } from "../../../../../index";
import React, { useContext, useState } from "react";
import NewsCard from "../../../common/newsCard/news-card";
import NewsCardsWrapper from "../../../ui/newsCardsWrapper/news-cards-wrapper";
import Pagination from "../../../common/pagination/Pagination";
import { paginate } from "../../../../utils/utils";

const StudentsLive = () => {
  const { news } = useContext(Context);
  /* сортируем новости постранично */
  const liveNews = news.news.filter((n) => n.page === "STUDENT_LIFE");
  /* задаем размер страницы */
  const pageSize = 12;
  /* текущая страница */
  const [currentPage, setCurrentPage] = useState(1);
  /* получаем размер массива на одну страницу */
  const newsCrop = paginate(liveNews, currentPage, pageSize);

  return (
    <>
      <NewsCardsWrapper>
        {newsCrop.map((n) => (
          <NewsCard key={n.id} link={n.id} title={n.title} image={n.image} />
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
};
export default StudentsLive;
