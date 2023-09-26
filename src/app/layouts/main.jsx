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
          Принятие кодекса чести курсанта
        </h1>{" "}
        <div style={{ textAlign: "justify", "text-indent": "1.5em" }}>
          <p>
            22 сентября 2023 года в 11:00 на плацу состоится торжественное
            мероприятие - принятие курсантами Уфимского филиала ФГБОУ ВО «ВГУВТ»
            Кодекса чести курсанта.
          </p>
          <p>
            По традиции в это день каждый первокурсник произнесет слова Кодекса
            чести курсанта Уфимского филиала, обязуясь добросовестно учиться,
            воспитывать в себе честность, ответственность и взаимовыручку в
            лучших традициях Российского флота, дорожить честью учебного
            заведения и высоким званием курсанта и пронести верность этому
            обещанию через все годы учебы. Курсантские билеты первокурсникам
            вручают гости: представители судоходных компаний, выпускники прошлых
            лет, достигшие высоких профессиональных результатов, социальные
            партнеры. Во время торжественного мероприятия награждаются лучшие
            курсанты нового набора, успевшие за первый месяц учебы стать
            победителями соревнований и конкурсов, которые проводились в рамках
            месячника первокурсника. Кульминация праздника - торжественный марш
            курсантов, вошедших в состав курсантов Уфимского филиала.
          </p>
          <p>
            Во время торжественного мероприятия награждаются лучшие курсанты
            нового набора, успевшие за первый месяц учебы стать победителями
            соревнований и конкурсов, которые проводились в рамках месячника
            первокурсника. Кульминация праздника - торжественный марш курсантов,
            вошедших в состав курсантов Уфимского филиала.{" "}
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
