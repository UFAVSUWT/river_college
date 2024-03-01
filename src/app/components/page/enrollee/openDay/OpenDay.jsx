import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
const OpenDay = observer(() => {
  return (
    <section
      className={toggleClassName(
        "education__container",
        "education__container-white",
        "education__container-black",
        "education__container-contrast"
      )}
    >
      <div
        className={` ${toggleClassName(
          "min-height",
          "min-height-white",
          "min-height-black",
          "min-height-contrast"
        )}`}
      >
        <h1 className="education__container-title">Вниманию абитуриентов!</h1>
        <div className="education__container-content">
          <p>
            Уфимский филиал ФГБОУ ВО «ВГУВТ» 14 марта 2024 года в 14.30 часов
            проводит День открытых дверей. Приглашаем всех желающих.
          </p>
          <p>
            Наш адрес: <strong>г.Уфа, Затон, ул. Ахметова, 275.</strong>
          </p>
          <p>
            Проезд автобусами №№ 30,30 К, 107, 108, 112, марш. такси 248, 391 до
            ост. «Речное училище».
          </p>
          <p>
            Тел.: <strong>8 (347) 215-14-00 доп. (301, 302).</strong>
          </p>
        </div>
      </div>
    </section>
  );
});
export default OpenDay;
