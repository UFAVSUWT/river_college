import React from "react";
import { observer } from "mobx-react-lite";
import vozmPodachi from "../../../../../../assets/pdf/applicant/VO/Информация о возможности подачи документов, с использованием суперсервиса Поступление в ВУЗ онлайн посредством ЕПГУ.pdf";
import osobPrava from "../../../../../../assets/pdf/applicant/VO/Информация о необходимости прохождения поступающими обязательного предварительного  мед. осмотра.pdf";
import predostOsobPrav from "../../../../../../assets/pdf/applicant/VO/Информация о предоставлении особых прав и особого преимущества.pdf";
import obrazecDogovora from "../../../../../../assets/pdf/applicant/Dogovor_platn_obraz_uslug_2024.pdf";
import perechVstupIspit from "../../../../../../assets/pdf/applicant/VO/Перечень вступительных испытаний с указанием по каждому вступительному испытанию следующих сведений.pdf";
import perechNaptavPodgot from "../../../../../../assets/pdf/applicant/VO/Перечень направлений подготовки (специальностей).pdf";
import poryadokPodach from "../../../../../../assets/pdf/applicant/VO/Порядок подачи и рассмотрения  апелляции по результатам вступительных испытаний.pdf";
import pravilaPriema from "../../../../../../assets/pdf/applicant/VO/Правила приема на обучение по образовательным программам бакалавриата, специалитета, магистратуры в 2024-25 учебном году.pdf";

import { ReactComponent as PDF } from "../../../../../../assets/svg/office/pdf.svg";
import { toggleClassName } from "../../../../../../utils/disabled";
import { NavLink } from "react-router-dom";

import cel_obuck from "../../../../../../assets/pdf/enrolle/Квота для приема лиц, поступающих на целевое обучение.pdf";
import osob_prava from "../../../../../../assets/pdf/enrolle/Квота для приема лиц, поступающих особым правам.pdf";
import otd_kvota from "../../../../../../assets/pdf/enrolle/Квота для приема лиц, поступающих по отдельной квоте.pdf";
import preim from "../../../../../../assets/pdf/enrolle/Информация о предоставлении особых прав и особого преимущества.pdf";
const HigherEducation = observer(() => {
  return (
    <>
      <h1>Информация для студентов, поступающих на направления ВО</h1>
      <ol>
        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={pravilaPriema}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Правила приема на обучение по образовательным программам
            бакалавриата, специалитета, магистратуры в 2024-2025 учебном году
          </a>
        </li>
        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={vozmPodachi}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Информация о возможности подачи документов, с использованием
            суперсервиса Поступление в ВУЗ онлайн посредством ЕПГУ
          </a>
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
          <NavLink
            to="../kcpVo"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            План приема в Уфимский филиал ФГБОУ ВО "ВГУВТ" по программе высшего
            образования специалитет на 2024-2025 учебный год на 2024-2025 уч.
            год (без учета квот)
          </NavLink>
        </li>
        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={cel_obuck}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Квота для приема лиц, поступающих на целевое обучение
          </a>
        </li>
        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={osob_prava}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Квота для приема лиц, поступающих особым правам
          </a>
        </li>
        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={otd_kvota}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Квота для приема лиц, поступающих по отдельной квоте
          </a>
        </li>
        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={preim}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Информация о предоставлении особых прав и особого преимущества
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
            href={osobPrava}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Информация о необходимости прохождения поступающими обязательного
            предварительного мед. осмотра
          </a>
        </li>
        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={predostOsobPrav}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Информация о предоставлении особых прав и особого преимущества
          </a>
        </li>
        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={obrazecDogovora}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Образец договора на обучение по образовательным программам среднего
            профессионального образования и высшего образования
          </a>
        </li>
        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={perechVstupIspit}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Перечень вступительных испытаний с указанием по каждому
            вступительному испытанию следующих сведений
          </a>
        </li>{" "}
        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={perechNaptavPodgot}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Перечень направлений подготовки (специальностей), по которым
            осуществляется прием
          </a>
        </li>
        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={poryadokPodach}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Порядок подачи и рассмотрения апелляции по результатам вступительных
            испытаний
          </a>
        </li>
      </ol>
    </>
  );
});
export default HigherEducation;
