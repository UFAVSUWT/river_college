import React from "react";
import PractZaochn from "../../../../../assets/pdf/practice/grafik_praktik_2023_zaoch.pdf";
import PractOchn from "../../../../../assets/pdf/practice/grafik_praktik_2023_ochn.pdf";
import { toggleClassName } from "../../../../../utils/disabled";
import { observer } from "mobx-react-lite";
const ShedulePractice = observer(() => {
  return (
    <>
      <section>
        <h1>
          График проведения учебных, производственных и преддипломных практик
          очного обучения СПО в 2022-2023 учебном году
        </h1>

        <p>
          {" "}
          <a
            href={PractOchn}
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            График практики (очники)
          </a>
        </p>
      </section>
      <section>
        <h1>
          График проведения учебных, производственных и преддипломных практик
          заочного обучения СПО в 2022-2023 учебном году
        </h1>
        <p>
          <a
            href={PractZaochn}
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            График практики (заочники)
          </a>
        </p>
      </section>
    </>
  );
});
export default ShedulePractice;
