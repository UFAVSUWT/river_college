import React, { useContext, useState } from "react";
import { Context } from "../../../../../index";
import PaginationComponent from "../../../common/pagination/paginstion";
import { observer } from "mobx-react-lite";
import NewsCardsWrapper from "../../../common/news-card-wrapper/news-card-wrapper";
import NewsCard from "../../../common/newsCard/news-card";
import { paginate } from "../../../../utils/utils";

const Science = observer(() => {
  const { news } = useContext(Context);
  // сортируем новости постранично
  const scienceNews = news.news
    .filter((n) => n.page === "STUDENT_SCIENCE")
    .reverse();
  // задаем размер страницы
  const pageSize = 12;
  // текущая страница
  const [currentPage, setCurrentPage] = useState(1);
  // получаем размер массива на одну страницу
  const newsCrop = paginate(scienceNews, currentPage, pageSize);
  if (news.isLoading) return "Загрузка";
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
});
export default Science;
