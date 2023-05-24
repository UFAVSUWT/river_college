import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName, toggleFontSize } from "../../../../utils/disabled";
import Pologen22 from "../../../../assets/pdf/documentPage/Pologen_2022.pdf";
import PolBuh from "../../../../assets/pdf/structPage/pol-buh.pdf";
import PolHoz from "../../../../assets/pdf/structPage/pol-hoz.pdf";
import PolOkp from "../../../../assets/pdf/structPage/pol-okp.pdf";
import PolPopr from "../../../../assets/pdf/structPage/pol-popr.pdf";
import PolPur from "../../../../assets/pdf/structPage/pol-pur.pdf";
import PolVospit from "../../../../assets/pdf/structPage/pol-vospit.pdf";
import TableWrapper from "../../../common/tableWrapper/TableWrapper";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
const Struct = observer(() => {
  return (
    <div
      itemProp="copy"
      style={{ fontSize: toggleFontSize(1) }}
      className={toggleClassName(
        "common__container",
        "common__container-white",
        "common__container-black",
        "common__container-contrast"
      )}
    >
      <TableWrapper
        title={`Структура и органы управления Уфимского филиала ФГБОУ ВО "ВГУВТ"`}
      >
        <table style={{ fontSize: toggleFontSize(1) }}>
          <tbody>
            <tr>
              <td itemProp="name">
                Наименование органа управления/ структурного подразделения{" "}
              </td>
              <td itemProp="fio">
                ФИО руководителя структурного подразделения
              </td>
              <td itemProp="post">
                Должность руководителя структурного подразделения
              </td>
              <td itemProp="addressStr">
                Адрес местонахождения структурного подразделения
              </td>
              <td itemProp="site">
                Адрес официального сайта структурного подразделения
              </td>
              <td itemProp="email">
                Адреса электронной почты структурного подразделения
              </td>
              <td itemProp="divisionClauseDocLink">
                Положение об органе управления/ о структурном подразделении
              </td>
            </tr>
            <tr>
              <td colSpan="7">
                <h3 className="struct-title">
                  Органы управления образовательной организации:
                </h3>
              </td>
            </tr>
            <tr>
              <td>Уфимский филиал </td>
              <td>Ахмадеева Фарида Шариповна</td>
              <td>Директор</td>
              <td>
                450017, Приволжский ФО, Республика Башкортостан, г. Уфа, ул.
                Ахметова, 275
              </td>
              <td>
                <a
                  href="http://www.rivercollege.ru/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  www.rivercollege.ru
                </a>
              </td>
              <td>
                <a
                  href="mailto:uf-vsuwt@uf-vsuwt.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={toggleClassName(
                    "education__link",
                    "education__link-white",
                    "education__link-black",
                    "education__link-contrast"
                  )}
                >
                  uf-vsuwt@uf-vsuwt.ru
                </a>
              </td>
              <td>
                <ul>
                  <li>
                    <PDF width={"25px"} height={"25px"} />
                    <a
                      href={Pologen22}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={toggleClassName(
                        "education__link",
                        "education__link-white",
                        "education__link-black",
                        "education__link-contrast"
                      )}
                    >
                      Положение о филиале
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="struct-title" colSpan="7">
                Структурные подразделения образовательной организации:
              </td>
            </tr>
            <tr>
              <td>Подразделение учебной работы </td>
              <td>Мусина Гульфия Ириковна </td>
              <td>Заместитель директора филиала </td>
              <td>
                450017, Приволжский ФО, Республика Башкортостан, г. Уфа, ул.
                Ахметова, 275{" "}
              </td>
              <td>
                <a
                  href="http://www.rivercollege.ru/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  www.rivercollege.ru
                </a>
              </td>
              <td>
                <a
                  href="mailto:pur@uf-vsuwt.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={toggleClassName(
                    "education__link",
                    "education__link-white",
                    "education__link-black",
                    "education__link-contrast"
                  )}
                >
                  pur@uf-vsuwt.ru
                </a>
              </td>
              <td>
                <ul>
                  <li>
                    <PDF width={"25px"} height={"25px"} />
                    <a
                      href={PolPur}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={toggleClassName(
                        "education__link",
                        "education__link-white",
                        "education__link-black",
                        "education__link-contrast"
                      )}
                    >
                      Положение о подразделении учебной работы
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Подразделение воспитательной работы </td>
              <td>Акбашева Альбина Галимзяновна </td>
              <td>Заместитель директора филиала </td>
              <td>
                450017, Приволжский ФО, Республика Башкортостан, г. Уфа, ул.
                Ахметова, 275{" "}
              </td>
              <td>
                <a
                  href="http://www.rivercollege.ru/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  www.rivercollege.ru
                </a>
              </td>
              <td>
                <a
                  href="mailto:pvr@uf-vsuwt.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={toggleClassName(
                    "education__link",
                    "education__link-white",
                    "education__link-black",
                    "education__link-contrast"
                  )}
                >
                  pvr@uf-vsuwt.ru
                </a>
              </td>
              <td>
                <ul>
                  <li>
                    <PDF width={"25px"} height={"25px"} />
                    <a
                      href={PolVospit}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={toggleClassName(
                        "education__link",
                        "education__link-white",
                        "education__link-black",
                        "education__link-contrast"
                      )}
                    >
                      Положение о подразделении воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Центр организационно-правовой работы</td>
              <td>Мукимов Ралиф Фаритович</td>
              <td>Начальник центра организационно-правовой работы</td>
              <td>
                450017, Приволжский ФО, Республика Башкортостан, г. Уфа, ул.
                Ахметова, 275
              </td>
              <td>
                <a
                  href="http://www.rivercollege.ru/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  www.rivercollege.ru
                </a>
              </td>
              <td>
                <a
                  href="mailto:copr@uf-vsuwt.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={toggleClassName(
                    "education__link",
                    "education__link-white",
                    "education__link-black",
                    "education__link-contrast"
                  )}
                >
                  copr@uf-vsuwt.ru
                </a>
              </td>
              <td>
                <ul>
                  <li>
                    <PDF width={"25px"} height={"25px"} />
                    <a
                      href={PolPopr}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={toggleClassName(
                        "education__link",
                        "education__link-white",
                        "education__link-black",
                        "education__link-contrast"
                      )}
                    >
                      Положение о подразделении организационно-правовой работы
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Административно-хозяйственный отдел</td>
              <td>Самушия Автандил Давидович</td>
              <td>Начальник административно-хозяйственного отдела</td>
              <td>
                450017, Приволжский ФО, Республика Башкортостан, г. Уфа, ул.
                Ахметова, 275
              </td>
              <td>
                <a
                  href="http://www.rivercollege.ru/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  www.rivercollege.ru
                </a>
              </td>
              <td>
                <a
                  href="mailto:aho@uf-vsuwt.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={toggleClassName(
                    "education__link",
                    "education__link-white",
                    "education__link-black",
                    "education__link-contrast"
                  )}
                >
                  aho@uf-vsuwt.ru
                </a>
              </td>
              <td>
                <ul>
                  <li>
                    <PDF width={"25px"} height={"25px"} />
                    <a
                      href={PolHoz}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={toggleClassName(
                        "education__link",
                        "education__link-white",
                        "education__link-black",
                        "education__link-contrast"
                      )}
                    >
                      Положение об административно-хозяйственном отделе
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Бухгалтерия</td>
              <td>Жоссан Елена Евгеньевна</td>
              <td>Главный бухгалтер</td>
              <td>
                450017, Приволжский ФО, Республика Башкортостан, г. Уфа, ул.
                Ахметова, 275
              </td>
              <td>
                <a
                  href="http://www.rivercollege.ru/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  www.rivercollege.ru
                </a>
              </td>
              <td>
                <a
                  href="mailto:buh@uf-vsuwt.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={toggleClassName(
                    "education__link",
                    "education__link-white",
                    "education__link-black",
                    "education__link-contrast"
                  )}
                >
                  buh@uf-vsuwt.ru
                </a>
              </td>
              <td>
                <ul>
                  <li>
                    <PDF width={"25px"} height={"25px"} />
                    <a
                      href={PolBuh}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={toggleClassName(
                        "education__link",
                        "education__link-white",
                        "education__link-black",
                        "education__link-contrast"
                      )}
                    >
                      Положение о бухгалтерии
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Отдел коллективного питания</td>
              <td>Макулова Зиля Шамиловна</td>
              <td>Заведующий производством</td>
              <td>
                450017, Приволжский ФО, Республика Башкортостан, г. Уфа, ул.
                Ахметова, 275
              </td>
              <td>
                <a
                  href="http://www.rivercollege.ru/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  www.rivercollege.ru
                </a>
              </td>
              <td>
                <a
                  href="mailto:kolpit@uf-vsuwt.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={toggleClassName(
                    "education__link",
                    "education__link-white",
                    "education__link-black",
                    "education__link-contrast"
                  )}
                >
                  kolpit@uf-vsuwt.ru
                </a>
              </td>
              <td>
                <ul>
                  <li>
                    <PDF width={"25px"} height={"25px"} />
                    <a
                      href={PolOkp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={toggleClassName(
                        "education__link",
                        "education__link-white",
                        "education__link-black",
                        "education__link-contrast"
                      )}
                    >
                      Положение об отделе коллективного питания
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
    </div>
  );
});
export default Struct;
