import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
import { observer } from "mobx-react-lite";
import { ReactComponent as WORD } from "../../../../assets/svg/office/word.svg";
import perech from "../../../../assets/doc/training/Перечень дополнительных общеразвивающих программ .docx";
import TableWrapper from "../../../common/tableWrapper/TableWrapper";

const ObsherazvivaushieProgrammi = observer(() => {
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
          Программы дополнительного образование детей и взрослых
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
              Программы дополнительного образование детей и взрослых
            </a>
          </li>
        </ul>
        <TableWrapper title="Общеразвивающие программы">
          <table>
            <tbody>
              <tr>
                <td>№п/п</td>
                <td>Наименование программы</td>
                <td>Количество часов</td>
                <td>Стоимость руб./чел.</td>
                <td>Минимальное количество слушателей</td>
                <td>Количество дней</td>
                <td>Форма обучения</td>
                <td>Записаться на курсы</td>
              </tr>
              <tr>
                <td>1.</td>
                <td>
                  Дополнительная общеразвивающая программа «Английский язык»
                </td>
                <td>72</td>
                <td>4000</td>
                <td>18</td>
                <td>36</td>
                <td>
                  - очная, или смешанная с использованием дистанционных
                  образовательных технологий и электронного обучения
                </td>
                <td>
                  Тел.: 8 (347) 278-28-86 Отдел конвенционной подготовки и
                  дополнительного образования okpdo@uf-vsuwt.ru ул.Ахметова, 275
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Дополнительная общеразвивающая программа «Математика»</td>
                <td>72</td>
                <td>4900</td>
                <td>15</td>
                <td>36</td>
                <td>
                  - очная, или смешанная с использованием дистанционных
                  образовательных технологий и электронного обучения
                </td>
                <td>
                  Тел.: 8 (347) 278-28-86 Отдел конвенционной подготовки и
                  дополнительного образования okpdo@uf-vsuwt.ru ул.Ахметова, 275
                </td>
              </tr>
            </tbody>
          </table>
        </TableWrapper>
      </section>
    </div>
  );
});
export default ObsherazvivaushieProgrammi;
