import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { toggleClassName, toggleFontSize } from "../../../utils/disabled";
import Image from "../../common/image/Image";
import { fetchOneNews } from "../../../httpService/newsApi";
import { Context } from "../../../../index";

const OneNewsPage = () => {
  const [news, setNews] = useState({});
  const { user } = useContext(Context);
  const { id } = useParams();
  useEffect(() => {
    fetchOneNews(id).then((data) => setNews(data));
  }, []);
  const string = new DOMParser().parseFromString(news.text, "text/xml");
  console.log(string);
  return (
    <div
      style={{ fontSize: toggleFontSize(18) }}
      className={`one-news-page_container ${toggleClassName(" ", "", "", "")}`}
    >
      <h1>{news.title}</h1>
      <div className="image-news">
        <Image
          src={process.env.REACT_APP_API_URL + news.image}
          alt="Фото уплыло:("
          width={"100%"}
          height={"100%"}
        />
      </div>

      <div dangerouslySetInnerHTML={{ __html: news.text }}></div>
      <div>
        {user.isAuth && user.user.role === "ADMIN" ? news.author : null}
      </div>
    </div>
  );
};
export default OneNewsPage;
