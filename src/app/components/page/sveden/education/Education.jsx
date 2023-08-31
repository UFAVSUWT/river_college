import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
import Licenz from "../../../../assets/pdf/documentPage/licenz_vip20220916.pdf";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import d230201 from "../../../../assets/pdf/educationPage/disciplin230201.pdf";
import d230203 from "../../../../assets/pdf/educationPage/disciplin260203.pdf";
import d230205 from "../../../../assets/pdf/educationPage/disciplin260205.pdf";
import d230206 from "../../../../assets/pdf/educationPage/disciplin260206.pdf";
import Pologenie_Parus from "../../../../assets/pdf/educationPage/Pologenie_Parus.pdf";
import Pologhenie_DO from "../../../../assets/pdf/educationPage/Pologhenie_DO.pdf";
import Pologhenie_EL_Sreda from "../../../../assets/pdf/educationPage/Pologhenie_EL_Sreda.pdf";
import Pologhenie_kontrolDO from "../../../../assets/pdf/educationPage/Pologhenie_kontrolDO.pdf";
import FOS_IA_SV_uglubl from "../../../../assets/pdf/educationPage/260203/FOS_IA_SV_uglubl.pdf";
import FOS_IA_SV_uglublSig from "../../../../assets/pdf/educationPage/260203/FOS_IA_SV_uglubl.pdf.sig";

import Pologenie_attest_vipusk from "../../../../assets/pdf/educationPage/260203/Pologenie_attest_vipusk.pdf";
import Pologenie_OOP from "../../../../assets/pdf/educationPage/260203/Pologenie_OOP.pdf";
import Programma_IA_SV_uglubl from "../../../../assets/pdf/educationPage/260203/Programma_IA_SV_uglubl.pdf";
import Programma_IA_SV_uglublSig from "../../../../assets/pdf/educationPage/260203/Programma_IA_SV_uglubl.pdf.sig";

import Programma_IA_SM from "../../../../assets/pdf/educationPage/260206/Programma_IA_SM.pdf";
import Programma_IA_EM from "../../../../assets/pdf/educationPage/260206/Programma_IA_EM.pdf";
import FOS_IA_EM from "../../../../assets/pdf/educationPage/260205/FOS_IA_EM.pdf";
import FOS_IA_SM from "../../../../assets/pdf/educationPage/260205/FOS_IA_SM.pdf";
import FOS_IA_OP from "../../../../assets/pdf/educationPage/230201/FOS_IA_OP.pdf";
import Programma_IA_OP from "../../../../assets/pdf/educationPage/230201/Programma_IA_OP.pdf";
import KPV from "../../../../assets/pdf/educationPage/KPV.pdf";
import RPV_OP from "../../../../assets/pdf/educationPage/230201/RPV_OP.pdf";
import RPV_SV from "../../../../assets/pdf/educationPage/260203/RPV_SV.pdf";
import RPV_SM from "../../../../assets/pdf/educationPage/260205/RPV_SM.pdf";
import RPV_EM from "../../../../assets/pdf/educationPage/260206/RPV_EM.pdf";
import Image1 from "../../../../assets/pdf/educationPage/260203/1.1.jpg";
import Image2 from "../../../../assets/pdf/educationPage/260203/1.2.jpg";
import Image3 from "../../../../assets/pdf/educationPage/260203/1.3.jpg";
import Image4 from "../../../../assets/pdf/educationPage/260203/2.1.jpg";
import Image5 from "../../../../assets/pdf/educationPage/260203/2.2.jpg";
import Image6 from "../../../../assets/pdf/educationPage/260203/2.3.jpg";
import Image7 from "../../../../assets/pdf/educationPage/260203/3.1.jpg";
import Image8 from "../../../../assets/pdf/educationPage/260203/3.2.jpg";
import Image9 from "../../../../assets/pdf/educationPage/260203/3.3.jpg";
import Image10 from "../../../../assets/pdf/educationPage/260203/4.1.jpg";
import Image11 from "../../../../assets/pdf/educationPage/260203/4.2.jpg";
import Image12 from "../../../../assets/pdf/educationPage/260206/5.jpg";
import Image13 from "../../../../assets/pdf/educationPage/260206/6.jpg";
import Image14 from "../../../../assets/pdf/educationPage/260206/7.jpg";
import Image15 from "../../../../assets/pdf/educationPage/260206/8.jpg";
import Image16 from "../../../../assets/pdf/educationPage/260205/9.jpg";
import Image17 from "../../../../assets/pdf/educationPage/260205/10.jpg";
import Image18 from "../../../../assets/pdf/educationPage/260205/11.jpg";
import Image19 from "../../../../assets/pdf/educationPage/260205/11.1.jpg";
import Image20 from "../../../../assets/pdf/educationPage/260205/12.jpg";
import Image21 from "../../../../assets/pdf/educationPage/260205/12.1.jpg";
import Image22 from "../../../../assets/pdf/educationPage/230201/13.jpg";
import Image23 from "../../../../assets/pdf/educationPage/230201/14.jpg";
import TableWrapper from "../../../common/tableWrapper/TableWrapper";
import { NavLink } from "react-router-dom";
import adOOP1 from "../../../../assets/pdf/educationPage/260203/oop/adOOP_260203.pdf";
import OOP1 from "../../../../assets/pdf/educationPage/260203/oop/OOP1.pdf";
import SigOOP1 from "../../../../assets/pdf/educationPage/260203/oop/OOP1.pdf.sig";
import OOP2 from "../../../../assets/pdf/educationPage/260203/oop/OOP2.pdf";
import SigOOP2 from "../../../../assets/pdf/educationPage/260203/oop/OOP2.pdf.sig";
import OOP3 from "../../../../assets/pdf/educationPage/260203/oop/OOP3.pdf";
import SigOOP3 from "../../../../assets/pdf/educationPage/260203/oop/OOP3.pdf.sig";
import OOP4 from "../../../../assets/pdf/educationPage/260203/oop/OOP4.pdf";
import OOP5 from "../../../../assets/pdf/educationPage/260206/oop/OOP5.pdf";
import SigOOP5 from "../../../../assets/pdf/educationPage/260206/oop/OOP5.pdf.sig";
import OOP6 from "../../../../assets/pdf/educationPage/260206/oop/OOP6.pdf";
import SigOOP6 from "../../../../assets/pdf/educationPage/260206/oop/OOP6.pdf.sig";
import OOP7 from "../../../../assets/pdf/educationPage/260206/oop/OOP7.pdf";
import SigOOP7 from "../../../../assets/pdf/educationPage/260206/oop/OOP7.pdf.sig";
import OOP8 from "../../../../assets/pdf/educationPage/260206/oop/OOP8.pdf";
import OOP9 from "../../../../assets/pdf/educationPage/260205/oop/OOP9.pdf";
import SigOOP9 from "../../../../assets/pdf/educationPage/260205/oop/OOP9.pdf.sig";
import OOP10 from "../../../../assets/pdf/educationPage/260205/oop/OOP10.pdf";
import SigOOP10 from "../../../../assets/pdf/educationPage/260205/oop/OOP10.pdf.sig";
import OOP11 from "../../../../assets/pdf/educationPage/260205/oop/OOP11.pdf";
import SigOOP11 from "../../../../assets/pdf/educationPage/260205/oop/OOP11.pdf.sig";
import OOP12 from "../../../../assets/pdf/educationPage/260205/oop/OOP12.pdf";
import OOP13 from "../../../../assets/pdf/educationPage/230201/oop/OOP13.pdf";
import SigOOP13 from "../../../../assets/pdf/educationPage/230201/oop/OOP13.pdf.sig";
import OOP14 from "../../../../assets/pdf/educationPage/230201/oop/OOP13.pdf";
import SigOOP14 from "../../../../assets/pdf/educationPage/230201/oop/OOP14.pdf.sig";
import UP1 from "../../../../assets/pdf/educationPage/260203/syllabus/UP_260203_1-1.pdf";
import UP2 from "../../../../assets/pdf/educationPage/260203/syllabus/UP_260203_1-2.pdf";
import UP3 from "../../../../assets/pdf/educationPage/260203/syllabus/UP_260203_2-1-3.pdf";
import UP4 from "../../../../assets/pdf/educationPage/260203/syllabus/UP_260203_3-1-2.pdf";
import UP5 from "../../../../assets/pdf/educationPage/260203/syllabus/UP_260203_3-3.pdf";
import UP6 from "../../../../assets/pdf/educationPage/260203/syllabus/UP_260203_4-1.pdf";
import UP7 from "../../../../assets/pdf/educationPage/260203/syllabus/UP_260203_4-2.pdf";
import UP9 from "../../../../assets/pdf/educationPage/260206/syllabus/UP_260206_6.pdf";
import UP10 from "../../../../assets/pdf/educationPage/260206/syllabus/UP_260206_7.pdf";
import UP11 from "../../../../assets/pdf/educationPage/260206/syllabus/UP_260206_8.pdf";
import UP12 from "../../../../assets/pdf/educationPage/260205/syllabus/UP_260205_9.pdf";
import UP13 from "../../../../assets/pdf/educationPage/260205/syllabus/UP_260205_10.pdf";
import UP14 from "../../../../assets/pdf/educationPage/260205/syllabus/UP_260205_11.pdf";
import UP15 from "../../../../assets/pdf/educationPage/260205/syllabus/UP_260205_12.pdf";
import UP16 from "../../../../assets/pdf/educationPage/260205/syllabus/UP_260205_12-1.pdf";
import UP17 from "../../../../assets/pdf/educationPage/230201/syllabus/UP_230201_13.pdf";
import UP18 from "../../../../assets/pdf/educationPage/230201/syllabus/UP_230201_14.pdf";
import UP19 from "../../../../assets/pdf/educationPage/260203/syllabus/adUP_260203.pdf";
import adAnnot from "../../../../assets/pdf/educationPage/260203/annot/annot_SV_AD.pdf";
import Annot1 from "../../../../assets/pdf/educationPage/260203/annot/annot1.pdf";
import Annot2 from "../../../../assets/pdf/educationPage/260203/annot/annot2.pdf";
import Annot3 from "../../../../assets/pdf/educationPage/260203/annot/annot3.pdf";
import Annot4 from "../../../../assets/pdf/educationPage/260203/annot/annot4.pdf";
import Annot5 from "../../../../assets/pdf/educationPage/260206/annot/annot5.pdf";
import Annot6 from "../../../../assets/pdf/educationPage/260206/annot/annot6.pdf";
import Annot7 from "../../../../assets/pdf/educationPage/260206/annot/annot7.pdf";
import Annot8 from "../../../../assets/pdf/educationPage/260206/annot/annot8.pdf";
import Annot9 from "../../../../assets/pdf/educationPage/260205/annot/annot9.pdf";
import Annot10 from "../../../../assets/pdf/educationPage/260205/annot/annot10.pdf";
import Annot11 from "../../../../assets/pdf/educationPage/260205/annot/annot11.pdf";
import Annot12 from "../../../../assets/pdf/educationPage/260205/annot/annot12.pdf";
import annot_OP from "../../../../assets/pdf/educationPage/230201/annot/annot_OP.pdf";
import annot_OP_ZO from "../../../../assets/pdf/educationPage/230201/annot/annot_OP_ZO.pdf";

