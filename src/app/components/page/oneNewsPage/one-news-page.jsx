import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { toggleClassName, toggleFontSize } from "../../../utils/disabled";
import Image from "../../common/image/Image";
import { fetchOneNews } from "../../../httpService/newsApi";
import { deleteNews } from "../../../httpService/newsApi";
import { Context } from "../../../../index";
import Button from "../../common/button/Button";

const OneNewsPage = () => {
  const [news, setNews] = useState({});
  const { user } = useContext(Context);
  const { id } = useParams();
  useEffect(() => {
    fetchOneNews(id).then((data) => setNews(data));
  }, []);

  console.log(id);
  function onDelete(id) {
    deleteNews(id);
  }
  return (
    <>
      <div
        style={{ fontSize: toggleFontSize(18) }}
        className={`one-news-page_container ${toggleClassName(
          " ",
          "",
          "",
          ""
        )}`}
      >
        <h1>{news.title}</h1>
        <div className="image-news">
          <Image
            src={process.env.REACT_APP_API_URL + news.image}
            alt="Фото уплыло:("
            width={"100%"}
            /*   height={"100%"} */
          />
        </div>

        <div dangerouslySetInnerHTML={{ __html: news.text }}></div>
        <div className="one-news-page_container-admin">
          <div>
            {user.isAuth && user.user.role === "ADMIN" ? (
              <div className="one-news-page_container-admin-author">
                Автор новости: {news.author}
              </div>
            ) : null}
          </div>
          <div className="one-news-page_container-admin-btns">
            <div>
              {user.isAuth && user.user.role === "ADMIN" ? (
                <Button className={"edit"}>Редактировать новость</Button>
              ) : null}
            </div>
            <div>
              {user.isAuth && user.user.role === "ADMIN" ? (
                <Button onClick={() => onDelete(id)} className={"delite"}>
                  Удалить новость
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OneNewsPage;
