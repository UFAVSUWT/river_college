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
          <div
            style={{
              borderBottom: "solid 1px gray",
              marginBottom: "20px",
            }}
          >
            <h2>Вниманию руководителей Профильных организаций!</h2>
            <p>
              Приглашаем Вас принять участие в ежегодной практической
              конференции «ПрофиРейд» проводимой по результатам организации
              производственной практики в навигацию 2023 года, которая состоится
              15 декабря 2023 г. в 15-00 в актовом зале здания учебного корпуса.
            </p>
            <p>
              Просим Вас подвести итоги прохождения производственной практики
              обучающимися филиала на судах вашего предприятия, наградить и
              поощрить отличившихся; по предлагаемому анкетированию{" "}
              <a
                href="https://forms.yandex.ru/u/6571a759c769f108ebbf9bf6/"
                target="_blank"
                rel="noopener noreferrer"
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                style={{ fontWeight: "bold" }}
              >
                Анкета работодателя
              </a>{" "}
              дать оценку подготовленности обучающихся к производственной
              деятельности и предложения по обеспечению качества подготовки в
              период теоретического обучения в филиале.
            </p>
            <p>
              Предложения в проект резолюции конференции и результаты
              анкетирования просим направить в филиал до 12.12.2023 г. на эл.
              почту <strong>opp@uf-vsuwt.ru</strong>.
            </p>
            <p
              style={{
                maxWidth: "350px",
                fontStyle: "italic",
                fontSize: "16px",
              }}
            >
              {" "}
              Отдел практической подготовки и трудоустройства выпускников
              Уфимского филиала ФГБОУ ВО «ВГУВТ»{" "}
              <strong>8(347)215-14-00 доп. 314</strong>
            </p>
          </div>

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