import RP_260203 from "../../../../assets/pdf/educationPage/260203/RP_Uch_prakt_2018ugl_3-10.pdf";
import FOS_UCH_PR_260203 from "../../../../assets/pdf/educationPage/260203/FOS_Uch_prakt_2018ugl_3-10.pdf";
import RP_UCH_PR_260203 from "../../../../assets/pdf/educationPage/260203/RP_pr_prakt_2018ugl_3-10.pdf";
import FOS_PR_PR_260203 from "../../../../assets/pdf/educationPage/260203/FOS_pr_prakt_2018ugl_3-10.pdf";
import RP_PR_PR_260203 from "../../../../assets/pdf/educationPage/260203/RP_Pr_prakt_2018ugl_ZO_3-10.pdf";
import RP_UCH_PR_Z_260203 from "../../../../assets/pdf/educationPage/260203/RP_Uch_prakt_2018ugl_ZO_3-10.pdf";

import RP_260206 from "../../../../assets/pdf/educationPage/260206/RP_Uch_prakt_260206_2018.pdf";
import FOS_UCH_PR_260206 from "../../../../assets/pdf/educationPage/260206/FOS_Uch_prakt_260206.pdf";
import RP_UCH_PR_260206 from "../../../../assets/pdf/educationPage/260206/RP_Pr_prakt_260206_2018.pdf";
import FOS_PR_PR_260206 from "../../../../assets/pdf/educationPage/260206/FOS_Pr_prakt_260206.pdf";
import RP_PR_PR_260206 from "../../../../assets/pdf/educationPage/260206/RP_PDP_260206_2018.pdf";
import RP_UCH_PR_Z_260206 from "../../../../assets/pdf/educationPage/260206/FOS_PDP_260206.pdf";

import RP_260205 from "../../../../assets/pdf/educationPage/260205/RP_Uch_prakt_260205.pdf";
import FOS_UCH_PR_260205 from "../../../../assets/pdf/educationPage/260205/FOS_Uch_prakt_260205.pdf";
import RP_UCH_PR_260205 from "../../../../assets/pdf/educationPage/260205/RP_Pr_prakt_260205.pdf";
import FOS_PR_PR_260205 from "../../../../assets/pdf/educationPage/260205/FOS_Pr_prakt_260205.pdf";
import RP_PR_PR_260205 from "../../../../assets/pdf/educationPage/260205/RP_Uch_prakt_260205_2016-2017_ZO.pdf";
import RP_UCH_PR_Z_260205 from "../../../../assets/pdf/educationPage/260205/RP_Pr_prakt_260205_2016-2017_ZO.pdf";

import RP_230201 from "../../../../assets/pdf/educationPage/230201/RP_Uch_prakt_230201.pdf";
import FOS_UCH_PR_230201 from "../../../../assets/pdf/educationPage/230201/FOS_Uch_prakt_230201.pdf";
import RP_UCH_PR_230201 from "../../../../assets/pdf/educationPage/230201/RP_Pr_prakt_230201.pdf";
import FOS_PR_PR_230201 from "../../../../assets/pdf/educationPage/230201/FOS_Pr_prakt_230201.pdf";
import RP_PR_PR_230201 from "../../../../assets/pdf/educationPage/230201/RP_PDP_230201.pdf";
import RP_UCH_PR_Z_230201 from "../../../../assets/pdf/educationPage/230201/FOS_PDP_230201.pdf";
import OOP2023vo from "../../../../assets/pdf/educationPage/260506/OOP2023vo.pdf";
import OOP2023voSig from "../../../../assets/pdf/educationPage/260506/OOP2023vo.pdf";
import Ucheb_plan_VO_260506_2023 from "../../../../assets/pdf/educationPage/260506/Ucheb_plan_VO_26.05.06_2023.pdf";
import annot_2023_260506 from "../../../../assets/pdf/educationPage/260506/annot_2023_26.05.06.pdf";
import KUG2023_260506 from "../../../../assets/pdf/educationPage/260506/KUG2023_26.05.06.pdf";
import KUG2023_260506Sig from "../../../../assets/pdf/educationPage/260506/KUG2023_26.05.06.pdf";

import adkug_260203 from "../../../../assets/pdf/educationPage/260203/adkug_260203.pdf";
import Pologenie_ucheb_prozess_ovz_2017 from "../../../../assets/pdf/educationPage/260203/Pologenie_ucheb_prozess_ovz_2017.pdf";
import Pologen_Fizra from "../../../../assets/pdf/educationPage/260203/Pologen_Fizra.pdf";

import kpvr_VO from "../../../../assets/pdf/educationPage/260506/kpvr_VO.pdf";
import rp_23_24 from "../../../../assets/pdf/educationPage/260506/rp_23_24.pdf";

