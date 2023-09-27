import React, { useState } from "react";
import { useParams } from "react-router";
import { toggleClassName, toggleFontSize } from "../../../utils/disabled";
import InfoContainer from "../../common/infoContainer/InfoContainer";
import Image from "../../common/image/Image";

const OneNewsPage = () => {
  const [news, setNews] = useState([{}]);
  const params = useParams();
  console.log(params.id);
  return (
    <div
      style={{ fontSize: toggleFontSize(18) }}
      className={`infopage-main ${toggleClassName(
        "infopage-main ",
        "infopage-white",
        "infopage-black",
        "infopage-contrast"
      )}`}
    >
      {news.map((n) => (
        <InfoContainer
          key={n.id}
          title="Новости университета"
          newsTitle={n.title}
          btnTitle="Все новости"
          image={
            <Image
              src={process.env.REACT_APP_API_URL + n.image}
              alt="Фото уплыло:("
              height="100%"
              width="100%"
            />
          }
        >
          {n.text}
        </InfoContainer>
      ))}
    </div>
  );
};
export default OneNewsPage;
