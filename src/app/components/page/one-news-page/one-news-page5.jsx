import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toggleClassName, toggleFontSize } from "../../../utils/disabled";
import Image from "../../common/image/Image";

const OneNewsPage5 = () => {
  const navigate = useNavigate();
  const [oneNews, setOneNews] = useState({});

  return (
    <>
      <div
        style={{ fontSize: toggleFontSize(18) }}
        className={`one-news-page_container _container${toggleClassName(
          " ",
          "",
          "",
          ""
        )}`}
      >
        <h1>{oneNews?.title}</h1>
        <div className="image-news">
          <Image
            src={process.env.REACT_APP_API_URL + oneNews?.image}
            alt="Фото уплыло:("
            width={"100%"}
          />
        </div>

        <div
          className="text-content"
          dangerouslySetInnerHTML={{ __html: oneNews?.text }}
        ></div>
      </div>
    </>
  );
};
export default OneNewsPage5;
