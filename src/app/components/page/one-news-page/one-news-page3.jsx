import React from "react";

import { toggleClassName, toggleFontSize } from "../../../utils/disabled";
import Image from "../../common/image/Image";
import sport from "../../../assets/img/newsimg/sport.jpg";

const OneNewsPage3 = (link) => {
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
        <h1> «Лыжня России — 2024»!</h1>
        <div className="image-news">
          <Image src={sport} alt="Фото уплыло:(" width={"100%"} />
        </div>
        <div className="text-content">
          <p>
            Курсанты нашего филиала стали абсолютными фаворитами в своей
            возрастной категории лыжной гонки районного этапа Всероссийского
            массового забега по лыжной гонке — «Лыжня России — 2024»!
          </p>
          <p>
            В личном зачёте 1,2,3 места заняли, соответственно Шафиков Булат
            курсант 253 СВ, Султанов Евгений курсант 133 ЭМ, Гайнуллин Айнур
            курсант 231 ЭМ. В гонке приняли участие курсанты и сотрудники
            филиала.
          </p>
        </div>
      </div>
    </>
  );
};
export default OneNewsPage3;
