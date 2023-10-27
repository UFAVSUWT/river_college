import React from "react";
import TableWrapper from "../../../common/tableWrapper/TableWrapper";
import { NavLink } from "react-router-dom";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import Pologenie_attest_vipusk from "../../../../assets/pdf/educationPage/260203/Pologenie_attest_vipusk.pdf";
import Pologenie_OOP from "../../../../assets/pdf/educationPage/260203/Pologenie_OOP.pdf";
import Programma_IA_SM from "../../../../assets/pdf/educationPage/260206/Programma_IA_SM.pdf";
import Programma_IA_EM from "../../../../assets/pdf/educationPage/260206/Programma_IA_EM.pdf";
import FOS_IA_EM from "../../../../assets/pdf/educationPage/260205/FOS_IA_EM.pdf";
import FOS_IA_SM from "../../../../assets/pdf/educationPage/260205/FOS_IA_SM.pdf";
import FOS_IA_OP from "../../../../assets/pdf/educationPage/230201/FOS_IA_OP.pdf";
import Programma_IA_OP from "../../../../assets/pdf/educationPage/230201/Programma_IA_OP.pdf";
import RPV_OP from "../../../../assets/pdf/educationPage/230201/RPV_OP.pdf";
import RPV_SM from "../../../../assets/pdf/educationPage/260205/RPV_SM.pdf";
import RPV_EM from "../../../../assets/pdf/educationPage/260206/RPV_EM.pdf";
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

import KPV from "../../../../assets/pdf/educationPage/KPV.pdf";
import Pologenie_Parus from "../../../../assets/pdf/educationPage/Pologenie_Parus.pdf";
import Pologhenie_DO from "../../../../assets/pdf/educationPage/Pologhenie_DO.pdf";
import Pologhenie_EL_Sreda from "../../../../assets/pdf/educationPage/Pologhenie_EL_Sreda.pdf";
import Pologhenie_kontrolDO from "../../../../assets/pdf/educationPage/Pologhenie_kontrolDO.pdf";
import VOEkspluatSudEnergUstanovok_23_260506 from "./neadaptirovannieProgrammi/23_260506_VO_ekspluat-sud-energ-ustanovok";
import SPOSudovojdenie_20_260203 from "./neadaptirovannieProgrammi/20_260203_SPO_sudovojdenie";
import SPOSudovojdenie_19_260203 from "./neadaptirovannieProgrammi/19_260203_SPO_sudovojdenie";
import SPOSudovojdenie_19_Z_260203 from "./neadaptirovannieProgrammi/19_Z_260203_SPO_sudovojdenie";

