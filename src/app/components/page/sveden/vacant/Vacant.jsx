import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName, toggleFontSize } from "../../../../utils/disabled";
import TableWrapper from "../../../common/tableWrapper/TableWrapper";
const Vacant = observer(() => {
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
        Образование
      </h1>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о количестве вакантных мест для приема (перевода) на
        01.10.2022г.
      </h3>
      <TableWrapper>
        <table>
          <tbody>
            <tr>
              <td rowSpan="2">Код</td>
              <td rowSpan="2">
                Наименование профессии, специальности, направления подготовки
              </td>
              <td rowSpan="2">Уровень образования</td>
              <td rowSpan="2">Курс</td>
              <td rowSpan="2">Форма обучения</td>
              <td colSpan="4">
                Количество вакантных мест для приема (перевода) на места,
                финансируемые за счет
              </td>
            </tr>
            <tr>
              <td> бюджетных ассигнований федерального бюджета</td>
              <td> бюджетов субъектов Российской Федерации</td>
              <td> местных бюджетов</td>
              <td>
                по договорам об образовании за счет средств физических и (или)
                юридических лиц
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>Высшее, бакалавриат</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>Высшее, специалитет</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>Высшее, магистратура</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>Высшее, аспирантура</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260203</td>
              <td itemProp="eduName">Судовождение, 9 класс</td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">1</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBFVacant">-</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">3</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260203</td>
              <td itemProp="eduName">Судовождение, 9 класс</td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">2</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBFVacant">8</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">-</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260203</td>
              <td itemProp="eduName">Судовождение, 9 класс</td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">3</td>
              <td itemProp="eduForm">очная </td>
              <td itemProp="numberBFVacant">2</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">3</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260203</td>
              <td itemProp="eduName">Судовождение, 9 класс</td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">4</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBFVacant">4</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">6</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260203</td>
              <td itemProp="eduName">Судовождение, 9 класс</td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">5</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBFVacant">5</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">-</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260203</td>
              <td itemProp="eduName">Судовождение, 9 класс</td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">5</td>
              <td itemProp="eduForm">заочная</td>
              <td itemProp="numberBFVacant">-</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">16</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260203</td>
              <td itemProp="eduName">Судовождение, 9 класс</td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">6</td>
              <td itemProp="eduForm">заочная</td>
              <td itemProp="numberBFVacant">-</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">14</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260203</td>
              <td itemProp="eduName">Судовождение, 11 класс</td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">1</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBFVacant">9</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">-</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260203</td>
              <td itemProp="eduName">Судовождение, 11 класс</td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">2</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBFVacant">4</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">-</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260203</td>
              <td itemProp="eduName">Судовождение, 11 класс</td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">3</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBFVacant">3</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">-</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260203</td>
              <td itemProp="eduName">Судовождение, 11 класс</td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">4</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBRVacant">8</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">-</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260203</td>
              <td itemProp="eduName">Судовождение, 11 класс</td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">4</td>
              <td itemProp="eduForm">заочная</td>
              <td itemProp="numberBFVacant">20</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">-</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260205</td>
              <td itemProp="eduName">
                Эксплуатация судовых энергетических установок, 9класс
              </td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">1</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBFVacant">-</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">4</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260205</td>
              <td itemProp="eduName">
                Эксплуатация судовых энергетических установок, 9класс
              </td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">2</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBFVacant">8</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">1</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260205</td>
              <td itemProp="eduName">
                Эксплуатация судовых энергетических установок, 9класс
              </td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">4</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBFVacant">5</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">-</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260205</td>
              <td itemProp="eduName">
                Эксплуатация судовых энергетических установок, 11 класс
              </td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">3</td>
              <td itemProp="eduForm">заочная</td>
              <td itemProp="numberBFVacant">-</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">23</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260205</td>
              <td itemProp="eduName">
                Эксплуатация судовых энергетических установок, 11 класс
              </td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">4</td>
              <td itemProp="eduForm">заочная</td>
              <td itemProp="numberBFVacant">-</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">12</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260206</td>
              <td itemProp="eduName">
                Эксплуатация судового электрооборудования и средств автоматики
              </td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">1</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBFVacant">2</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">5</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260206</td>
              <td itemProp="eduName">
                Эксплуатация судового электрооборудования и средств автоматики
              </td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">3</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBFVacant">-</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">1</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">260206</td>
              <td itemProp="eduName">
                Эксплуатация судового электрооборудования и средств автоматики
              </td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">4</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBFVacant">9</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">-</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">230201</td>
              <td itemProp="eduName">
                Организация перевозок и управление на транспорте (по видам)
              </td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">1</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBFVacant">-</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">2</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">230201</td>
              <td itemProp="eduName">
                Организация перевозок и управление на транспорте (по видам)
              </td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">2</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBFVacant">2</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">-</td>
            </tr>
            <tr itemProp="vacant">
              <td itemProp="eduCode">230201</td>
              <td itemProp="eduName">
                Организация перевозок и управление на транспорте (по видам)
              </td>
              <td itemProp="eduLevel">
                Подготовка специалистов среднего звена
              </td>
              <td itemProp="eduCourse">3</td>
              <td itemProp="eduForm">очная</td>
              <td itemProp="numberBFVacant">-</td>
              <td itemProp="numberBRVacant">-</td>
              <td itemProp="numberBMVacant">-</td>
              <td itemProp="numberPVacant">3</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
    </div>
  );
});
export default Vacant;
