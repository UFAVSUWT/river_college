import { observer } from "mobx-react-lite";
import React from "react";
import { useParams } from "react-router";
import ImageSlider from "../components/common/carousel/ImageSlider";
import LiveCardContainer from "../components/common/liveCardContainer/LiveCardContainer";
import ApplicantsPage from "../components/page/infoContainer/applicantsPage/ApplicantsPage";
/* import EventsPages from "../components/page/infoContainer/eventsPages/EventsPages"; */
import InfoPage from "../components/page/infoContainer/infoPage/InfoPage";
/* import SecurityPage from "../components/page/infoContainer/securityPage/SecurityPage";  */
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
          1 сентября — День знаний
        </h1>{" "}
        <p>
          1 сентября 2023 г. в 8.15 состоится построение курсантов на плацу
          филиала. Явка строго обязательна в установленной форме одежды. С
          уважением, зам. директора по учебной работе Уфимского филиала ФГБОУ ВО
          «Волжский государственный университет водного транспорта»
        </p>
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
          {!params.element && <InfoPage />}
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
