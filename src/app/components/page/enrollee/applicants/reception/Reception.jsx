import { observer } from "mobx-react-lite";
import React from "react";
import {
  toggleClassName,
  toggleFontSize,
  toggleIconColor,
} from "../../../../../utils/disabled";
import Rule from "../../../../../assets/pdf/applicant/pravila_priema_2023.pdf";
import PrikazRule from "../../../../../assets/pdf/applicant/prikaz_pravila_priema_2023.pdf";
import InfoMedOsmotr from "../../../../../assets/pdf/applicant/infoMedOsmotr.pdf";
import PerechenSpec from "../../../../../assets/pdf/applicant/priem2023_special_SPO.pdf";
import Dogovor from "../../../../../assets/pdf/applicant/Dogovor_platn_obraz_uslug_2021.pdf";
import { ReactComponent as PDF } from "../../../../../assets/svg/office/pdf.svg";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../../../assets/svg/riveruniversityLogo.svg";

const Reception = observer(() => {
  return (
    <>
      <h1 className="education__container-title">Приемная КАМПАНИЯ 2023</h1>
      <section className="margin-tb1 education__container-content">
        <h1 className="education__container-title">
          ЧАСЫ РАБОТЫ ПРИЕМНОЙ КОМИССИИ С ПОСЕТИТЕЛЯМИ В 2023 ГОДУ:
        </h1>
        <div className="margin-tb1 flex applicantsEnrollee-header">
          <div
            style={{ fontSize: toggleFontSize(20) }}
            className="applicantsEnrollee-header-body"
          >
            <p>
              Пн-Чт: <b>с 9.00 до 17.15.</b>
            </p>
            <p>
              Пт: <b>с 9.00 до 16.00 (с 16-00 до 17.15 работа с документами)</b>
            </p>
            <p>Обед с 12.00 до 13.00</p>
            <p>
              Сб, Вс: <b>Выходной</b>
            </p>
            <h1>Задать вопрос приемной комиссии:</h1>
            <ul>
              <li>
                <a
                  href="tel:+7 (347) 2151400"
                  className={toggleClassName(
                    "education__link",
                    "education__link-white",
                    "education__link-black",
                    "education__link-contrast"
                  )}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  +7 (347) 215-14-00 доб. 4
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="mailto:opp@uf-vsuwt.ru"
                  target={"_blank"}
                  rel="noreferrer"
                  className={toggleClassName(
                    "education__link",
                    "education__link-white",
                    "education__link-black",
                    "education__link-contrast"
                  )}
                >
                  UF-VSUWT@yandex.ru
                </a>
              </li>
            </ul>
          </div>

          <div className="applicantsEnrollee-header-logo">
            <Logo
              fill={toggleIconColor("#0C1C2B", "", "#000")}
              width="50%"
              height={"50%"}
            />
            <div className="applicantsEnrollee-header-title">
              Свяжи свою <br /> жизнь с морем!
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2109.826323963219!2d55.88651099532258!3d54.78380368264479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1684927322761!5m2!1sru!2sru"
            style={{
              width: "100%",
              height: "400px",
              style: "border:0;",
              allowfullscreen: "",
              loading: "lazy",
              referrerpolicy: "no-referrer-when-downgrade",
            }}
            title="myMap"
          ></iframe>
        </div>
      </section>
      <ol>
        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={Rule}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Правила приема на обучение по программам среднего профессионального
            образования в 2023-2024 году
          </a>
        </li>
        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={PrikazRule}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Приказ об утверждении правил приема на 2023 год
          </a>
        </li>

        <li>
          <NavLink to="../kcp">КЦП СПО 23/24 уч.год</NavLink>
        </li>
        <li>
          <NavLink
            to={"../educationLvlRequirements"}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Требования к уровню образования
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"../admissionConditions"}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Условия приема на обучение по договорам
          </NavLink>
        </li>
        <li>
          <NavLink
            to="../receptionPlaces"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Информация о местах приема документов
          </NavLink>
        </li>
        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={InfoMedOsmotr}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Информация о необходимости прохождения дополнительного медицинского
            осмотра
          </a>
        </li>
        <li>
          <NavLink
            to="../receptionTiming"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Информация о сроках проведения приема.
          </NavLink>
        </li>
        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={PerechenSpec}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Перечень специальностей
          </a>
        </li>
        <li>
          <NavLink
            to="../../../sveden/grants"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Информация о наличии мест в общежитии
          </NavLink>
        </li>
        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={Dogovor}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Образец договора по образовательным программам среднего
            профессионального образования
          </a>
        </li>
        <li>
          <NavLink
            to="../educationCosts"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Стоимость обучения на коммерческой основе на 2023/2024 учебный год
          </NavLink>
        </li>
      </ol>
    </>
  );
});
export default Reception;
