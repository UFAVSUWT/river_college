import { observer } from "mobx-react-lite";
import React from "react";
import Priem2023 from "../../../../../assets/pdf/applicant/priem2023_v_el_forme.pdf";
import InfoMedOsmotr from "../../../../../assets/pdf/applicant/infoMedOsmotr.pdf";
import Trebov from "../../../../../assets/doc/applicant/trebov_urov_obr.docx";
import PerechenSpec from "../../../../../assets/pdf/applicant/priem2023_special_SPO.pdf";
import { toggleClassName } from "../../../../../utils/disabled";
import { NavLink } from "react-router-dom";
import zayavlenie from "../../../../../assets/doc/enrollee/zayavlenie_na_postuplenie.doc";
import { ReactComponent as DOC } from "../../../../../assets/svg/office/word.svg";
const ApplicantsInfo = observer(() => {
  return (
    <section>
      <h1>Узнать, как стать нашим курсантом</h1>
      <ol>
        <li>
          Прием документов для поступления на обучение по основным образова-
          тельным программам СПО:
          <ul>
            <li>
              На первый курс начинается 20 июня и продлится предварительно по 15
              августа 2023 года
            </li>
          </ul>
        </li>
        <li>
          Для подачи документов необходимо предоставить:
          <ul>
            <li>
              Оригинал/копию документа об образовании государственного образца
              (аттестат);
            </li>
            <li>
              Копия документа, удостоверяющего личность (паспорт 1 стр. и
              прописка);
            </li>
            <li>Фотографии 3*4 см – 4 штуки;</li>
            <li>
              Справка 086/У и прививочный паспорт;(медицинская справка
              действует, если она получена не позднее, чем за год до завершения
              приема документов);
            </li>
            <li>
              Справка о группе здоровья, если нет отметки в справке 086/У;
            </li>
            <li>СНИЛС;</li>
            <li>Медицинский полис;</li>
            <b>Зачисление осуществляется только при наличии:</b>
            <ul>
              <li>Оригинала документа об образовании (с приложением);</li>
              <li>Согласия на зачисление;</li>
              <li>Полного комплекта документов.</li>
            </ul>
          </ul>
        </li>
        <li>
          Прием в филиал осуществляется на конкурсной основе по среднему баллу
          аттестата!
        </li>
        <p>
          Средний балл аттестата исчисляется путем сложения всех оценок по
          предметам в аттестате и деления на их количество (учитывается 4 цифры
          после запятой, без округления).
        </p>
        <li>
          Заявление для поступления в Уфимский филиал ФГБОУ ВО «ВГУВТ» можно
          подать:
          <ol>
            <li>
              В приёмной комиссии Уфимского филиала ФГБОУ ВО «ВГУВТ» (г.Уфа,ул.
              Ахметова, д.275, каб. 5);
            </li>
            <li>По почте (все почтовые операторы);</li>
            <li>
              По электронной почте{" "}
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
          </ol>
        </li>
      </ol>
      <p>
        {" "}
        (заявление предварительно необходимо{" "}
        <a
          href={zayavlenie}
          className={toggleClassName(
            "education__link",
            "education__link-white",
            "education__link-black",
            "education__link-contrast"
          )}
        >
          <DOC width={"25px"} height={"25px"} />
        </a>{" "}
        <a
          href={zayavlenie}
          className={toggleClassName(
            "education__link",
            "education__link-white",
            "education__link-black",
            "education__link-contrast"
          )}
        >
          скачать
        </a>{" "}
        и заполнить)
      </p>
      {/*  <ul>
        <li>
          <a
            href={Priem2023}
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Информация о возможности приема заявлений и необходимых документов,
            предусмотренных настоящими Правилами, в электронной форме
          </a>
        </li>
        <li>
          <a
            href={InfoMedOsmotr}
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Информация о необходимости прохождения поступающими обязательного
            предварительного медицинского осмотра
          </a>
        </li>
        <li>
          <a
            href={Trebov}
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Требование уровня обр. СПО 2023
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
            Число мест в общежитии для иногородних абитуриентов, поступающих на
            1 курс очной формы
          </NavLink>
        </li>
        <li>
          <a
            href={PerechenSpec}
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Перечень специальностей СПО, по которым университет объявляет прием
            в соответствии с лицензией на осуществление образовательной
            деятельности
          </a>
        </li>
      </ul> */}
    </section>
  );
});
export default ApplicantsInfo;
