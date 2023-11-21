import React from "react";
import TableWrapper from "../../../common/tableWrapper/TableWrapper";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import inform_o_chislen from "../../../../assets/pdf/educationPage/inf_o_chisl_ob.pdf";

const InfoOChislenObuch = () => {
  return (
    <>
      <TableWrapper
        title="Информация о численности обучающихся по реализуемым образовательным
        программам за счет бюджетных ассигнований федерального бюджета, бюджетов
        субъектов Российской Федерации, местных бюджетов и по договорам об
        образовании за счет средств физических и (или) юридических лиц на
        01.11.2023:"
      >
        <table>
          <tbody>
            <tr itemProp="eduChislen">
              <td itemProp="eduCode" rowSpan="3">
                Код
              </td>
              <td itemProp="eduName" rowSpan="3">
                Наименование специальности, направления подготовки, шифр и
                наименование научной специальности
              </td>
              <td itemProp="eduLevel" rowSpan="3">
                Уровень образования
              </td>
              <td itemProp="eduForm" rowSpan="3">
                Формы обучения
              </td>
              <td colSpan="8">
                Численность обучающихся за счет (количество человек):
              </td>
              <td itemProp="numberAll" rowSpan="3">
                Общая численность обучающихся
              </td>
            </tr>
            <tr itemProp="eduChislen">
              <td colSpan="2">бюджетных ассигнований федерального бюджета</td>
              <td colSpan="2">бюджетов субъектов Российской Федерации</td>
              <td colSpan="2">местных бюджетов </td>
              <td colSpan="2">средств физических и (или) юридических лиц</td>
            </tr>
            <tr itemProp="eduChislen">
              <td itemProp="numberBF">всего</td>
              <td itemProp="numberBFF">в том числе иностранных граждан</td>
              <td itemProp="numberBR">всего</td>
              <td itemProp="numberBRF">в том числе иностранных граждан</td>
              <td itemProp="numberBM">всего</td>
              <td itemProp="numberBMF">в том числе иностранных граждан</td>
              <td itemProp="numberP">всего</td>
              <td itemProp="numberPF">в том числе иностранных граждан</td>
            </tr>
            <tr itemProp="eduChislen">
              <td itemProp="eduCode">-</td>
              <td itemProp="eduName">-</td>
              <td itemProp="eduLevel">высшее образование - бакалавриат</td>
              <td itemProp="eduForm">-</td>
              <td itemProp="numberBF">-</td>
              <td itemProp="numberBFF">-</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBRF">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberBMF">-</td>
              <td itemProp="numberP">-</td>
              <td itemProp="numberPF">-</td>
              <td itemProp="numberAll">-</td>
            </tr>
            <tr itemProp="eduChislen">
              <td itemProp="eduCode">-</td>
              <td itemProp="eduName">-</td>
              <td itemProp="eduLevel">высшее образование - специалитет</td>
              <td itemProp="eduForm">-</td>
              <td itemProp="numberBF">-</td>
              <td itemProp="numberBFF">-</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBRF">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberBMF">-</td>
              <td itemProp="numberP">-</td>
              <td itemProp="numberPF">-</td>
              <td itemProp="numberAll">-</td>
            </tr>
            <tr itemProp="eduChislen">
              <td itemProp="eduCode">-</td>
              <td itemProp="eduName">-</td>
              <td itemProp="eduLevel">высшее образование - магистратура</td>
              <td itemProp="eduForm">-</td>
              <td itemProp="numberBF">-</td>
              <td itemProp="numberBFF">-</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBRF">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberBMF">-</td>
              <td itemProp="numberP">-</td>
              <td itemProp="numberPF">-</td>
              <td itemProp="numberAll">-</td>
            </tr>
            <tr itemProp="eduChislen">
              <td itemProp="eduCode">-</td>
              <td itemProp="eduName">-</td>
              <td itemProp="eduLevel">
                высшее образование - подготовка кадров высшей квалификации
              </td>
              <td itemProp="eduForm">-</td>
              <td itemProp="numberBF">-</td>
              <td itemProp="numberBFF">-</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBRF">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberBMF">-</td>
              <td itemProp="numberP">-</td>
              <td itemProp="numberPF">-</td>
              <td itemProp="numberAll">-</td>
            </tr>
            <tr itemProp="eduChislen">
              <td itemProp="eduCode" rowSpan="3">
                23.02.01
              </td>
              <td itemProp="eduName" rowSpan="3">
                Организация перевозок и управление на транспорте
              </td>
              <td itemProp="eduLevel" rowSpan="3">
                среднее профессиональное образование
              </td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBF">91</td>
              <td itemProp="numberBFF">-</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBRF">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberBMF">-</td>
              <td itemProp="numberP">5</td>
              <td itemProp="numberPF">-</td>
              <td itemProp="numberAll">96</td>
            </tr>
            <tr itemProp="eduChislen">
              <td itemProp="eduForm">очно-заочная</td>
              <td itemProp="numberBF">-</td>
              <td itemProp="numberBFF">-</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBRF">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberBMF">-</td>
              <td itemProp="numberP">-</td>
              <td itemProp="numberPF">-</td>
              <td itemProp="numberAll">-</td>
            </tr>
            <tr itemProp="eduChislen">
              <td itemProp="eduForm">заочная</td>
              <td itemProp="numberBF">3</td>
              <td itemProp="numberBFF">-</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBRF">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberBMF">-</td>
              <td itemProp="numberP">1</td>
              <td itemProp="numberPF">-</td>
              <td itemProp="numberAll">4</td>
            </tr>
            <tr itemProp="eduChislen">
              <td rowSpan="3">23.02.03</td>
              <td rowSpan="3">Судовождение</td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBF">292</td>
              <td itemProp="numberBFF">-</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBRF">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberBMF">-</td>
              <td itemProp="numberP">9</td>
              <td itemProp="numberPF">-</td>
              <td itemProp="numberAll">301</td>
            </tr>
            <tr itemProp="eduChislen">
              <td itemProp="eduForm">очно-заочная</td>
              <td itemProp="numberBF">-</td>
              <td itemProp="numberBFF">-</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBRF">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberBMF">-</td>
              <td itemProp="numberP">-</td>
              <td itemProp="numberPF">-</td>
              <td itemProp="numberAll">-</td>
            </tr>
            <tr itemProp="eduChislen">
              <td itemProp="eduForm">заочная</td>
              <td itemProp="numberBF">5</td>
              <td itemProp="numberBFF">-</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBRF">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberBMF">-</td>
              <td itemProp="numberP">47</td>
              <td itemProp="numberPF">-</td>
              <td itemProp="numberAll">52</td>
            </tr>
            <tr itemProp="eduChislen">
              <td itemProp="eduCode" rowSpan="3">
                23.02.05
              </td>
              <td itemProp="eduName" rowSpan="3">
                Эксплуатация судовых энергетических установок
              </td>
              <td itemProp="eduLevel" rowSpan="3">
                среднее профессиональное образование
              </td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBF">181</td>
              <td itemProp="numberBFF">-</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBRF">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberBMF">-</td>
              <td itemProp="numberP">4</td>
              <td itemProp="numberPF">-</td>
              <td itemProp="numberAll">185</td>
            </tr>
            <tr itemProp="eduChislen">
              <td itemProp="eduForm">очно-заочная</td>
              <td itemProp="numberBF">-</td>
              <td itemProp="numberBFF">-</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBRF">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberBMF">-</td>
              <td itemProp="numberP">-</td>
              <td itemProp="numberPF">-</td>
              <td itemProp="numberAll">-</td>
            </tr>
            <tr itemProp="eduChislen">
              <td itemProp="eduForm">заочная</td>
              <td itemProp="numberBF">5</td>
              <td itemProp="numberBFF">-</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBRF">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberBMF">-</td>
              <td itemProp="numberP">-</td>
              <td itemProp="numberPF">-</td>
              <td itemProp="numberAll">5</td>
            </tr>
            <tr itemProp="eduChislen">
              <td rowSpan="3">23.02.06</td>
              <td rowSpan="3">
                Эксплуатация судового электрооборудования и средств автоматики
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBF">197</td>
              <td itemProp="numberBFF">-</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBRF">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberBMF">-</td>
              <td itemProp="numberP">-</td>
              <td itemProp="numberPF">-</td>
              <td itemProp="numberAll">197</td>
            </tr>
            <tr itemProp="eduChislen">
              <td itemProp="eduForm">очно-заочная</td>
              <td itemProp="numberBF">-</td>
              <td itemProp="numberBFF">-</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBRF">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberBMF">-</td>
              <td itemProp="numberP">-</td>
              <td itemProp="numberPF">-</td>
              <td itemProp="numberAll">-</td>
            </tr>
            <tr itemProp="eduChislen">
              <td itemProp="eduForm">заочная</td>
              <td itemProp="numberBF">-</td>
              <td itemProp="numberBFF">-</td>
              <td itemProp="numberBR">-</td>
              <td itemProp="numberBRF">-</td>
              <td itemProp="numberBM">-</td>
              <td itemProp="numberBMF">-</td>
              <td itemProp="numberP">-</td>
              <td itemProp="numberPF">-</td>
              <td itemProp="numberAll">-</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
      <ul>
        <li>
          <PDF height={"25px"} width={"25px"} />
          <a
            itemProp="eduChislenEl"
            href={inform_o_chislen}
            target={"_blank"}
            rel="noreferrer"
          >
            Информация о численности обучающихся по реализуемым образовательным
            программам за счет бюджетных ассигнований федерального бюджета,
            бюджетов субъектов Российской Федерации, местных бюджетов и по
            договорам об образовании за счет средств физических и (или)
            юридических лиц на 01.11.2023
          </a>
        </li>
      </ul>
    </>
  );
};
export default InfoOChislenObuch;
