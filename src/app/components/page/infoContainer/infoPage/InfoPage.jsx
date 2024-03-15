import { observer } from "mobx-react-lite";
import React from "react";
import images from "../../../../store/images";
import { toggleClassName, toggleFontSize } from "../../../../utils/disabled";
import Image from "../../../common/image/Image";
import InfoContainer from "../../../common/infoContainer/InfoContainer";
import NewsCardContainer from "../../../ui/newsCardContainer/NewsCardContainer";
import mainImage from "../../../../assets/img/newsimg/main.jpg";
import HrLine from "../../../common/hrLine/HrLine";
const InfoPage = observer(() => {
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
      {/*    <InfoContainer
        title="Новости университета"
        newsTitle="Митинг, посвящённый Дню защитника Отечества"
        btnTitle="Все новости"
        image={
          <Image
            src={mainImage}
            alt="Фото уплыло:("
            height="100%"
            width="100%"
          />
        }
      >
        <div style={{ marginTop: "20px" }}>
          <p>
            История России богата знаменательными событиями. Во все века
            героизм, мужество воинов России, мощь и слава русского оружия были
            неотъемлемой частью величия Российского государства. Воины,
            защитники Отечества есть практически в каждой семье, поэтому
            праздник - День защитника Отечества - считается всенародным.
          </p>
          <p>
            21 февраля курсанты, сотрудники Уфимского филиала, почетные гости
            почтили память погибших выпускников филиала при исполнении воинского
            долга. Поименно вспомнили Вячеслава Ильина, Ильдара Зарипова,
            Станислава Вереденко, Арсения Воробьёва, Данила Фёдорова, Марата
            Давлянова, Алексея Михайлова, возложили цветы к мемориальным доскам.
          </p>
          <p>
            Перед участниками митинга выступил преподаватель организатор ОБЖ,
            участник СВО Романов Зульфир Вахитович прибывший в краткосрочный
            отпуск, который является одним из живых примеров мужества. С начала
            спецоперации он добровольно принял решение вступить в ряды
            Вооруженных Сил России. Сегодня военнослужащий посетил родной
            университет, встретился с коллегами и курсантами.{" "}
          </p>
        </div>

        <HrLine />
      </InfoContainer> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Уфимский филиал вошел в видеорепортаж о нашей республике,
          подготовленный для Всероссийского телемарафона «Истоки», прошедшего 14
          марта 2024 г. в Международный день рек.{" "}
        </h2>
        <iframe
          src="https://vk.com/video_ext.php?oid=-129739201&id=456239158&hd=2"
          width="853"
          height="480"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
          frameborder="0"
          allowfullscreen
          title=" "
        ></iframe>
      </div>
      <HrLine />
      {images.image !== "off" ? <NewsCardContainer /> : null}
    </div>
  );
});
export default InfoPage;
