import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import images from "../../../../store/images";
import { toggleClassName, toggleFontSize } from "../../../../utils/disabled";
import Image from "../../../common/image/Image";
import InfoContainer from "../../../common/infoContainer/InfoContainer";
import NewsCardContainer from "../../../ui/newsCardContainer/NewsCardContainer";
import { Context } from "../../../../../index";
import { NewsStore } from "../../../../store/news-store";

const InfoPage = observer(() => {
  const { news, isLoadingNews } = NewsStore;
  const main = news.filter((n) => n.main);
  if (isLoadingNews) return "Загрузка...";
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
      {main.map((n) => (
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
          <div dangerouslySetInnerHTML={{ __html: n.text }}></div>
        </InfoContainer>
      ))}

      {images.image !== "off" ? <NewsCardContainer /> : null}
    </div>
  );
});
export default InfoPage;
