import { observer } from "mobx-react-lite";
import React from "react";

import { toggleClassName } from "../../../../utils/disabled";
import Ustav from "../../../../assets/pdf/documentPage/Ustav_2017.pdf";
import Licenz from "../../../../assets/pdf/documentPage/licenz_vip20220916.pdf";
import Akkr from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019.pdf";
import PolozObObuch from "../../../../assets/pdf/training/polozObObuch.PDF";
import PolozObPlatn from "../../../../assets/pdf/training/polozObPlatn.pdf";
import ObrazecDiplomaOProfPerepodg from "../../../../assets/pdf/training/obrazecDiplomaOProfPerepodg.pdf";
import ObrazecDiplomaOProfPodg from "../../../../assets/pdf/training/obrazecDiplomaOProfPodg.pdf";
import ObrazecProfRab from "../../../../assets/pdf/training/obrazecProfRab.pdf";
import TrenazPodg from "../../../../assets/pdf/training/trenazPodg.pdf";
import PovKval from "../../../../assets/pdf/training/povKval.pdf";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";

const Contacts = observer(() => {
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
          Центр конвенционной подготовки и дополнительного образования
        </h1>
        <p>Наш адрес: 450017 г. Уфа, ул. Ахметова , д.275, ком. 7</p>
        <p>Контакты:</p>
        <ul>
          {" "}
          <ul>
            <li>
              <a
                href="tel:+7 (347) 2151400"
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
                target={"_blank"}
                rel="noreferrer"
              >
                +7 (347) 215-14-00 доб. 3
              </a>
            </li>
            <li>
              {" "}
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
                okpdo@uf-vsuwt.ru
              </a>
            </li>
          </ul>
        </ul>
      </section>
    </div>
  );
});
export default Contacts;
