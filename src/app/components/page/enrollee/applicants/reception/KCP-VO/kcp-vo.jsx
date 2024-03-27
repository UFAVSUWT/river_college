import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../../../utils/disabled";
import TableWrapper from "../../../../../common/tableWrapper/TableWrapper";
import { ReactComponent as PDF } from "../../../../../../assets/svg/office/pdf.svg";
import kcp from "../../../../../../assets/pdf/enrolle/План приема на 2024-2025 уч.г.pdf";

const KcpVo = observer(() => {
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
          {" "}
          План приема в Уфимский филиал ФГБОУ ВО "ВГУВТ" по программе высшего
          образования специалитет на 2024-2025 учебный год (без учета квот)
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
            План приема в Уфимский филиал ФГБОУ ВО "ВГУВТ" по программе высшего
            образования специалитет на 2024-2025 учебный год (без учета квот)
          </a>
        </li>
        <TableWrapper>
          <table>
            <tbody>
              <tr>
                <td>№</td>
                <td>Шифр</td>
                <td>Специальность</td>
                <td>Всего</td>
                <td>Форма обучения</td>
                <td>За счет средств федерального бюджета</td>
                <td>На основании договоров</td>
              </tr>
              <tr>
                <td>1</td>
                <td>26.05.06</td>
                <td>Эксплуатация судовых энергетических установок</td>
                <td>40</td>
                <td>Заочно</td>
                <td>10</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
        </TableWrapper>
      </div>
    </section>
  );
});
export default KcpVo;
