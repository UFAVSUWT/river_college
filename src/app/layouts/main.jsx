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
        <div style={{ textAlign: "justify", textIndent: "1.5em" }}>
          <p>
            {" "}
            <strong>
              Вниманию курсантов выпускных групп Уфимского филиала! 14 декабря
              2023 г. (четверг) в 15.15 в актовом зале будет организована
              профориентационная онлайн – встреча «Из курсантов в студенты» с
              представителями Волжского государственного университета водного
              транспорта.{" "}
            </strong>
          </p>
          <p>
            Вас ждет презентация направлений подготовки и специальностей,
            информация о правилах приема в вуз 2024 для выпускников СПО. В ходе
            встречи будет возможность задать вопросы и получить ответы по
            получению высшего образования.
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
