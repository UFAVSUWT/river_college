import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
const Budget = observer(() => {
  return (
    <div
      className={toggleClassName(
        "common__container",
        "common__container-white",
        "common__container-black",
        "common__container-contrast"
      )}
    >
      <h1
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Финансово-хозяйственная деятельность
      </h1>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Сведения об объеме образовательной деятельности за 2021 год
      </h3>
      <table className="">
        <tbody>
          <tr>
            <td colSpan="2">
              Объем образовательной деятельности, финансовое обеспечение которой
              осуществляется
            </td>
          </tr>
          <tr>
            <td>
              за счет бюджетных ассигнований федерального бюджета (тыс. руб.){" "}
            </td>
            <td itemProp="finBFVolume">47846 </td>
          </tr>
          <tr>
            <td>за счет субъектов Российской Федерации (тыс. руб.) </td>
            <td itemProp="finBRVolume">-</td>
          </tr>
          <tr>
            <td>за счет местных бюджетов (тыс. руб.) </td>
            <td itemProp="finBMVolume">-</td>
          </tr>
          <tr>
            <td>
              по договорам об образовании за счет средств физических и (или)
              юридических лиц (тыс. руб.)
            </td>
            <td itemProp="finPVolume">10539</td>
          </tr>
        </tbody>
      </table>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Сведения о поступлении финансовых и материальных средств и об их
        расходовании
      </h3>
      <table>
        <tbody itemProp="volume">
          <tr itemProp="finYear">
            <td>Год</td>
            <td>2021</td>
          </tr>
          <tr itemProp="finPost">
            <td>Поступившие финансовые и материальные средства </td>
            <td>103067,2</td>
          </tr>
          <tr itemProp="finRas">
            <td>Расходованные финансовые и материальные средства</td>
            <td>95209,6</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li className="doc__item">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Страница Уфимского филиала ФГБОУ ВО "ВГУВТ" на сайте bus.gov.ru
            (официальный сайт для размещения информации о государственных
            (муниципальных) учреждениях)
          </a>
        </li>

        <li className="doc__item">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Информация о поступлении финансовых и материальных средств и об их
            расходовании по итогам финансового года, 2021
          </a>
        </li>

        <li className="doc__item">
          <a
            itemProp="finPlanDocLink"
            href={"Ustav"}
            target={"_blank"}
            rel="noreferrer"
          >
            План ФХД на 2022 год
          </a>
        </li>
      </ul>
      <div>
        <p>
          Объем средств федерального бюджета, направленных в 2021 году на
          организацию культурно-массовой, физкультурной и спортивной,
          оздоровительной работы с обучающимися за 2021 год - 1663,5 тыс. руб.
        </p>
        <p>
          Объем средств, полученных образовательной организацией по договорам об
          оказании платных образовательных услуг, направленных в 2021 году на
          организацию культурно-массовой, физкультурной и спортивной,
          оздоровительной работы с обучающимися за 2021 год - 85,4 тыс. руб.
        </p>
        <p>
          Уфимским филиалом ФГБОУ ВО «ВГУВТ» запланировано расходование средств
          в 2022 году на организацию культурно - массовой, физкультурной и
          спортивной, оздоровительной работы с обучающимися в размере 861,3 тыс.
          руб., в т.ч. за счет средств федерального бюджета – 695,4 тыс. руб.,
          за счет средств полученных по договорам об оказании платных
          образовательных услуг – 165,9 тыс. руб.
        </p>
      </div>
    </div>
  );
});
export default Budget;
