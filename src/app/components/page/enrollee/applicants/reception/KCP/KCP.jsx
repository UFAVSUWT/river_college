import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../../../utils/disabled";
import TableWrapper from "../../../../../common/tableWrapper/TableWrapper";
import { ReactComponent as PDF } from "../../../../../../assets/svg/office/pdf.svg";
import kcp from "../../../../../../assets/pdf/enrolle/План приема на 2024-2025 уч.г.pdf";

const KCP = observer(() => {
  return (
    <section className="flex jcc">
      <div
        className={toggleClassName(
          "common__container",
          "common__container-white",
          "common__container-black",
          "common__container-contrast"
        )}
      >
        <h1>КЦП СПО на 2024/2025 учeбный год</h1>

        <li>
          <PDF width={"25px"} height={"25px"} />{" "}
          <a
            href={kcp}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            План приема на 2024-2025 учебный год
          </a>
        </li>

        <TableWrapper>
          <table>
            <tbody>
              <tr>
                <td colSpan="10">
                  Контрольные цифры приема для приема в Уфимский филиал
                  Федерального государственного бюджетного образовательного
                  учреждения высшего образования "Волжский государственный
                  университет водного транспорта" в 2024/2025 учебном году
                </td>
              </tr>
              <tr>
                <td rowSpan="4">Коды</td>
                <td rowSpan="4">
                  Наименование направлений подготовки и специальностей
                </td>
                <td colSpan="8">Уфимский филиал ФГБОУ ВО "ВГУВТ"</td>
              </tr>
              <tr>
                <td colSpan="5">Очная форма обучения</td>
                <td colSpan="3">Заочная/ очно-заочная форма обучения</td>
              </tr>
              <tr>
                <td rowSpan="2">Всего</td>
                <td colSpan="2">на базе 9-и классов</td>
                <td colSpan="2">на базе 11- и классов</td>
                <td rowSpan="2">Всего</td>
                <td colSpan="2">На базе 9/11 классов</td>
              </tr>
              <tr>
                <td>б</td>
                <td>д</td>
                <td>б</td>
                <td>д</td>
                <td>б</td>
                <td>д</td>
              </tr>
              <tr>
                <td colSpan="2">Всего:</td>
                <td rowSpan="2">190</td>
                <td rowSpan="2">175</td>
                <td rowSpan="2">15</td>
                <td rowSpan="2"></td>
                <td rowSpan="2"></td>
                <td rowSpan="2">30</td>
                <td rowSpan="2"></td>
                <td rowSpan="2">30</td>
              </tr>
              <tr>
                <td colSpan="2">В том числе:</td>
              </tr>

              <tr>
                <td>26.02.03</td>
                <td>Судовождение (углубленная подготовка)</td>
                <td>80</td>
                <td>75</td>
                <td>5</td>
                <td></td>
                <td></td>
                <td>30</td>
                <td></td>
                <td>30</td>
              </tr>
              <tr>
                <td>26.02.05</td>
                <td>Эксплуатация судовых энергетических установок</td>
                <td>55</td>
                <td>50</td>
                <td>5</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>26.02.06</td>
                <td>
                  Эксплуатация судового электрооборудования и средств автоматики
                </td>
                <td>55</td>
                <td>50</td>
                <td>5</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </TableWrapper>
      </div>
    </section>
  );
});
export default KCP;