const NeadaptirovannieProgrammi = () => {
  return (
    <TableWrapper title="Информация по неадаптированным образовательным программам:">
      <table>
        <tbody>
          <tr itemProp="eduOp">
            <td itemProp="eduCode">Код</td>
            <td itemProp="eduName">
              Наименование профессии, специальности, направления подготовки,
              наименование группы научных специальностей
            </td>
            <td itemProp="eduLevel">Уровень образования</td>
            <td itemProp="eduProf">
              Образовательная программа, направленность, профиль, шифр и
              наименование научной специальности
            </td>
            <td itemProp="eduForm">Реализуемые формы обучения</td>
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
              Ссылки на рабочие программы (по каждой дисциплине в составе
              образовательной программы)
            </td>
            <td itemProp="educationShedule">
              Ссылка на календарный учебный график
            </td>
            <td itemProp="eduPr">
              Ссылка на рабочие программы практик, предусмотренных
              соответствующей образовательной программой
            </td>
            <td itemProp="">Ссылка на рабочие программы воспитания</td>
            <td itemProp="">
              Ссылка на календарный план воспитательной работы
            </td>
            <td itemProp="methodology">
              Ссылка на методические и иные документы, разработанные для
              обеспечения образовательного процесса
            </td>
          </tr>
          <VOEkspluatSudEnergUstanovok_23_260506 PDF={PDF} />
          <SPOSudovojdenie_20_260203 PDF={PDF} />
          <SPOSudovojdenie_19_260203 PDF={PDF} />
          <SPOSudovojdenie_19_Z_260203 PDF={PDF} />
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
                    электрооборудования и средств автоматики", на базе 9 классов
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
                  <a href={RP_UCH_PR_260206} target={"_blank"} rel="noreferrer">
                    Рабочая программа производственной практики
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={FOS_PR_PR_260206} target={"_blank"} rel="noreferrer">
                    Фонд оценочных средств по производственной практике
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={RP_PR_PR_260206} target={"_blank"} rel="noreferrer">
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
                  <a href={Programma_IA_EM} target={"_blank"} rel="noreferrer">
                    Программа итоговой аттестации для специальности 260206
                    "Судовождение" (углубленная)
                  </a>
                </li>
                <li className="doc__item">
                  <PDF height={"25px"} width={"25px"} />
                  <a href={Programma_IA_SM} target={"_blank"} rel="noreferrer">
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
                  <a href={Pologenie_Parus} target={"_blank"} rel="noreferrer">
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
                    Положение об электронной информационно-образовательной среде
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
                    электрооборудования и средств автоматики", на базе 9 классов
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
                  <a href={RP_UCH_PR_260206} target={"_blank"} rel="noreferrer">
                    Рабочая программа производственной практики
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={FOS_PR_PR_260206} target={"_blank"} rel="noreferrer">
                    Фонд оценочных средств по производственной практике
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={RP_PR_PR_260206} target={"_blank"} rel="noreferrer">
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
                  <a href={Programma_IA_EM} target={"_blank"} rel="noreferrer">
                    Программа итоговой аттестации для специальности 260206
                    "Судовождение" (углубленная)
                  </a>
                </li>
                <li className="doc__item">
                  <PDF height={"25px"} width={"25px"} />
                  <a href={Programma_IA_SM} target={"_blank"} rel="noreferrer">
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
                  <a href={Pologenie_Parus} target={"_blank"} rel="noreferrer">
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
                    Положение об электронной информационно-образовательной среде
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
                    электрооборудования и средств автоматики", на базе 9 классов
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
                  <a href={RP_UCH_PR_260206} target={"_blank"} rel="noreferrer">
                    Рабочая программа производственной практики
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={FOS_PR_PR_260206} target={"_blank"} rel="noreferrer">
                    Фонд оценочных средств по производственной практике
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={RP_PR_PR_260206} target={"_blank"} rel="noreferrer">
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
                  <a href={Programma_IA_EM} target={"_blank"} rel="noreferrer">
                    Программа итоговой аттестации для специальности 260206
                    "Судовождение" (углубленная)
                  </a>
                </li>
                <li className="doc__item">
                  <PDF height={"25px"} width={"25px"} />
                  <a href={Programma_IA_SM} target={"_blank"} rel="noreferrer">
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
                  <a href={Pologenie_Parus} target={"_blank"} rel="noreferrer">
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
                    Положение об электронной информационно-образовательной среде
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
                    электрооборудования и средств автоматики", на базе 9 классов
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
                  <a href={RP_UCH_PR_260206} target={"_blank"} rel="noreferrer">
                    Рабочая программа производственной практики
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={FOS_PR_PR_260206} target={"_blank"} rel="noreferrer">
                    Фонд оценочных средств по производственной практике
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={RP_PR_PR_260206} target={"_blank"} rel="noreferrer">
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
                  <a href={Programma_IA_EM} target={"_blank"} rel="noreferrer">
                    Программа итоговой аттестации для специальности 260206
                    "Судовождение" (углубленная)
                  </a>
                </li>
                <li className="doc__item">
                  <PDF height={"25px"} width={"25px"} />
                  <a href={Programma_IA_SM} target={"_blank"} rel="noreferrer">
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
                  <a href={Pologenie_Parus} target={"_blank"} rel="noreferrer">
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
                    Положение об электронной информационно-образовательной среде
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
                    СПО 26.02.05 "Эксплуатация судовых энергетических установок"
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
                  <a href={RP_UCH_PR_260205} target={"_blank"} rel="noreferrer">
                    Рабочая программа производственной практики
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={FOS_PR_PR_260205} target={"_blank"} rel="noreferrer">
                    Фонд оценочных средств по производственной практике
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={RP_PR_PR_260205} target={"_blank"} rel="noreferrer">
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
                  <a href={Programma_IA_EM} target={"_blank"} rel="noreferrer">
                    Программа итоговой аттестации для специальности 260206
                    "Судовождение" (углубленная)
                  </a>
                </li>
                <li className="doc__item">
                  <PDF height={"25px"} width={"25px"} />
                  <a href={Programma_IA_SM} target={"_blank"} rel="noreferrer">
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
                  <a href={Pologenie_Parus} target={"_blank"} rel="noreferrer">
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
                    Положение об электронной информационно-образовательной среде
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
                    СПО 26.02.05 "Эксплуатация судовых энергетических установок"
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
                  <a href={RP_UCH_PR_260205} target={"_blank"} rel="noreferrer">
                    Рабочая программа производственной практики
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={FOS_PR_PR_260205} target={"_blank"} rel="noreferrer">
                    Фонд оценочных средств по производственной практике
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={RP_PR_PR_260205} target={"_blank"} rel="noreferrer">
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
                  <a href={Pologenie_Parus} target={"_blank"} rel="noreferrer">
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
                    Положение об электронной информационно-образовательной среде
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
                    СПО 26.02.05 "Эксплуатация судовых энергетических установок"
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
                  <a href={RP_UCH_PR_260205} target={"_blank"} rel="noreferrer">
                    Рабочая программа производственной практики
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={FOS_PR_PR_260205} target={"_blank"} rel="noreferrer">
                    Фонд оценочных средств по производственной практике
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={RP_PR_PR_260205} target={"_blank"} rel="noreferrer">
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
                    "Эксплуатация судовых энергетических установок", на базе 11
                    классов, заочная
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
                  <a href={Pologenie_Parus} target={"_blank"} rel="noreferrer">
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
                    Положение об электронной информационно-образовательной среде
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
                    СПО 26.02.05 "Эксплуатация судовых энергетических установок"
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
                  <a href={RP_UCH_PR_260205} target={"_blank"} rel="noreferrer">
                    Рабочая программа производственной практики
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={FOS_PR_PR_260205} target={"_blank"} rel="noreferrer">
                    Фонд оценочных средств по производственной практике
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={RP_PR_PR_260205} target={"_blank"} rel="noreferrer">
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
                  <a href={Pologenie_Parus} target={"_blank"} rel="noreferrer">
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
                    Положение об электронной информационно-образовательной среде
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
                    Учебный план 23.02.01 "Организация перевозок и управление на
                    транспорте"
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
                  <a href={RP_UCH_PR_230201} target={"_blank"} rel="noreferrer">
                    Рабочая программа производственной практики
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={FOS_PR_PR_230201} target={"_blank"} rel="noreferrer">
                    Фонд оценочных средств по производственной практике
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={RP_PR_PR_230201} target={"_blank"} rel="noreferrer">
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
                    (специальности) 23.02.01 "Организация перевозок и управление
                    на транспорте (по видам)"
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
                  <a href={Programma_IA_OP} target={"_blank"} rel="noreferrer">
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
                  <a href={Pologenie_Parus} target={"_blank"} rel="noreferrer">
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
                    Положение об электронной информационно-образовательной среде
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
                    Учебный план 23.02.01 "Организация перевозок и управление на
                    транспорте"
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
                  <a href={RP_UCH_PR_230201} target={"_blank"} rel="noreferrer">
                    Рабочая программа производственной практики
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={FOS_PR_PR_230201} target={"_blank"} rel="noreferrer">
                    Фонд оценочных средств по производственной практике
                  </a>
                </li>
                <li>
                  <PDF height={"25px"} width={"25px"} />
                  <a href={RP_PR_PR_230201} target={"_blank"} rel="noreferrer">
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
                    (специальности) 23.02.01 "Организация перевозок и управление
                    на транспорте (по видам)"
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
                  <a href={Programma_IA_OP} target={"_blank"} rel="noreferrer">
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
                  <a href={Pologenie_Parus} target={"_blank"} rel="noreferrer">
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
                    Положение об электронной информационно-образовательной среде
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
  );
};
export default NeadaptirovannieProgrammi;
