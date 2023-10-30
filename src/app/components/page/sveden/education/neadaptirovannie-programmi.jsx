import React from "react";
import TableWrapper from "../../../common/tableWrapper/TableWrapper";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import VOEkspluatSudEnergUstanovok_23_260506 from "./neadaptirovannieProgrammi/23_260506_VO_ekspluat-sud-energ-ustanovok";
import SPOSudovojdenie_20_260203 from "./neadaptirovannieProgrammi/20_260203_SPO_sudovojdenie";
import SPOSudovojdenie_19_260203 from "./neadaptirovannieProgrammi/19_260203_SPO_sudovojdenie";
import SPOSudovojdenie_19_Z_260203 from "./neadaptirovannieProgrammi/19_Z_260203_SPO_sudovojdenie";
import SPOEkspluatSudovEelectrooborud_20_260206 from "./neadaptirovannieProgrammi/20_260206_SPO_expluat_sudov_electroob";
import SPOEkspluatSudovEnergUstanovok_20_260205 from "./neadaptirovannieProgrammi/20_260205_SPO_expluat_sudov_energ_ustanovok";
import SPOOrganiz_perevoz_upravlenia_20_230201 from "./neadaptirovannieProgrammi/20_230201_SPO_organiz_perevoz_upravleniya";

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
          <SPOEkspluatSudovEelectrooborud_20_260206 PDF={PDF} />
          <SPOEkspluatSudovEnergUstanovok_20_260205 PDF={PDF} />
          <SPOOrganiz_perevoz_upravlenia_20_230201 PDF={PDF} />
        </tbody>
      </table>
      * Информация по реализуемым общеобразовательным программам: программа
      основного общего образования является частью Основных профессиональных
      образовательных программ СПО по специальностям
    </TableWrapper>
  );
};
export default NeadaptirovannieProgrammi;
