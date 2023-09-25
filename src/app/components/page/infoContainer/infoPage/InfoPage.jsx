import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import images from "../../../../store/images";
import { toggleClassName, toggleFontSize } from "../../../../utils/disabled";
import Image from "../../../common/image/Image";
import InfoContainer from "../../../common/infoContainer/InfoContainer";
import NewsCardContainer from "../../../ui/newsCardContainer/NewsCardContainer";
import { Context } from "../../../../../index";

const InfoPage = observer(() => {
  const { news } = useContext(Context);
  const main = news.news.filter((n) => n.main);

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
          title="Новости университета"
          newsTitle={n.title}
          btnTitle="Все новости"
          image={
            <Image
              src={n.image}
              alt="Фото уплыло:("
              height="100%"
              width="100%"
            />
          }
        >
          {n.text}
        </InfoContainer>
      ))}

      {images.image !== "off" ? <NewsCardContainer /> : null}
    </div>
  );
});
export default InfoPage;
