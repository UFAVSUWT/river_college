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
        <h1>
          План приема в Уфимский филиал ФГБОУ ВО "ВГУВТ" по программе среднего
          профессионального образования подготовки специалистов среднего звена
          на 2024-2025 уч. год
        </h1>

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
            План приема в Уфимский филиал ФГБОУ ВО "ВГУВТ" по программе среднего
            профессионального образования подготовки специалистов среднего звена
            на 2024-2025 уч. год
          </a>
        </li>

        <TableWrapper>
          <table className="iksweb">
            <tbody>
              <tr>
                <td rowSpan="3">№</td>
                <td rowSpan="3">Шифр</td>
                <td rowSpan="3">Специальность</td>
                <td rowSpan="3">Всего</td>
                <td colSpan="2">
                  За счет средств федерального бюджета на базе 9 кл.
                </td>
                <td colSpan="3">На основании договоров</td>
              </tr>
              <tr>
                <td rowSpan="2">очно</td>
                <td rowSpan="2">заочно</td>
                <td rowSpan="2">Очно на базе 9 кл.</td>
                <td colSpan="2">заочно</td>
              </tr>
              <tr>
                <td>на базе 9 кл.</td>
                <td>на базе 11 кл.</td>
              </tr>
              <tr>
                <td>1</td>
                <td>26.02.03</td>
                <td>Судовождение</td>
                <td>120</td>
                <td>75</td>
                <td>-</td>
                <td>5</td>
                <td>30</td>
                <td>10</td>
              </tr>
              <tr>
                <td>2</td>
                <td>26.02.05</td>
                <td>Эксплуатация судовых энергетических установок</td>
                <td>55</td>
                <td>50</td>
                <td>-</td>
                <td>5</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>3</td>
                <td>26.02.06</td>
                <td>
                  Эксплуатация судового электрооборудования и средств автоматики
                </td>
                <td>50</td>
                <td>50</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Итоги:</td>
                <td>225</td>
                <td>175</td>
                <td>-</td>
                <td>10</td>
                <td>30</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </TableWrapper>
      </div>
    </section>
  );
});
export default KCP;
