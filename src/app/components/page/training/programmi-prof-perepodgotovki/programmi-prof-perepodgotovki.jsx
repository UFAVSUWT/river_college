import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
import { observer } from "mobx-react-lite";
import { ReactComponent as WORD } from "../../../../assets/svg/office/word.svg";
import perech from "../../../../assets/doc/training/Перечень программ профессиональной переподготовки .docx";

const ProgrammiProfPerepodgotovki = observer(() => {
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
          Программы повышения квалификации и профессиональной переподготовки
        </h1>
        <ul>
          <li>
            <a
              href={perech}
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
              target={"_blank"}
              rel="noreferrer"
            >
              <WORD width={"25px"} height={"25px"} />
            </a>{" "}
            <a
              href={perech}
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
              target={"_blank"}
              rel="noreferrer"
            >
              Программы повышения квалификации и профессиональной переподготовки
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
});
export default ProgrammiProfPerepodgotovki;
