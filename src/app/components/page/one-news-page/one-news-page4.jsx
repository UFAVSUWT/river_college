import React from "react";

import { toggleClassName, toggleFontSize } from "../../../utils/disabled";
import Image from "../../common/image/Image";

import scien from "../../../assets/img/newsimg/1.jpeg";
const OneNewsPage4 = (link) => {
  return (
    <>
      <div
        style={{ fontSize: toggleFontSize(18) }}
        className={`one-news-page_container _container${toggleClassName(
          " ",
          "",
          "",
          ""
        )}`}
      >
        <h1>Формула профессионального успеха</h1>
        <div className="image-news">
          <Image src={scien} alt="Фото уплыло:(" width={"100%"} />
        </div>
        <div className="text-content">
          <p>
            ЦМК специальных электротехнических, судомеханических и
            общепрофессиональных дисциплин активно занимаются исследовательской
            работой курсантов. Руководит этой работой председатель ЦМК,
            преподаватель высшей категории Зкриева Г.Р. В этом учебном году
            достигнуты значительные результаты. Курсант 231 ЭМ группы Сафин
            Алексей занял 2 место во Всероссийском конкурсе студенческих
            проектов «Формула профессионального успеха» со своим проектом о
            светодиодных лампах в номинации «Лучший исследовательский проект».
            Курсант группы 426ЭМ Корнилов Антон занял 2 место в Региональной
            научно-практической конференции «Моя профессия - энергетик».
          </p>
          <p>Поздравляем ребят с заслуженной победой в испытаниях!</p>
          <p>
            Желаем не останавливаться на достигнутом, всегда двигаться вперед,
            покорять любые вершины.
          </p>
        </div>
      </div>
    </>
  );
};
export default OneNewsPage4;