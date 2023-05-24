import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../../utils/disabled";
const Links = observer(() => {
  return (
    <>
      <h1>Полезные ссылки</h1>
      <section>
        <h2>Организации</h2>
        <ul>
          <li>
            <a
              href="https://mintrans.gov.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Министерство транспорта Российской Федерации
            </a>
          </li>
          <li>
            <a
              href="https://morflot.gov.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Федеральное агентство морского и речного транспорта
            </a>
          </li>
          <li>
            <a
              href="https://www.pasp.ru/bolshoy_port_sankt-peterburg1"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Морской порт «Большой порт Санкт-Петербург»
            </a>
          </li>
          <li>
            <a
              href="http://xn--80adbch2buek4ak3i.xn--p1ai/"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Администрация Камского бассейна внутренних водных путей
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Социальные сообщества, форумы</h2>
        <ul>
          <li>
            <a href="vk.com/vsuwt" target="_blank" rel="noopener noreferrer">
              ВГУВТ
            </a>
          </li>
          <li>
            <a
              href="http://www.morehod.ru"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Мореход
            </a>
          </li>
          <li>
            <a
              href="https://vk.com/vgavtufa"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Практика. Уфимский филиал "ВГУВТ"
            </a>
          </li>
          <li>
            <a
              href="https://vk.com/typical_riverman"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Типичный речник [ТР]
            </a>
          </li>
          <li>
            <a
              href="https://vk.com/rekamore_su"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Работа в море / Работа на реке
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Документы</h2>
        <ul>
          <li>
            <a
              href="http://www.consultant.ru/document/cons_doc_LAW_130855/"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Приказ Минтранса России от 15.03.2012 N 62 (ред. от 13.05.2015)
              "Об утверждении Положения о дипломировании членов экипажей морских
              судов"
            </a>
          </li>
          <li>
            <a
              href="http://www.consultant.ru/document/cons_doc_LAW_297185/"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Приказ Минтранса России от 12.03.2018 N 87 "Об утверждении
              Положения о дипломировании членов экипажей судов внутреннего
              водного транспорта"
            </a>
          </li>
          <li>
            <a
              href="https://vsuwt.ru/obrazovanie/tsentr-sodeystviya-trudoustroystvu-vypusknikov/files/dokumenty/%d0%9f%d1%80%d0%b8%d0%ba%d0%b0%d0%b7%20%d0%9c%d0%b8%d0%bd%d0%be%d0%b1%d1%80%d0%bd%d0%b0%d1%83%d0%ba%d0%b8%20%d0%a0%d0%a4%20N%20885,%20%d0%9c%d0%b8%d0%bd%d0%bf%d1%80%d0%be%d1%81%d0%b2%d0%b5%d1%89%d0%b5%d0%bd%d0%b8%d1%8f%20%d0%a0%d0%a4%20N%20390%20%d0%be%d1%82%2005.08.2020.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Приказ Минобрнауки РФ N 885, Минпросвещения РФ N 390 от 05.08.2020
              о практической подготовке обучающихся
            </a>
          </li>
          <li>
            <a
              href="https://vsuwt.ru/obrazovanie/tsentr-sodeystviya-trudoustroystvu-vypusknikov/files/dokumenty/%d0%9f%d0%b8%d1%81%d1%8c%d0%bc%d0%be%20%d0%be%20%d0%bf%d1%80%d0%b0%d0%b2%d0%be%d0%b2%d0%be%d0%bc%20%d1%80%d0%b5%d0%b3%d1%83%d0%bb%d0%b8%d1%80%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b8%20%d0%9f%d0%9f%d0%9e%20%d0%be%d1%82%2030.10.2020.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Письмо Минобрнауки России от 30.10.2020 № МН-5/20730 "О
              направлении вопросов-ответов"
            </a>
          </li>
        </ul>
      </section>
    </>
  );
});
export default Links;
