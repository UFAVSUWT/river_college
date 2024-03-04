import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../../../utils/disabled";

import InfoMedOsmotr from "../../../../../../assets/pdf/applicant/infoMedOsmotr.pdf";
import PerechenSpec from "../../../../../../assets/pdf/applicant/priem2023_special_SPO.pdf";
import Dogovor from "../../../../../../assets/pdf/applicant/Dogovor_platn_obraz_uslug_2024.pdf";
import { ReactComponent as PDF } from "../../../../../../assets/svg/office/pdf.svg";
import { NavLink } from "react-router-dom";
import kcp2024 from "../../../../../../assets/pdf/applicant/2024-2024/Количество мест для приема на обучение по образовательным программам среднего профессиональн.xlsx";

import pravilsPriema2 from "../../../../../../assets/pdf/applicant/2024-2024/Правила приема на обучение по образовательным программам среднего профессионального образования на 2024-25 учебный год.pdf";
import prikaz99 from "../../../../../../assets/pdf/applicant/2024-2024/приказ 99.pdf";
const Spo = observer(() => {
  return (
    <>
      <h1>Информация для студентов, поступающих на направления СПО</h1>{" "}
      <ol>
        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={pravilsPriema2}
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
            образования в 2024-2025 году
          </a>
        </li>
        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={prikaz99}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Приказ об утверждении правил приема на 2024 год
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
export default Spo;
