import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toggleClassName, toggleFontSize } from "../../../utils/disabled";
import Image from "../../common/image/Image";
import gord from "../../../assets/img/newsimg/gord.jpg";

const OneNewsPage1 = (link) => {
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
        <h1>
          {" "}
          Курсант Минигулов Юнир - стипендиат Главы Республики Башкортостан
        </h1>
        <div className="image-news">
          <Image src={gord} alt="Фото уплыло:(" width={"100%"} />
        </div>
        <div className="text-content">
          <p>
            Знакомьтесь, курсант Минигулов Юнир - стипендиат Главы Республики
            Башкортостан. Юнир обучатся на 4 курсе по специальности
            «Судовождение», в недалеком будущем мечтает стать капитаном, а в
            настоящем, является «круглым отличником», активистом студенческого
            самоуправления, выступает в составе агитбригады. А еще Юнир
            замечательно поет и удостоен звания лауреата на всероссийских и
            региональных конкурсах вокалистов.
          </p>
          <p>
            Поздравляем Юнира с заслуженной наградой! Именной стипендией
            удостаиваются отличники, активисты, победители олимпиад и конкурсов,
            лучшие студенты образовательных учреждений республики.
          </p>
        </div>
      </div>
    </>
  );
};
export default OneNewsPage1;