const Education = observer(() => {
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
        Образование
      </h1>
      <ul>
        <li className="doc__item">
          <PDF height={"25px"} width={"25px"} />
          <a href={Licenz} target={"_blank"} rel="noreferrer">
            Выписка из реестра лицензий Федеральной службы по надзору в сфере
            образования и науки (16.09.2022)
          </a>
        </li>
      </ul>
      <TableWrapper
        title="Информация о сроке действия государственной аккредитации образовательной
        программы, о языках, на которых осуществляется образование (обучение):"
      >
        <table>
          <tbody itemProp="eduAccred">
            <tr>
              <td itemProp="eduCode">Код</td>
              <td itemProp="eduName">
                Наименование профессии, специальности, направления подготовки
              </td>
              <td itemProp="eduProf">
                Образовательная программа, направленность, профиль, шифр и
                наименование научной специальности
              </td>
              <td itemProp="eduLevel">Уровень образования</td>
              <td itemProp="eduForm">Формы обучения</td>
              <td itemProp="learningTerm">Срок получения образования</td>
              <td itemProp="dateEnd">
                Срок действия государственной аккредитации (дата окончания
                действия свидетельства о государственной аккредитации)
              </td>
              <td itemProp="language">
                Языки, на которых осуществляется образование (обучение)
              </td>
              <td itemProp="eduCode">
                Учебные предметы, курсы, дисциплины (модули), предусмотренные
                соответствующей образовательной программой
              </td>
              <td itemProp="eduCode">
                Практики, предусмотренные соответствующей образовательной
                программой
              </td>
              <td itemProp="eduCode">
                Информация об использовании при реализации образовательных
                программ электронного обучения и дистанционных образовательных
                технологий
              </td>
            </tr>

            <tr>
              <td>-</td>
              <td>-</td>
              <td style={{ backgroundColor: "red" }}>-</td>
              <td>высшее образование - специалитет</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td style={{ backgroundColor: "red" }}>-</td>
              <td style={{ backgroundColor: "red" }}>-</td>
              <td style={{ backgroundColor: "red" }}>-</td>
            </tr>

            <tr>
              <td rowSpan="3">26.02.03</td>
              <td rowSpan="3">"Судовождение" (углубленная подготовка)</td>
              <td rowSpan="3">"Судовождение" (углубленная подготовка)</td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная форма</td>
              <td>
                4 года 10 мес <br /> 3 года 10 мес
              </td>
              <td rowSpan="3">27.02.2025</td>
              <td rowSpan="3">Русский</td>
              <td rowSpan="3" style={{ backgroundColor: "red" }}>
                -
              </td>
              <td rowSpan="3" style={{ backgroundColor: "red" }}>
                -
              </td>
              <td rowSpan="3" style={{ backgroundColor: "red" }}>
                -
              </td>
            </tr>
            <tr>
              <td>очно-заочная форма</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная форма</td>
              <td>
                4 года 10 мес <br /> 5 лет 10 мес
              </td>
            </tr>
            <tr>
              <td rowSpan="3">26.02.05 </td>
              <td rowSpan="3">
                "Эксплуатация судовых энергетических установок" (базовый
                уровень)
              </td>
              <td rowSpan="3">
                "Эксплуатация судового электрооборудования и средств автоматики"
                (базовый уровень)
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная форма</td>
              <td>
                3 года 10 мес <br /> 2 года 10 мес
              </td>
              <td rowSpan="3">27.02.2025</td>
              <td rowSpan="3">Русский</td>
              <td rowSpan="3" style={{ backgroundColor: "red" }}>
                -
              </td>
              <td rowSpan="3" style={{ backgroundColor: "red" }}>
                -
              </td>
              <td rowSpan="3" style={{ backgroundColor: "red" }}>
                -
              </td>
            </tr>
            <tr>
              <td>очно-заочная форма</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная форма</td>
              <td>
                4 года 10 мес <br /> 3 года 10 мес
              </td>
            </tr>
            <tr>
              <td rowSpan="3">26.02.06</td>
              <td rowSpan="3">
                "Эксплуатация судового электрооборудования и средств автоматики"
                (базовый уровень)
              </td>
              <td rowSpan="3">
                "Эксплуатация судовых энергетических установок" (базовый
                уровень)
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная форма</td>
              <td>3 года 10 мес</td>
              <td rowSpan="3">27.02.2025</td>
              <td rowSpan="3">Русский</td>
              <td rowSpan="3" style={{ backgroundColor: "red" }}>
                -
              </td>
              <td rowSpan="3" style={{ backgroundColor: "red" }}>
                -
              </td>
              <td rowSpan="3" style={{ backgroundColor: "red" }}>
                -
              </td>
            </tr>
            <tr>
              <td>очно-заочная форма</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная форма</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="3">23.02.01</td>
              <td rowSpan="3">
                "Организация перевозок и управление на транспорте" (по видам)
                (базовый уровень)
              </td>
              <td rowSpan="3">
                "Организация перевозок и управление на транспорте" (по видам)
                (базовый уровень)
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная форма</td>
              <td>3 года 10 мес</td>
              <td rowSpan="3">27.02.2025</td>
              <td rowSpan="3">Русский</td>
              <td rowSpan="3" style={{ backgroundColor: "red" }}>
                -
              </td>
              <td rowSpan="3" style={{ backgroundColor: "red" }}>
                -
              </td>
              <td rowSpan="3" style={{ backgroundColor: "red" }}>
                -
              </td>
            </tr>
            <tr>
              <td>очно-заочная форма</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная форма</td>
              <td>2 года 10 мес</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
      <h3
        style={{ backgroundColor: "red" }}
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о профессионально-общественной аккредитации образовательной
        программы:
      </h3>
      <div className="common__container scroll-table struct__scrollTable">
        <table className="">
          <tbody>
            <tr>
              <td>Код</td>
              <td>
                Наименование профессии, специальности, направления подготовки
              </td>
              <td>Наименование аккредитующей организации</td>
              <td>
                Срок действия профессионально-общественной аккредитации (дата
                окончания действия свидетельства о профессионально-общественной
                аккредитации)
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <TableWrapper
        title=" Информация о численности обучающихся по реализуемым образовательным
        программам за счет бюджетных ассигнований федерального бюджета, бюджетов
        субъектов Российской Федерации, местных бюджетов и по договорам об
        образовании за счет средств физических и (или) юридических лиц на
        01.09.2023:"
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
              <td>-</td>
              <td>-</td>
              <td>высшее образование - бакалавриат</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr itemProp="eduChislen">
              <td>-</td>
              <td>-</td>
              <td>высшее образование - специалитет</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr itemProp="eduChislen">
              <td>-</td>
              <td>-</td>
              <td>высшее образование - магистратура</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr itemProp="eduChislen">
              <td>-</td>
              <td>-</td>
              <td>
                высшее образование - подготовка кадров высшей квалификации
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr itemProp="eduChislen">
              <td rowSpan="3">23.02.01</td>
              <td rowSpan="3">
                Организация перевозок и управление на транспорте
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>94</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>5</td>
              <td>-</td>
              <td>99</td>
            </tr>
            <tr itemProp="eduChislen">
              <td>очно-заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr itemProp="eduChislen">
              <td>заочная</td>
              <td>3</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>3</td>
            </tr>
            <tr itemProp="eduChislen">
              <td rowSpan="3">23.02.03</td>
              <td rowSpan="3">Судовождение</td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>297</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>9</td>
              <td>-</td>
              <td>306</td>
            </tr>
            <tr itemProp="eduChislen">
              <td>очно-заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td></td>
            </tr>
            <tr itemProp="eduChislen">
              <td>заочная</td>
              <td>5</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>50</td>
              <td>-</td>
              <td>55</td>
            </tr>
            <tr itemProp="eduChislen">
              <td rowSpan="3">23.02.05</td>
              <td rowSpan="3">Эксплуатация судовых энергетических установок</td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>182</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>4</td>
              <td>-</td>
              <td>186</td>
            </tr>
            <tr itemProp="eduChislen">
              <td>очно-заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr itemProp="eduChislen">
              <td>заочная</td>
              <td>5</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>5</td>
            </tr>
            <tr itemProp="eduChislen">
              <td rowSpan="3">23.02.06</td>
              <td rowSpan="3">
                Эксплуатация судового электрооборудования и средств автоматики
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>199</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>1</td>
              <td>-</td>
              <td>200</td>
            </tr>
            <tr itemProp="eduChislen">
              <td>очно-заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr itemProp="eduChislen">
              <td>заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о численности обучающихся, являющихся иностранными
        гражданами: 3 обучающихся
      </h3>

      <TableWrapper
        title=" Информация о результатах приема по каждой профессии, специальности
        среднего профессионального образования (при наличии вступительных
        испытаний), каждому направлению подготовки или специальности высшего
        образования с различными условиями приема (на места за счет бюджетных
        ассигнований федерального бюджета, бюджетов субъектов Российской
        Федерации, местных бюджетов и по договорам об образовании за счет
        средств физических и (или) юридических лиц):"
      >
        {" "}
        <table>
          <tbody>
            <tr itemProp="eduPriem">
              <td itemProp="eduCode" rowSpan="2">
                Код
              </td>
              <td itemProp="eduName" rowSpan="2">
                Наименование специальности, направления подготовки
              </td>
              <td itemProp="eduLevel" rowSpan="2">
                Уровень образования
              </td>
              <td itemProp="eduForm" rowSpan="2">
                Формы обучения
              </td>
              <td colSpan="4">
                Результаты приема обучающихся за счет (количество человек):
              </td>
              <td itemProp="score" rowSpan="2">
                Средняя сумма набранных баллов по всем вступительным испытаниям
              </td>
            </tr>
            <tr>
              <td itemProp="numberBF">
                бюджетных ассигнований федерального бюджета
              </td>
              <td itemProp="numberBR">
                бюджетов субъектов Российской Федерации
              </td>
              <td itemProp="numberBM">местных бюджетов </td>
              <td itemProp="numberP">
                средств физических и (или) юридических лиц
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - бакалавриат</td>
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
              <td>высшее образование - специалитет</td>
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
              <td>высшее образование - магистратура</td>
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
              <td>
                высшее образование - подготовка кадров высшей квалификации
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="3">23.02.01</td>
              <td rowSpan="3">
                Организация перевозок и управление на транспорте (по видам)
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>25</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>-</td>
            </tr>
            <tr>
              <td>очно-заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="3">26.02.03</td>
              <td rowSpan="3"> Судовождение (9 кл)</td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>50</td>
              <td>0</td>
              <td>0</td>
              <td>3</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>очно-заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="3">26.02.03</td>
              <td rowSpan="3"> Судовождение (11 кл)</td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>14</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>-</td>
            </tr>
            <tr>
              <td>очно-заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="3">26.02.05</td>
              <td rowSpan="3">Эксплуатация судовых энергетических установок</td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>50</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>-</td>
            </tr>
            <tr>
              <td>очно-заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="3">26.02.06</td>
              <td rowSpan="3">
                Эксплуатация судового электрооборудования и средств автоматики
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>50</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>очно-заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>

      <TableWrapper
        title="Информация о результатах перевода, восстановления и отчисления на
        01.09.2023"
      >
        <table>
          <tbody>
            <tr itemProp="eduPerevod">
              <td itemProp="eduCode" rowSpan="2">
                Код
              </td>
              <td itemProp="eduName" rowSpan="2">
                Наименование специальности, направления подготовки
              </td>
              <td itemProp="eduLevel" rowSpan="2">
                Уровень образования
              </td>
              <td itemProp="eduForm" rowSpan="2">
                Формы обучения
              </td>
            </tr>
            <tr>
              <td itemProp="numberOut">
                Численность обучающихся, переведенных в другие образовательные
                организации
              </td>
              <td itemProp="numberTo">
                Численность обучающихся, переведенных из других образовательных
                организаций
              </td>
              <td itemProp="numberRes">
                Численность восстановленных обучающихся
              </td>
              <td itemProp="numberExp">Численность отчисленных обучающихся</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - бакалавриат</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - специалитет</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - магистратура</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>
                высшее образование - подготовка кадров высшей квалификации
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>

            <tr>
              <td rowSpan="3">26.02.03</td>
              <td rowSpan="3"> Судовождение</td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>2</td>
              <td>3</td>
              <td>-</td>
              <td>19</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>3</td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td rowSpan="3">26.02.05</td>
              <td rowSpan="3">Эксплуатация судовых энергетических установок</td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>5</td>
              <td>3</td>
              <td>-</td>
              <td>16</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr></tr>
            <tr>
              <td rowSpan="3">26.02.06</td>
              <td rowSpan="3">
                Эксплуатация судового электрооборудования и средств автоматики
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>9</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr></tr>
            <tr>
              <td rowSpan="3">23.02.01</td>
              <td rowSpan="3">
                {" "}
                Организация перевозок и управление на транспорте
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>-</td>
              <td>3</td>
              <td>-</td>
              <td>6</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>2</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>

      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Реализуемые образовательные программы (учебные предметы, курсы,
        дисциплины (модули), практики), в том числе адаптированные
      </h3>
      <ul>
        <li className="doc__item">
          <PDF height={"25px"} width={"25px"} />
          <a href={d230203} target={"_blank"} rel="noreferrer">
            26.02.03 "Судовождение"{" "}
          </a>
        </li>
        <li className="doc__item">
          <PDF height={"25px"} width={"25px"} />
          <a href={d230206} target={"_blank"} rel="noreferrer">
            26.02.06 "Эксплуатация судового электрооборудования и средств
            автоматики"
          </a>
        </li>
        <li className="doc__item">
          <PDF height={"25px"} width={"25px"} />
          <a href={d230205} target={"_blank"} rel="noreferrer">
            26.02.05 "Эксплуатация судовых энергетических установок"
          </a>
        </li>
        <li className="doc__item">
          <PDF height={"25px"} width={"25px"} />
          <a href={d230201} target={"_blank"} rel="noreferrer">
            23.02.01 "Организация перевозок и управление на транспорте (по
            видам)
          </a>
        </li>
      </ul>

      <TableWrapper title="Информация по неадаптированным образовательным программам:">
        <table>
          <tbody>
            <tr itemProp="eduOp">
              <td itemProp="eduCode">Код</td>
              <td itemProp="eduName">
                Наименование специальности, направления подготовки, шифр и
                наименование области науки, научной специальности
              </td>
              <td itemProp="eduLevel">
                Уровень образования: 1) высшее образование -бакалавриат; 2)
                высшее образование - специалитет; 3) высшее образование -
                магистратура; 4) высшее образование - подготовка кадров высшей
                квалификации; 5) среднее профессиональное образование
              </td>
              <td itemProp="eduProf">
                Образовательная программа, направленность, профиль, шифр и
                наименование научной специальности
              </td>
              <td itemProp="eduForm">
                Реализуемые формы обучения: 1) очная; 2) очно-заочная; 3)
                заочная
              </td>
              <td itemProp="opMain">
                Ссылка на описание образовательной программы с приложением ее
                копии
              </td>
              <td itemProp="educationPlan">Ссылка на учебный план</td>
              <td itemProp="educationAnnotation">
                Ссылка на аннотации к рабочим программам дисциплин (по каждой
                дисциплине в составе образовательной программы)
              </td>
              <td itemProp="educationRpd">
                Ссылка на рабочие программы дисциплин, рабочие программы
                практик, предусмотренных соответствующей образовательной
                программой
              </td>
              <td itemProp="educationShedule">
                Ссылка на календарный учебный график
              </td>
              <td itemProp="eduPr">Ссылка на рабочие программы воспитания</td>
              <td itemProp="methodology">
                Ссылка на календарный план воспитательной работы
              </td>
              <td itemProp="methodology">
                Ссылка на методические и иные документы, разработанные
                образовательной организацией для обеспечения образовательного
                процесса
              </td>
              <td>
                Использование при реализации образовательных программ
                электронного обучения и дистанционных образовательных технологий
              </td>
            </tr>

            <tr>
              <td>26.05.06</td>
              <td>
                <NavLink to="../../educationPrograms/shipPowerPlantsVO2023">
                  Эксплуатация судовых энергетических установок
                </NavLink>
              </td>
              <td>высшее образование - специалитет</td>

              <td>
                <NavLink to="../../educationPrograms/shipPowerPlantsVO2023">
                  Эксплуатация судовых энергетических установок
                </NavLink>
              </td>
              <td>заочная</td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={OOP2023vo} target={"_blank"} rel="noreferrer">
                      ООП ВО 26.05.06 Эксплуатация судовых энергетических
                      установок смешанного река-море плавания
                    </a>
                  </li>
                  <li className="doc__item">
                    <a href={OOP2023voSig} target={"_blank"} rel="noreferrer">
                      ЭЦП
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Ucheb_plan_VO_260506_2023}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Учебный план ООП ВО 26.05.06 Эксплуатация судовых
                      энергетических установок смешанного река-море плавания
                      заочная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={annot_2023_260506}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Аннотации к рабочим программам дисциплин ООП ВО 26.05.06
                      "Эксплуатация судовых энергетических установок смешанного
                      река-море плавания"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <NavLink to="../../educationPrograms/shipPowerPlantsVO2023">
                      Рабочие программы дисциплин для ООП ВО 26.05.06
                      "Эксплуатация судовых энергетических установок смешанного
                      река-море плавания"
                    </NavLink>
                  </li>
                  <li className="doc__item">
                    <NavLink to="../../educationPrograms/shipPowerPlantsVO2023FOS">
                      Ссылка на рабочие программы практик, предусмотренных
                      образовательной программой "Эксплуатация судовых
                      энергетических установок"
                    </NavLink>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KUG2023_260506} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для ООП ВО 26.05.06
                      "Эксплуатация судовых энергетических установок смешанного
                      река-море плавания"
                    </a>
                  </li>
                  <li>
                    <a
                      href={KUG2023_260506Sig}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      ЭЦП
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                {" "}
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={rp_23_24} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.05.06 "Эксплуатация судовых
                      энергетических установок"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={kpvr_VO} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260203
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260203 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>26.02.03 </td>
              <td>
                <NavLink to="../../educationPrograms/navigation2020">
                  {" "}
                  Судовождение (углубленная подготовка), 2020 года набора
                </NavLink>
              </td>
              <td>среднее профессиональное образование</td>
              <td>
                <NavLink to="../../educationPrograms/navigation2020">
                  {" "}
                  Судовождение (углубленная подготовка), 2020 года набора
                </NavLink>
              </td>
              <td>очно-заочная </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={OOP1} target={"_blank"} rel="noreferrer">
                      ООП для специальности 26.02.03 "Судовождение"
                    </a>
                  </li>
                  <li className="doc__item">
                    <a href={SigOOP1} target={"_blank"} rel="noreferrer">
                      ЭЦП
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP1} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.03 "Судовождение", на базе 9 классов,
                      очная/заочная
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP2} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.03 "Судовождение", на базе 11 классов,
                      очная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Annot1} target={"_blank"} rel="noreferrer">
                      Аннотации к рабочим программам дисциплин для специальности
                      СПО 26.02.03 "Судовождение"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <NavLink to="../../educationPrograms/navigation2020">
                      {" "}
                      Рабочие программы дисциплин для специальности СПО 26.02.03
                      "Судовождение"
                    </NavLink>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RP_260203} target={"_blank"} rel="noreferrer">
                      Рабочая программа учебной практики, (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_UCH_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      ФОС учебной практики (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики, (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_PR_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      ФОС производственной практики (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_PR_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики, (заочная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_Z_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа учебной практики (заочная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image1} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 9 классов, очная
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image2} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 11 классов, очная
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image3} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", заочная
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_SV} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.03 "Судовождение"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_SV} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.03 "Судовождение"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260203
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260203 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.03 </td>
              <td>
                <NavLink to="../../educationPrograms/navigation2019">
                  {" "}
                  Судовождение (углубленная подготовка), 2019 года набора
                </NavLink>
              </td>
              <td>среднее профессиональное образование</td>
              <td>
                <NavLink to="../../educationPrograms/navigation2019">
                  {" "}
                  Судовождение (углубленная подготовка), 2019 года набора
                </NavLink>
              </td>
              <td>очно-заочная </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={OOP2} target={"_blank"} rel="noreferrer">
                      ООП для специальности 26.02.03 "Судовождение"
                    </a>
                  </li>
                  <li className="doc__item">
                    <a href={SigOOP2} target={"_blank"} rel="noreferrer">
                      ЭЦП
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item" style={{ backgroundColor: "red" }}>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={"/"} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.03 "Судовождение", на базе 11 классов,
                      заочная
                    </a>
                  </li>
                  <li className="doc__item" style={{ backgroundColor: "red" }}>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={"/"} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.03 "Судовождение", на базе 9 классов,
                      заочная
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP3} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.03 "Судовождение", на базе 9 классов,
                      очная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Annot2} target={"_blank"} rel="noreferrer">
                      Аннотации к рабочим программам дисциплин для специальности
                      СПО 26.02.03 "Судовождение"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <NavLink to="../../educationPrograms/navigation2019">
                      {" "}
                      Рабочие программы дисциплин для специальности СПО 26.02.03
                      "Судовождение"
                    </NavLink>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RP_260203} target={"_blank"} rel="noreferrer">
                      Рабочая программа учебной практики, (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_UCH_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      ФОС учебной практики (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики, (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_PR_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      ФОС производственной практики (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_PR_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики, (заочная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_Z_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа учебной практики (заочная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image4} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 11 классов, заочная
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image5} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 9 классов, заочная
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image6} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 9 классов, очная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_SV} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.03 "Судовождение"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260203
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260203 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.03 </td>
              <td>
                <NavLink to="../../educationPrograms/navigation2018">
                  {" "}
                  Судовождение (углубленная подготовка), 2018 года набора
                </NavLink>
              </td>
              <td>среднее профессиональное образование</td>
              <td>
                <NavLink to="../../educationPrograms/navigation2018">
                  {" "}
                  Судовождение (углубленная подготовка), 2018 года набора
                </NavLink>
              </td>
              <td>очно-заочная </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={OOP3} target={"_blank"} rel="noreferrer">
                      ООП для специальности 26.02.03 "Судовождение"
                    </a>
                  </li>
                  <li className="doc__item">
                    <a href={SigOOP3} target={"_blank"} rel="noreferrer">
                      ЭЦП
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP4} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.03 "Судовождение", на базе 11 классов,
                      заочная
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP4} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.03 "Судовождение", на базе 9 классов,
                      заочная
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP5} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.03 "Судовождение", на базе 9 классов,
                      очная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Annot3} target={"_blank"} rel="noreferrer">
                      Аннотации к рабочим программам дисциплин для специальности
                      СПО 26.02.03 "Судовождение"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <NavLink to="../../educationPrograms/navigation2018">
                      {" "}
                      Рабочие программы дисциплин для специальности СПО 26.02.03
                      "Судовождение"
                    </NavLink>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RP_260203} target={"_blank"} rel="noreferrer">
                      Рабочая программа учебной практики, (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_UCH_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      ФОС учебной практики (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики, (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_PR_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      ФОС производственной практики (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_PR_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики, (заочная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_Z_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа учебной практики (заочная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image7} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 11 классов, заочная
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image8} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 9 классов, очная
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image9} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 11 классов, очная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_SV} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.03 "Судовождение"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260203
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260203 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.03 </td>
              <td>
                <NavLink to="../../educationPrograms/navigation2017">
                  {" "}
                  Судовождение (углубленная подготовка), 2017 года набора
                </NavLink>
              </td>
              <td>среднее профессиональное образование</td>
              <td>
                <NavLink to="../../educationPrograms/navigation2017">
                  {" "}
                  Судовождение (углубленная подготовка), 2017 года набора
                </NavLink>
              </td>
              <td>очно-заочная </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={OOP4} target={"_blank"} rel="noreferrer">
                      ООП для специальности 26.02.03 "Судовождение"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP6} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.03 "Судовождение", на базе 11 классов,
                      очная
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP7} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.03 "Судовождение", на базе 9 классов,
                      очная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Annot4} target={"_blank"} rel="noreferrer">
                      Аннотации к рабочим программам дисциплин для специальности
                      СПО 26.02.03 "Судовождение"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    {" "}
                    <NavLink to="../../educationPrograms/navigation2017">
                      {" "}
                      Судовождение (углубленная подготовка), 2017 года набора
                    </NavLink>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RP_260203} target={"_blank"} rel="noreferrer">
                      Рабочая программа учебной практики, (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_UCH_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      ФОС учебной практики (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики, (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_PR_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      ФОС производственной практики (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_PR_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики, (заочная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_Z_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа учебной практики (заочная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image10} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 11 классов, очная
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image11} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 9 классов, очная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_SV} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.03 "Судовождение"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260203
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260203 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.03 </td>
              <td>Судовождение</td>
              <td>среднее профессиональное образование</td>
              <td>Судовождение</td>
              <td>очно-заочная </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>26.02.06</td>
              <td>
                <NavLink to="../../educationPrograms/marineElectricalEquipment2020">
                  {" "}
                  "Эксплуатация судового электрооборудования и средств
                  автоматики", 2020 года набора
                </NavLink>
              </td>
              <td>среднее профессиональное образование </td>
              <td>
                <NavLink to="../../educationPrograms/marineElectricalEquipment2020">
                  {" "}
                  "Эксплуатация судового электрооборудования и средств
                  автоматики", 2020 года набора
                </NavLink>
              </td>{" "}
              <td>очная</td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={OOP5} target={"_blank"} rel="noreferrer">
                      ООП для специальности 26.02.06 "Эксплуатация судового
                      электрооборудования и средств автоматики"
                    </a>
                  </li>
                  <li className="doc__item">
                    <a href={SigOOP5} target={"_blank"} rel="noreferrer">
                      ЭЦП
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item" style={{ backgroundColor: "red" }}>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={"/"} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.06 "Эксплуатация судового
                      электрооборудования и средств автоматики", на базе 9
                      классов
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Annot5} target={"_blank"} rel="noreferrer">
                      Аннотации к рабочим программам дисциплин для специальности
                      СПО 26.02.06 "Эксплуатация судового электрооборудования и
                      средств автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <NavLink to="../../educationPrograms/marineElectricalEquipment2020">
                      {" "}
                      Рабочие программы дисциплин для специальности СПО 26.02.06
                      "Эксплуатация судового электрооборудования и средств
                      автоматики"
                    </NavLink>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RP_260206} target={"_blank"} rel="noreferrer">
                      Рабочая программа учебной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_UCH_PR_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по учебной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_PR_PR_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по производственной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_PR_PR_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа преддипломной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_Z_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по преддипломной практике
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image12} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.06
                      "Эксплуатация судового электрооборудования и средств
                      автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_EM} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.06 "Эксплуатация судового
                      электрооборудования и средств автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_EM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260206
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260206 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.06</td>
              <td>
                <NavLink to="../../educationPrograms/marineElectricalEquipment2019">
                  {" "}
                  "Эксплуатация судового электрооборудования и средств
                  автоматики", 2019 года набора
                </NavLink>
              </td>
              <td>среднее профессиональное образование </td>
              <td>
                <NavLink to="../../educationPrograms/marineElectricalEquipment2019">
                  {" "}
                  "Эксплуатация судового электрооборудования и средств
                  автоматики", 2019 года набора
                </NavLink>
              </td>
              <td>очная</td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={OOP6} target={"_blank"} rel="noreferrer">
                      ООП для специальности 26.02.06 "Эксплуатация судового
                      электрооборудования и средств автоматики"
                    </a>
                  </li>
                  <li className="doc__item">
                    <a href={SigOOP6} target={"_blank"} rel="noreferrer">
                      ЭЦП
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP9} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.06 "Эксплуатация судового
                      электрооборудования и средств автоматики", на базе 9
                      классов
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Annot6} target={"_blank"} rel="noreferrer">
                      Аннотации к рабочим программам дисциплин для специальности
                      СПО 26.02.06 "Эксплуатация судового электрооборудования и
                      средств автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <NavLink to="../../educationPrograms/marineElectricalEquipment2019">
                      {" "}
                      Рабочие программы дисциплин для специальности СПО 26.02.06
                      "Эксплуатация судового электрооборудования и средств
                      автоматики"
                    </NavLink>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RP_260206} target={"_blank"} rel="noreferrer">
                      Рабочая программа учебной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_UCH_PR_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по учебной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_PR_PR_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по производственной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_PR_PR_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа преддипломной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_Z_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по преддипломной практике
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image13} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.06
                      "Эксплуатация судового электрооборудования и средств
                      автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_EM} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.06 "Эксплуатация судового
                      электрооборудования и средств автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_EM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260206
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260206 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.06</td>
              <td>
                <NavLink to="../../educationPrograms/marineElectricalEquipment2018">
                  {" "}
                  "Эксплуатация судового электрооборудования и средств
                  автоматики", 2018 года набора
                </NavLink>
              </td>
              <td>среднее профессиональное образование </td>
              <td>
                <NavLink to="../../educationPrograms/marineElectricalEquipment2018">
                  {" "}
                  "Эксплуатация судового электрооборудования и средств
                  автоматики", 2018 года набора
                </NavLink>
              </td>
              <td>очная</td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={OOP7} target={"_blank"} rel="noreferrer">
                      ООП для специальности 26.02.06 "Эксплуатация судового
                      электрооборудования и средств автоматики"
                    </a>
                  </li>
                  <li className="doc__item">
                    <a href={SigOOP7} target={"_blank"} rel="noreferrer">
                      ЭЦП
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP10} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.06 "Эксплуатация судового
                      электрооборудования и средств автоматики", на базе 9
                      классов
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Annot7} target={"_blank"} rel="noreferrer">
                      Аннотации к рабочим программам дисциплин для специальности
                      СПО 26.02.06 "Эксплуатация судового электрооборудования и
                      средств автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <NavLink to="../../educationPrograms/marineElectricalEquipment2018">
                      {" "}
                      Рабочие программы дисциплин для специальности СПО 26.02.06
                      "Эксплуатация судового электрооборудования и средств
                      автоматики"
                    </NavLink>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RP_260206} target={"_blank"} rel="noreferrer">
                      Рабочая программа учебной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_UCH_PR_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по учебной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_PR_PR_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по производственной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_PR_PR_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа преддипломной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_Z_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по преддипломной практике
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image14} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.06
                      "Эксплуатация судового электрооборудования и средств
                      автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_EM} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.06 "Эксплуатация судового
                      электрооборудования и средств автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_EM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260206
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260206 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.06</td>
              <td>
                <NavLink to="../../educationPrograms/marineElectricalEquipment2017">
                  {" "}
                  "Эксплуатация судового электрооборудования и средств
                  автоматики", 2017 года набора
                </NavLink>
              </td>
              <td>среднее профессиональное образование </td>
              <td>
                <NavLink to="../../educationPrograms/marineElectricalEquipment2017">
                  {" "}
                  "Эксплуатация судового электрооборудования и средств
                  автоматики", 2017 года набора
                </NavLink>
              </td>
              <td>очная</td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={OOP8} target={"_blank"} rel="noreferrer">
                      ООП для специальности 26.02.06 "Эксплуатация судового
                      электрооборудования и средств автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP11} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.06 "Эксплуатация судового
                      электрооборудования и средств автоматики", на базе 9
                      классов
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Annot8} target={"_blank"} rel="noreferrer">
                      Аннотации к рабочим программам дисциплин для специальности
                      СПО 26.02.06 "Эксплуатация судового электрооборудования и
                      средств автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    {" "}
                    <NavLink to="../../educationPrograms/marineElectricalEquipment2017">
                      {" "}
                      Рабочие программы дисциплин для специальности СПО 26.02.06
                      "Эксплуатация судового электрооборудования и средств
                      автоматики"
                    </NavLink>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RP_260206} target={"_blank"} rel="noreferrer">
                      Рабочая программа учебной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_UCH_PR_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по учебной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_PR_PR_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по производственной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_PR_PR_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа преддипломной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_Z_260206}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по преддипломной практике
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image15} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.06
                      "Эксплуатация судового электрооборудования и средств
                      автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_EM} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.06 "Эксплуатация судового
                      электрооборудования и средств автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_EM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260206
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260206 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.06</td>
              <td>
                "Эксплуатация судового электрооборудования и средств автоматики"
              </td>
              <td>среднее профессиональное образование </td>
              <td>
                "Эксплуатация судового электрооборудования и средств автоматики"
              </td>
              <td>заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>26.02.06</td>
              <td>
                "Эксплуатация судового электрооборудования и средств автоматики"
              </td>
              <td>среднее профессиональное образование </td>
              <td>
                "Эксплуатация судового электрооборудования и средств автоматики"
              </td>{" "}
              <td>очно-заочная </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>26.02.05 </td>
              <td>
                <NavLink to="../../educationPrograms/shipPowerPlants2020">
                  "Эксплуатация судовых энергетических установок", 2020 года
                  набора
                </NavLink>
              </td>
              <td>среднее профессиональное образование</td>
              <td>
                <NavLink to="../../educationPrograms/shipPowerPlants2020">
                  "Эксплуатация судовых энергетических установок", 2020 года
                  набора
                </NavLink>
              </td>
              <td>очная/заочная </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={OOP9} target={"_blank"} rel="noreferrer">
                      ООП для специальности 26.02.05 "Эксплуатация судовых
                      энергетических установок"
                    </a>
                  </li>
                  <li className="doc__item">
                    <a href={SigOOP9} target={"_blank"} rel="noreferrer">
                      ЭЦП
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP12} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.05 "Эксплуатация судовых энергетических
                      установок" (очная/заочная){" "}
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Annot9} target={"_blank"} rel="noreferrer">
                      Аннотации к рабочим программам дисциплин для специальности
                      СПО 26.02.05 "Эксплуатация судовых энергетических
                      установок"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <NavLink to="../../educationPrograms/shipPowerPlants2020">
                      Рабочие программы дисциплин для специальности СПО 26.02.05
                      "Эксплуатация судовых энергетических установок"
                    </NavLink>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RP_260205} target={"_blank"} rel="noreferrer">
                      Рабочая программа учебной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_UCH_PR_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по учебной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_PR_PR_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по производственной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_PR_PR_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа учебной практики, заочная
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_Z_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики, заочная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image16} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.05
                      "Эксплуатация судовых энергетических установок"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_SM} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.05 "Эксплуатация судовых
                      энергетических установок"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_EM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260206
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260206 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.05 </td>
              <td>
                <NavLink to="../../educationPrograms/shipPowerPlants2019">
                  "Эксплуатация судовых энергетических установок", 2019 года
                  набора
                </NavLink>
              </td>
              <td>среднее профессиональное образование</td>
              <td>
                <NavLink to="../../educationPrograms/shipPowerPlants2019">
                  "Эксплуатация судовых энергетических установок", 2019 года
                  набора
                </NavLink>
              </td>
              <td>очная/заочная </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={OOP10} target={"_blank"} rel="noreferrer">
                      ООП для специальности 26.02.05 "Эксплуатация судовых
                      энергетических установок"
                    </a>
                  </li>
                  <li className="doc__item">
                    <a href={SigOOP10} target={"_blank"} rel="noreferrer">
                      ЭЦП
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP13} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.05 "Эксплуатация судовых энергетических
                      установок" (очная/заочная){" "}
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Annot10} target={"_blank"} rel="noreferrer">
                      Аннотации к рабочим программам дисциплин для специальности
                      СПО 26.02.05 "Эксплуатация судовых энергетических
                      установок"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <NavLink to="../../educationPrograms/shipPowerPlants2019">
                      Рабочие программы дисциплин для специальности СПО 26.02.05
                      "Эксплуатация судовых энергетических установок"
                    </NavLink>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RP_260205} target={"_blank"} rel="noreferrer">
                      Рабочая программа учебной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_UCH_PR_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по учебной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_PR_PR_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по производственной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_PR_PR_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа учебной практики, заочная
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_Z_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики, заочная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image17} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.05
                      "Эксплуатация судовых энергетических установок"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_SM} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.05 "Эксплуатация судовых
                      энергетических установок"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={FOS_IA_EM} target={"_blank"} rel="noreferrer">
                      Программа итоговой аттестации для специальности 260205
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={FOS_IA_SM} target={"_blank"} rel="noreferrer">
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260205 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.05 </td>
              <td>
                <NavLink to="../../educationPrograms/shipPowerPlants2018">
                  "Эксплуатация судовых энергетических установок" 2018 набора
                </NavLink>
              </td>
              <td>среднее профессиональное образование</td>
              <td>
                <NavLink to="../../educationPrograms/shipPowerPlants2018">
                  "Эксплуатация судовых энергетических установок" 2018 набора
                </NavLink>
              </td>{" "}
              <td>очная/заочная </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={OOP11} target={"_blank"} rel="noreferrer">
                      ООП для специальности 26.02.05 "Эксплуатация судовых
                      энергетических установок"
                    </a>
                  </li>
                  <li className="doc__item">
                    <a href={SigOOP11} target={"_blank"} rel="noreferrer">
                      ЭЦП
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP14} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.05 "Эксплуатация судовых энергетических
                      установок", на базе 9 классов, очная, на базе 11 классов,
                      заочная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Annot11} target={"_blank"} rel="noreferrer">
                      Аннотации к рабочим программам дисциплин для специальности
                      СПО 26.02.05 "Эксплуатация судовых энергетических
                      установок"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <NavLink to="../../educationPrograms/shipPowerPlants2018">
                      Рабочие программы дисциплин для специальности СПО 26.02.05
                      "Эксплуатация судовых энергетических установок"
                    </NavLink>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RP_260205} target={"_blank"} rel="noreferrer">
                      Рабочая программа учебной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_UCH_PR_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по учебной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_PR_PR_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по производственной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_PR_PR_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа учебной практики, заочная
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_Z_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики, заочная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image18} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.05
                      "Эксплуатация судовых энергетических установок", на базе 9
                      классов, очная
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image19} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.05
                      "Эксплуатация судовых энергетических установок", на базе
                      11 классов, заочная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_SM} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.05 "Эксплуатация судовых
                      энергетических установок"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={FOS_IA_EM} target={"_blank"} rel="noreferrer">
                      Программа итоговой аттестации для специальности 260205
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={FOS_IA_SM} target={"_blank"} rel="noreferrer">
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260205 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.05 </td>
              <td>
                <NavLink to="../../educationPrograms/shipPowerPlants2017">
                  "Эксплуатация судовых энергетических установок", 2016, 2017
                  годов набора
                </NavLink>
              </td>
              <td>среднее профессиональное образование</td>
              <td>
                <NavLink to="../../educationPrograms/shipPowerPlants2017">
                  "Эксплуатация судовых энергетических установок", 2016, 2017
                  годов набора
                </NavLink>
              </td>{" "}
              <td>очная/заочная </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={OOP12} target={"_blank"} rel="noreferrer">
                      ООП для специальности 26.02.05 "Эксплуатация судовых
                      энергетических установок"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP15} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.05 "Эксплуатация судовых энергетических
                      установок" (очная)
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP16} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.05 "Эксплуатация судовых энергетических
                      установок" (заочная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Annot12} target={"_blank"} rel="noreferrer">
                      Аннотации к рабочим программам дисциплин для специальности
                      СПО 26.02.05 "Эксплуатация судовых энергетических
                      установок"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <NavLink to="../../educationPrograms/shipPowerPlants2017">
                      Рабочие программы дисциплин для специальности СПО 26.02.05
                      "Эксплуатация судовых энергетических установок"
                    </NavLink>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RP_260205} target={"_blank"} rel="noreferrer">
                      Рабочая программа учебной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_UCH_PR_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по учебной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_PR_PR_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по производственной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_PR_PR_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа учебной практики, заочная
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_Z_260205}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики, заочная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image20} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.05
                      "Эксплуатация судовых энергетических установок", очная
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image21} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.05
                      "Эксплуатация судовых энергетических установок", заочная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_SM} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.05 "Эксплуатация судовых
                      энергетических установок"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={FOS_IA_EM} target={"_blank"} rel="noreferrer">
                      Программа итоговой аттестации для специальности 260205
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={FOS_IA_SM} target={"_blank"} rel="noreferrer">
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260205 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.05 </td>
              <td>"Эксплуатация судовых энергетических установок"</td>
              <td>среднее профессиональное образование</td>
              <td>"Эксплуатация судовых энергетических установок"</td>
              <td>очная-заочная </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>23.02.01</td>
              <td>
                <NavLink to="../../educationPrograms/organizationOfTransportation2020">
                  "Организация перевозок и управление на транспорте", 2020 года
                  набора
                </NavLink>
              </td>
              <td>среднее профессиональное образование</td>
              <td>
                <NavLink to="../../educationPrograms/organizationOfTransportation2020">
                  "Организация перевозок и управление на транспорте", 2020 года
                  набора
                </NavLink>
              </td>
              <td>очная/заочная </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={OOP13} target={"_blank"} rel="noreferrer">
                      Описание образовательной программы 23.02.01 "Организация
                      перевозок и управление на транспорте"
                    </a>
                  </li>
                  <li className="doc__item">
                    <a href={SigOOP13} target={"_blank"} rel="noreferrer">
                      ЭЦП
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP17} target={"_blank"} rel="noreferrer">
                      Учебный план 23.02.01 "Организация перевозок и управление
                      на транспорте"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={annot_OP} target={"_blank"} rel="noreferrer">
                      Аннотации к рабочим программам дисциплин для специальности
                      СПО 23.02.01 "Организация перевозок и управление на
                      транспорте"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <NavLink to="../../educationPrograms/organizationOfTransportation2020">
                      Рабочие программы дисциплин для специальности СПО 23.02.01
                      "Организация перевозок и управление на транспорте"
                    </NavLink>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RP_230201} target={"_blank"} rel="noreferrer">
                      Рабочая программа учебной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_UCH_PR_230201}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по учебной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_230201}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_PR_PR_230201}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по производственной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_PR_PR_230201}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа преддипломной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_Z_230201}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по преддипломной практике
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image22} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 23.02.01
                      "Организация и управление на транспорте" (по видам)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_OP} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 23.02.01 "Организация перевозок и
                      управление на транспорте (по видам)"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_OP}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 230201
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={FOS_IA_OP} target={"_blank"} rel="noreferrer">
                      Фонды оценочных средств итоговой аттестации для
                      специальности 230201 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>23.02.01</td>
              <td>
                <NavLink to="../../educationPrograms/organizationOfTransportation">
                  "Организация перевозок и управление на транспорте"
                </NavLink>
              </td>
              <td>среднее профессиональное образование</td>
              <td>
                <NavLink to="../../educationPrograms/organizationOfTransportation">
                  "Организация перевозок и управление на транспорте"
                </NavLink>
              </td>
              <td>заочная</td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={OOP14} target={"_blank"} rel="noreferrer">
                      Описание образовательной программы 23.02.01 "Организация
                      перевозок и управление на транспорте"
                    </a>
                  </li>
                  <li className="doc__item">
                    <a href={SigOOP14} target={"_blank"} rel="noreferrer">
                      ЭЦП
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP18} target={"_blank"} rel="noreferrer">
                      Учебный план 23.02.01 "Организация перевозок и управление
                      на транспорте"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={annot_OP_ZO} target={"_blank"} rel="noreferrer">
                      Аннотации к рабочим программам дисциплин для специальности
                      СПО 23.02.01 "Организация перевозок и управление на
                      транспорте"
                    </a>
                  </li>
                </ul>
                Аннотации к рабочим программам дисциплин для специальности СПО
                23.02.01 "Организация перевозок и управление на транспорте"
              </td>
              <td>
                <ul>
                  <li>
                    <NavLink to="../../educationPrograms/organizationOfTransportation">
                      Рабочие программы дисциплин для специальности СПО 23.02.01
                      "Организация перевозок и управление на транспорте"
                    </NavLink>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RP_230201} target={"_blank"} rel="noreferrer">
                      Рабочая программа учебной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_UCH_PR_230201}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по учебной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_230201}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_PR_PR_230201}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по производственной практике
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_PR_PR_230201}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа преддипломной практики
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_Z_230201}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонд оценочных средств по преддипломной практике
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image23} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 23.02.01
                      "Организация и управление на транспорте" (по видам)
                      (заочная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_OP} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 23.02.01 "Организация перевозок и
                      управление на транспорте (по видам)"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_OP}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 230201
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={FOS_IA_OP} target={"_blank"} rel="noreferrer">
                      Фонды оценочных средств итоговой аттестации для
                      специальности 230201 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        * Информация по реализуемым общеобразовательным программам: программа
        основного общего образования является частью Основных профессиональных
        образовательных программ СПО по специальностям
      </TableWrapper>

      <TableWrapper title="Информация по адаптированным образовательным программам:">
        {" "}
        <table>
          <tbody>
            <tr itemProp="eduAdOp">
              <td itemProp="eduCode">Код</td>
              <td itemProp="eduName">
                Наименование специальности, направления подготовки, шифр и
                наименование области науки, научной специальности
              </td>
              <td itemProp="eduLevel">
                Уровень образования: 1) высшее образование -бакалавриат; 2)
                высшее образование - специалитет; 3) высшее образование -
                магистратура; 4) высшее образование - подготовка кадров высшей
                квалификации; 5) среднее профессиональное образование
              </td>
              <td style={{ backgroundColor: "red" }} itemProp="eduProf">
                Образовательная программа, направленность, профиль, шифр и
                наименование научной специальности
              </td>
              <td itemProp="eduForm">
                Реализуемые формы обучения: 1) очная; 2) очно-заочная; 3)
                заочная
              </td>
              <td itemProp="opMain">
                Ссылка на описание образовательной программы с приложением ее
                копии
              </td>
              <td itemProp="educationPlan">Ссылка на учебный план</td>
              <td itemProp="educationAnnotation">
                Ссылка на аннотации к рабочим программам дисциплин (по каждой
                дисциплине в составе образовательной программы)
              </td>
              <td itemProp="educationShedule">
                Ссылка на календарный учебный график
              </td>
              <td itemProp="educationRpd">
                Ссылка на рабочие программы воспитания
              </td>
              <td itemProp="eduPr">
                Ссылка на календарный план воспитательной работы
              </td>
              <td itemProp="methodology">
                Ссылка на методические и иные документы, разработанные
                образовательной организацией для обеспечения образовательного
                процесса
              </td>
              <td>
                Использование при реализации образовательных программ
                электронного обучения и дистанционных образовательных технологий
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - бакалавриат</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
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
              <td>высшее образование - специалитет</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
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
              <td> высшее образование - магистратура</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
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
              <td>
                высшее образование - подготовка кадров высшей квалификации
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>26.02.03</td>
              <td>
                <NavLink to="../../educationPrograms/navigationDepth">
                  Судовождение (углубленная подготовка), на базе основного
                  общего образования (9 классов)
                </NavLink>
              </td>
              <td>среднее профессиональное образование</td>
              <td>
                <NavLink to="../../educationPrograms/navigationDepth">
                  Судовождение (углубленная подготовка), на базе основного
                  общего образования (9 классов)
                </NavLink>
              </td>
              <td>очная</td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={adOOP1} target={"_blank"} rel="noreferrer">
                      Адаптированная ООП для специальности 26.02.03
                      "Судовождение" на базе 9 классов
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={UP19} target={"_blank"} rel="noreferrer">
                      Учебный план 26.02.03 "Судовождение"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={adAnnot} target={"_blank"} rel="noreferrer">
                      Аннотации к рабочим программам дисциплин для специальности
                      СПО 26.02.03 "Судовождение"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <PDF height={"25px"} width={"25px"} />
                <a href={adkug_260203} target={"_blank"} rel="noreferrer">
                  Календарный учебный график для специальности 26.02.03
                  "Судовождение" (на базе 9 классов)
                </a>
              </td>
              <td>
                <ul>
                  <li>
                    <NavLink to="../../educationPrograms/navigationDepth">
                      Рабочие программы дисциплин для специальности СПО 26.02.03
                      "Судовождение"
                    </NavLink>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RP_260203} target={"_blank"} rel="noreferrer">
                      Рабочая программа учебной практики, (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_UCH_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      ФОС учебной практики (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики, (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_PR_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      ФОС производственной практики (очная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_PR_PR_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа производственной практики, (заочная)
                    </a>
                  </li>
                  <li>
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={RP_UCH_PR_Z_260203}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Рабочая программа учебной практики (заочная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_ucheb_prozess_ovz_2017}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об организации учебного процесса для инвалидов и
                      лиц с ограниченными возможностями здоровья
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologen_Fizra} target={"_blank"} rel="noreferrer">
                      Положение о порядке проведения и объеме учебных занятий по
                      физической культуре очно-заочной, заочной формам обучения,
                      а также для студентов инвалидов и лиц с ограниченными
                      возможностями здоровья
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260203
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li>
                    <a
                      href={Programma_IA_SV_uglublSig}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      ЭЦП{" "}
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260203 "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li>
                    <a
                      href={FOS_IA_SV_uglublSig}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      ЭЦП{" "}
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>

      <TableWrapper
        title=" Информация о направлениях и результатах научной
        (научно-исследовательской) деятельности:"
      >
        <table>
          <tbody>
            <tr itemProp="eduNir">
              <td itemProp="eduCode">Код, шифр</td>
              <td itemProp="eduName">
                Наименование специальности, направления подготовки, наименование
                группы научных специальностей
              </td>
              <td itemProp="perechenNir">
                Перечень научных направлений, в рамках которых ведется научная
                (научно-исследовательская) деятельность
              </td>
              <td itemProp="eduProf">
                Образовательная программа, направленность, профиль, шифр и
                наименование научной специальности
              </td>
              <td itemProp="eduLevel">Уровень образования</td>
              <td itemProp="napravNir">
                Название научного направления/научной школы
              </td>
              <td itemProp="resultNir">
                Результаты научной (научно-исследовательской) деятельности
              </td>
              <td itemProp="baseNir">
                Сведения о научно-исследовательской базе для осуществления
                научной (научно-исследовательской) деятельности
              </td>
            </tr>
            <tr>
              <td>26.02.03 </td>
              <td>Судовождение</td>
              <td rowspan="4">
                Инновационные технологии в преподавании дисциплин;
                Компетентностный подход в системе СПО
              </td>
              <td>Судовождение</td>
              <td rowspan="4">среднее профессиональное образование</td>
              <td>Судовождение</td>
              <td rowspan="4">
                Публикация статей в сборник ежегодной НПК преподавателей филиала
                «Инновационные технологии в преподавании дисциплин»; Участие в
                работе НПК, в том числе международного уровня (свыше 20
                публикаций); Защита кандидатской диссертации, публикация
                монографии; Участие в работе РУМО УГС 26.00.00; РУМО
                преподавателей БЖД и ОБЖ; Руководство исследовательской
                деятельностью курсантов – участников предметных и
                профессиональных олимпиад, конкурсов проф.мастерства
              </td>
              <td rowspan="4">
                Научно-образовательный портал Znanium (new.znanium.com)
                Электронно-библиотечная система "Лань" Электронная библиотечная
                система «Юрайт» biblio-online.ru Система дистанционного обучения
                «Парус» Комплект лицензионного программного обеспечения: •
                Операционные системы Windows XP, Windows 10, Windows 7 •
                Прикладные пакеты MS Office 2007; MS Office 2013 • Прикладные
                пакеты 1c:8.0, 1C:8.2, 1C:7.7; • Прикладные пакеты Finereader 7;
                • Прикладные пакеты Консультант плюс; • Прикладные пакеты
                WinRar; • Средства проектирования и разработки платформа 1С •
                Конфигурация 1С: АСУ Учебный процесс Компьютерная служба
                Компьютерный сервер Система видеоконференцсвязи Центр
                коллективного пользования информационным и коммуникационным
                оборудованием (компьютерные классы) Локальная сеть филиала
                Научно-образовательный центр (библиотека) Кабинет основ
                исследовательской деятельности Аудитория для проведения круглых
                столов, научных семинаров (музей им.В. Альбанова, каб.20)
              </td>
            </tr>
            <tr>
              <td>26.02.05</td>
              <td>Эксплуатация судовых энергетических установок</td>
              <td>Эксплуатация судовых энергетических установок</td>
              <td>Эксплуатация судовых энергетических установок</td>
            </tr>
            <tr>
              <td>26.02.06</td>
              <td>
                Эксплуатация судового электрооборудования и средств автоматики
              </td>
              <td>
                Эксплуатация судового электрооборудования и средств автоматики
              </td>
              <td>
                Эксплуатация судового электрооборудования и средств автоматики
              </td>
            </tr>
            <tr>
              <td>26.02.01</td>
              <td>
                Организация перевозок и управление на транспорте (по видам)
              </td>
              <td>
                Организация перевозок и управление на транспорте (по видам)
              </td>
              <td>
                Организация перевозок и управление на транспорте (по видам)
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>

      <ul>
        <a href={"Ustav"} target={"_blank"} rel="noreferrer">
          <li
            className="doc__item active__link"
            style={{ backgroundColor: "red" }}
          >
            Направления и результаты научной (научно-исследовательской)
            деятельности и научно-исследовательская база для ее осуществления
          </li>
        </a>
      </ul>
    </div>
  );
});
export default Education;
