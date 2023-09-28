import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { toggleClassName, toggleFontSize } from "../../../utils/disabled";
import InfoContainer from "../../common/infoContainer/InfoContainer";
import Image from "../../common/image/Image";
import { fetchOneNews } from "../../../httpService/newsApi";
import { Context } from "../../../../index";

const OneNewsPage = () => {
  const [news, setNews] = useState({});
  const { user } = useContext(Context);
  console.log(user.user.role);
  const { id } = useParams();
  useEffect(() => {
    fetchOneNews(id).then((data) => setNews(data));
  }, []);

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

      <p>{news.text}</p>
      <div>
        {user.isAuth && user.user.role === "ADMIN" ? news.author : null}
      </div>
    </div>
  );
};
export default OneNewsPage;
