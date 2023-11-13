import { observer } from "mobx-react-lite";
import React from "react";
import { useParams } from "react-router";
import ImageSlider from "../components/common/carousel/ImageSlider";
import LiveCardContainer from "../components/common/liveCardContainer/LiveCardContainer";
import ApplicantsPage from "../components/page/infoContainer/applicantsPage/ApplicantsPage";
/* import EventsPages from "../components/page/infoContainer/eventsPages/EventsPages";
import InfoPage from "../components/page/infoContainer/infoPage/InfoPage";
import SecurityPage from "../components/page/infoContainer/securityPage/SecurityPage"; */
import NewsNavbar from "../components/ui/newsNavbar/NewsNavbar";
import PartnersContainer from "../components/ui/partners-container/partners-container";
import { toggleClassName } from "../utils/disabled";
import HrLine from "../components/common/hrLine/HrLine";

const Main = observer(() => {
  const params = useParams();

  return (
    <>
      <ImageSlider />
      <div
        className={toggleClassName(
          "_container",
          "_container-white",
          "_container-black",
          "_container-contrast"
        )}
      >
        <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
          {" "}
          Вниманию абитуриентов!
        </h1>{" "}
        <div style={{ textAlign: "justify", textIndent: "1.5em" }}>
          <p>
            Уфимский филиал ФГБОУ ВО «ВГУВТ» 23 ноября 2023 года в 14.30 часов
            проводит День открытых дверей. Приглашаем всех желающих.
          </p>
          <p>
            Наш адрес: <strong>г.Уфа, Затон, ул. Ахметова, 275.</strong>
          </p>
          <p>
            Проезд автобусами №№ 30,30 К, 107, 108, 112, марш. такси 248, 391 до
            ост. «Речное училище».
          </p>
          <p>
            Тел.: <strong>8 (347) 215-14-00 доп. (301, 302).</strong>
          </p>
        </div>
      </div>
      <div
        className={toggleClassName(
          "_container",
          "_container-white",
          "_container-black",
          "_container-contrast"
        )}
      >
        <NewsNavbar />
      </div>
      <div>
        <div
          className={toggleClassName(
            "_container-main",
            "_container-white",
            "_container-black",
            "_container-contrast"
          )}
        >
          {!params.element && <ApplicantsPage /> /* <InfoPage /> */}
          {/*     {params.element === "events" ? <EventsPages /> : null} */}
          {params.element === "applicants" ? <ApplicantsPage /> : null}
          {/*       {params.element === "security" ? <SecurityPage /> : null} */}
        </div>
      </div>
      <LiveCardContainer />
      <HrLine />
      <PartnersContainer />
    </>
  );
});
export default Main;
