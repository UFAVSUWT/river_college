import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName, toggleFontSize } from "../../../../utils/disabled";
const EduStandarts = observer(() => {
  return (
    <div
      style={{ fontSize: toggleFontSize(1) }}
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
        Образовательные стандарты и требования
      </h1>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Федеральные государственные образовательные стандарты среднего
        профессионального образования (ФГОС СПО) III + поколения
      </h3>
      <table>
        <tbody>
          <tr>
            <td>Стандарт образовательной программы</td>
            <td>Дисциплины и модули</td>
          </tr>
          <tr>
            <td>
              <ul>
                <li className="doc__item ">
                  <a
                    itemProp="eduFedDoc"
                    href={"Ustav"}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    ФГОС 26.02.03 Судовождение от 07.05.2014 № 441
                  </a>
                </li>

                <li className="doc__item ">
                  <a
                    itemProp="eduFedDoc"
                    href={"UstavChange1415"}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    ФГОС 26.02.03 Судовождение от 02.12.2020 № 691
                  </a>
                </li>
              </ul>
            </td>
            <td> 26.02.03</td>
          </tr>
          <tr>
            <td>
              <ul>
                <li className="doc__item">
                  <a
                    itemProp="eduFedDoc"
                    href={"Ustav"}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    ФГОС 26.02.05 Эксплуатация судовых энергетических установок
                    от 07.05.2014 № 443
                  </a>
                </li>

                <li className="doc__item">
                  <a
                    itemProp="eduFedDoc"
                    href={"UstavChange1415"}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    ФГОС 26.02.05 Эксплуатация судовых энергетических установок
                    от 26.11.2020 № 674
                  </a>
                </li>
              </ul>
            </td>
            <td> 26.02.05</td>
          </tr>
          <tr>
            <td>
              <ul>
                <li className="doc__item ">
                  <a
                    itemProp="eduFedDoc"
                    href={"Ustav"}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    ФГОС 26.02.06 Эксплуатация судового электрооборудования и
                    средств автоматики от 07.05.2014 № 444
                  </a>
                </li>

                <li className="doc__item ">
                  <a
                    itemProp="eduFedDoc"
                    href={"UstavChange1415"}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    ФГОС 26.02.06 Эксплуатация судового электрооборудования и
                    средств автоматики от 26.11.2020 № 675
                  </a>
                </li>
              </ul>
            </td>
            <td> 26.02.06</td>
          </tr>
          <tr>
            <td>
              <ul>
                <li className="doc__item ">
                  <a
                    itemProp="eduFedDoc"
                    href={"Ustav"}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    ФГОС 23.02.01 Организация перевозок и управление на
                    транспорте (по видам) от 22.04.2014 № 376
                  </a>
                </li>
              </ul>
            </td>
            <td>23.02.01</td>
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
        Образовательные стандарты не разрабатываются и не реализуются.
      </h3>
    </div>
  );
});
export default EduStandarts;
