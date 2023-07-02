import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import pravila_priema from "../../../../assets/pdf/documentPage/local/1. Правила приема на обучение по образовательным программам среднего профессионального образования на 2023-24 учебный год.pdf";
import rejim_zanyatiy from "../../../../assets/pdf/documentPage/local/2. Режим занятий обучающихся.pdf";
import pravila_o_poryadke_sostav_raspis from "../../../../assets/pdf/documentPage/local/3. П. о порядке составления и исполнения расписания обуч.по уровню ВО.pdf";
import pravila_o_tek_kontrole_atest from "../../../../assets/pdf/documentPage/local/4. П. о текущем контроле и пром.аттестации.pdf";
import pravila_o_tek_kontrole_atest_dot from "../../../../assets/pdf/documentPage/local/5. П. о текущем контроле и промежуточ. аттестации обучающихся с применением ДОТ.PDF";
import pravila_ob_itog_atest from "../../../../assets/pdf/documentPage/local/6. П. об итоговой аттестации.pdf";
import pravila_ob_org_uch_proc from "../../../../assets/pdf/documentPage/local/7. П. об орг.учебного процесса для инвалидов и лиц с ОВЗ.pdf";
import pravila_o_perevode from "../../../../assets/pdf/documentPage/local/8. П. о переводе и восстановлении обучающихся.pdf";
import pravila_ob_otchis from "../../../../assets/pdf/documentPage/local/9. П. об отчислении обучающихся.pdf";
import pravila_priost_otn from "../../../../assets/pdf/documentPage/local/10. П.о порядке оформл, возникн., приост и прекр.отношений между ВГУВТ и обуч..pdf";
import pravila_vnutr_rasp from "../../../../assets/pdf/documentPage/local/11. Правила внутреннего распорядка обучающихся.pdf";
import pravila_org_sluzb from "../../../../assets/pdf/documentPage/local/12. Правила внутр.распорядка и орг-ции службы курсантов.pdf";
import HrLine from "../../../common/hrLine/HrLine";

const LocalActs = ({ isActive }) => {
  return (
    <>
      <div className={`${!isActive ? "doc_item-show" : "doc_item-hidden"}`}>
        <p>Документы, регламентирующие правила приема обучающихся</p>
        <ul>
          <li itemProp="ustavDocLink" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pravila_priema} target={"_blank"} rel="noreferrer">
              Правила приема на обучение по образовательным программам среднего
              профессионального образования
            </a>
          </li>
        </ul>
        <HrLine className="document__hrLine" />
        <p>Документы, регламентирующие режим занятий обучающихся</p>
        <ul>
          <li itemProp="ustavDocLink" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={rejim_zanyatiy} target={"_blank"} rel="noreferrer">
              Режим занятий обучающихся
            </a>
          </li>
          <li itemProp="ustavDocLink" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a
              href={pravila_o_poryadke_sostav_raspis}
              target={"_blank"}
              rel="noreferrer"
            >
              Положение о порядке составления и исполнения расписания и контроле
              учебных занятий обучающихся по уровню ВО
            </a>
          </li>
        </ul>
        <HrLine className="document__hrLine" />
        <p>
          Документы, регламентирующие формы, периодичность и порядок текущего
          контроля успеваемости и промежуточной аттестации обучающихся
        </p>
        <ul>
          <li itemProp="ustavDocLink" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a
              href={pravila_o_tek_kontrole_atest}
              target={"_blank"}
              rel="noreferrer"
            >
              Положение о проведении текущего контроля и промежуточной
              аттестации
            </a>
          </li>
          <li itemProp="ustavDocLink" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a
              href={pravila_o_tek_kontrole_atest_dot}
              target={"_blank"}
              rel="noreferrer"
            >
              Положение о текущем контроле и промежуточной аттестации
              обучающихся с применением дистанционных образовательных технологий
            </a>
          </li>
          <li itemProp="ustavDocLink" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pravila_ob_itog_atest} target={"_blank"} rel="noreferrer">
              Положение об итоговой аттестации
            </a>
          </li>
          <li itemProp="ustavDocLink" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a
              href={pravila_ob_org_uch_proc}
              target={"_blank"}
              rel="noreferrer"
            >
              Положение об организации учебного процесса для инвалидов и лиц с
              ОВЗ
            </a>
          </li>
        </ul>
        <HrLine className="document__hrLine" />
        <p>
          Документы, регламентирующие порядок и основания перевода, отчисления и
          восстановления обучающихся
        </p>
        <ul>
          <li itemProp="ustavDocLink" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pravila_o_perevode} target={"_blank"} rel="noreferrer">
              Положение о переводе и восстановлении обучающихся
            </a>
          </li>
          <li itemProp="ustavDocLink" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pravila_ob_otchis} target={"_blank"} rel="noreferrer">
              Положение об отчислении обучающихся
            </a>
          </li>
        </ul>
        <HrLine className="document__hrLine" />
        <p>
          Документы, регламентирующие порядок оформления возникновения,
          приостановления и прекращения отношений между образовательной
          организацией, обучающимися и (или) родителями (законными
          представителями) несовершеннолетних обучающихся
        </p>
        <ul>
          <li itemProp="ustavDocLink" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pravila_priost_otn} target={"_blank"} rel="noreferrer">
              Положение о порядке оформления, возникновения, приостановления и
              прекращения отношений между ФГБОУ ВО ВГУВТ и обучающимися и(или)
              родителями
            </a>
          </li>
        </ul>
        <HrLine className="document__hrLine" />
        <p>Правила внутреннего распорядка обучающихся</p>
        <ul>
          <li itemProp="ustavDocLink" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pravila_vnutr_rasp} target={"_blank"} rel="noreferrer">
              Правила внутреннего распорядка обучающихся
            </a>
          </li>
          <li itemProp="ustavDocLink" className="doc__item">
            <PDF height={"40px"} width={"40px"} />
            <a href={pravila_org_sluzb} target={"_blank"} rel="noreferrer">
              Правила внутреннего распорядка и организации службы курсантов
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
LocalActs.propTypes = {
  isActive: PropTypes.bool,
};
export default LocalActs;
