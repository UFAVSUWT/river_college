import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
import perech from "../../../../assets/doc/training/Перечень программ повышения квалификации .docx";

import PreiskurantCen from "../../../../assets/pdf/training/PreiskurantCen.pdf";
import Dogovor from "../../../../assets/pdf/documentPage/Dogovor_platn_obraz_uslug_2021.pdf";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import { ReactComponent as DOC } from "../../../../assets/svg/office/word.svg";
import { NavLink } from "react-router-dom";
const AdvancedTraining = observer(() => {
  return (
    <div
      className={toggleClassName(
        "education__container",
        "education__container-white",
        "education__container-black",
        "education__container-contrast"
      )}
    >
      <section className="education__container-content">
        <h1 className="education__container-title">
          Программы повышения квалификации членов экипажей судов внутреннего
          водного транспорта
        </h1>

        <ul>
          <li>
            <a href={perech} target={"_blank"} rel="noreferrer">
              <DOC width={"25px"} height={"25px"} />
            </a>{" "}
            <a href={perech} target={"_blank"} rel="noreferrer">
              Программы повышения квалификации
            </a>
          </li>
          <li>
            <a href={PreiskurantCen} target={"_blank"} rel="noreferrer">
              <PDF width={"25px"} height={"25px"} />
            </a>{" "}
            <a href={PreiskurantCen} target={"_blank"} rel="noreferrer">
              Прейскурант цен на дополнительные образовательные услуги
            </a>
          </li>
          <li>
            <a href={Dogovor} target={"_blank"} rel="noreferrer">
              <PDF width={"25px"} height={"25px"} />
            </a>{" "}
            <a href={Dogovor} target={"_blank"} rel="noreferrer">
              Образец договора об оказании платных образовательных услуг
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
});
export default AdvancedTraining;
