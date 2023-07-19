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
      <div className={` ${toggleClassName("min-height", "min-height-white","min-height-black","min-height-contrast",)}`}>
        <h1 className="education__container-title">Вниманию абитуриентов!</h1>
        <div className="education__container-content">
          <p>
            Уфимский филиал ФГБОУ ВО «ВГУВТ» 20 апреля 2023 года в 14.30 часов
            проводит «День открытых дверей». Приглашаем всех желающих.
          </p>
          <p>Наш адрес: г.Уфа, Затон, ул. Ахметова, 275.</p>
          <p>
            Проезд автобусами № 30, 30 К, марш. такси 248, 391 до ост. «Речное
            училище».
          </p>
          <p>Тел.: 278-28-86, 278-28-83.</p>
        </div>
      </div>
    </section>
  );
});
export default OpenDay;
