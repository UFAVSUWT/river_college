import React from "react";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import astronom1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/astronom10.pdf";
import astronom1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/astronom10.pdf.sig";
import BGHD1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/BGHD10.pdf";
import BGHD1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/BGHD10.pdf";
import chimiya1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/chimiya10.pdf";
import chimiya1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/chimiya10.pdf.sig";
import elektronika1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/elektronika10.pdf";
import elektronika1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/elektronika10.pdf.sig";
import EOP1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/EOP10.pdf";
import EOP1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/EOP10.pdf.sig";
/* import expl_SEU1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/expl_SEU10.pdf";
import expl_SEU1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/expl_SEU10.pdf.sig";
 */ import filosof1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/filosof10.pdf";
import filosof1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/filosof10.pdf.sig";
import fiz_kult1_1kurs from "../../../../assets/pdf/educationPage/260205/workPrograms2019/fiz_kult10_1kurs.pdf";
import fiz_kult1_1kursSig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/fiz_kult10_1kurs.pdf.sig";
import fizika1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/fisika10.pdf";
import fizika1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/fisika10.pdf.sig";
import inform1_1kurs from "../../../../assets/pdf/educationPage/260205/workPrograms2019/informatika10_1kurs.pdf";
import inform1_1kursSig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/informatika10_1kurs.pdf.sig";
import inform1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/informatika10.pdf";
import inform1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/informatika10.pdf.sig";
import ingh_grafika1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/ingh_grafika10.pdf";
import ingh_grafika1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/ingh_grafika10.pdf.sig";
import inostr1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/inostr10.pdf";
import inostr1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/inostr10.pdf.sig";
import istor1_1kurs from "../../../../assets/pdf/educationPage/260205/workPrograms2019/istoriya10_1kurs.pdf";
import istor1_1kursSig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/istoriya10.pdf.sig";
import istor1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/istoriya10.pdf";
import istor1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/istoriya10.pdf.sig";
/* import literatura1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/liter10.pdf";
import literatura1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/liter10.pdf.sig"; */
import matem1_1kurs from "../../../../assets/pdf/educationPage/260205/workPrograms2019/matem10.pdf";
import matem1_1kursSig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/matem10_1kurs.pdf.sig";
import matem1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/matem10.pdf";
import matem1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/matem10.pdf.sig";
import mechanika1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/mechanika10.pdf";
import mechanika1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/mechanika10.pdf.sig";
import metrolog1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/metrolog10.pdf";
import metrolog1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/metrolog10.pdf.sig";
import OBGH1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/obgh10.pdf";
import OBGH1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/obgh10.pdf.sig";
import PM01_uprabl_expl1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/PM01_expl_remont10.pdf";
import PM01_uprabl_expl1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/PM01_expl_remont10.pdf.sig";
import PM02_obesp_bezop_plav1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/PM02_obesp_bezop_plav10.pdf";
import PM02_obesp_bezop_plav1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/PM02_obesp_bezop_plav10.pdf.sig";
import PM03_otrab_razm_gruza1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/PM03_org_rab_struk10.pdf";
import PM03_otrab_razm_gruza1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/PM03_org_rab_struk10.pdf.sig";
import PM04_analiz_effekt_sudna1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/PM04_profes10.pdf";
import PM04_analiz_effekt_sudna1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/PM04_profes10.pdf.sig";
/* import PM05_proffes1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/PM05_proffes10.pdf";
import PM05_proffes1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/PM05_proffes10.pdf.sig";
import POPD1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/POPD10.pdf";
import POPD1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/POPD10.pdf.sig";
 */ import prog_vospit1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/prog_vospit10.pdf";
import prog_vospit1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/prog_vospit10.pdf.sig";
/* import psocholog1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/psocholog10.pdf";
import psocholog1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/psocholog10.pdf.sig";
import russ_yaz1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/russ_yaz10.pdf";
import russ_yaz1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/russ_yaz10.pdf.sig";
 */ import TUS1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/TUS10.pdf";
import TUS1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/TUS10.pdf.sig";
import biolog2 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/biologiya10.pdf";
import biolog2Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/biologiya10.pdf.sig";
import geograf2 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/geograf10.pdf";
import geograf2Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/geograf10.pdf.sig";
import obshest2 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/obshesv10.pdf";
import obshest2Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/obshesv10.pdf.sig";
import fiz_kult1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/fiz_kult10.pdf";
import fiz_kult1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/fiz_kult10.pdf.sig";
import material1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/materialoved10.pdf.sig";
import material1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/materialoved10.pdf";

/* import rus_yaz1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/rus_yaz10.pdf";
import rus_yaz1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/rus_yaz10.pdf.sig"; */
/* import rodn_yaz1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/rodn_yaz10.pdf";
import rodn_yaz1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/rodn_yaz10.pdf.sig";
 */
/* import ekolog1 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/ekolog10.pdf";
import ekolog1Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/ekolog10.pdf.sig";
import sudov_angl8 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/sudov_angl10.pdf";
import sudov_angl8Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/sudov_angl10.pdf.sig"; */
import expl_sudna11 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/expl_sudna10.pdf";
import expl_sudna11Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/expl_sudna10.pdf.sig";
import komp_grafika11 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/komp_grafika10.pdf";
import komp_grafika11Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/komp_grafika10.pdf.sig";
/* import rodn_liter11 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/rodn_liter11.pdf";
import rodn_liter11Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/rodn_liter11.pdf.sig";
 */ import russ_yaz10 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/russ_yaz10.pdf";
import russ_yaz10Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/russ_yaz10.pdf.sig";
import termodin11 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/termodin10.pdf";
import termodin11Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/termodin10.pdf.sig";
import gidravlika11 from "../../../../assets/pdf/educationPage/260205/workPrograms2019/gidravlika10.pdf";
import gidravlika11Sig from "../../../../assets/pdf/educationPage/260205/workPrograms2019/gidravlika10.pdf.sig";

const ShipPowerPlants2019 = () => {
  return (
    <section className="workProgramm__wrapper">
      <h1>
        Основная профессиональная образовательная программа среднего
        профессионального образования для специальности 26.02.05 "Эксплуатация
        судовых энергетических установок" 2019 года набора
      </h1>
      <h2>Рабочие программы</h2>
      <table>
        <thead>
          <tr>
            <th>№ п/п</th>
            <th>Наименование дисциплины</th>
            <th>ЭЦП</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={astronom1} target={"_blank"} rel="noreferrer">
                Астрономия
              </a>
            </td>
            <td>
              <a href={astronom1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={BGHD1} target={"_blank"} rel="noreferrer">
                Безопасность жизнидеятельности
              </a>
            </td>
            <td>
              <a href={BGHD1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={biolog2} target={"_blank"} rel="noreferrer">
                Биология
              </a>
            </td>
            <td>
              <a href={biolog2Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={chimiya1} target={"_blank"} rel="noreferrer">
                Химия
              </a>
            </td>
            <td>
              <a href={chimiya1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={elektronika1} target={"_blank"} rel="noreferrer">
                Электроника и электротехника
              </a>
            </td>
            <td>
              <a href={elektronika1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={expl_sudna11} target={"_blank"} rel="noreferrer">
                Эксплуатация судна на вспомогательном уровне
              </a>
            </td>
            <td>
              <a href={expl_sudna11Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={EOP1} target={"_blank"} rel="noreferrer">
                Экологические основы природопользования
              </a>
            </td>
            <td>
              <a href={EOP1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={filosof1} target={"_blank"} rel="noreferrer">
                Основы философии
              </a>
            </td>
            <td>
              <a href={filosof1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={fiz_kult1_1kurs} target={"_blank"} rel="noreferrer">
                Физическая культура, 1 курс
              </a>
            </td>
            <td>
              <a href={fiz_kult1_1kursSig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={fiz_kult1} target={"_blank"} rel="noreferrer">
                Физическая культура
              </a>
            </td>
            <td>
              <a href={fiz_kult1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={fizika1} target={"_blank"} rel="noreferrer">
                Физика
              </a>
            </td>
            <td>
              <a href={fizika1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={geograf2} target={"_blank"} rel="noreferrer">
                География
              </a>
            </td>
            <td>
              <a href={geograf2Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={inform1_1kurs} target={"_blank"} rel="noreferrer">
                Информатика, 1 курс
              </a>
            </td>
            <td>
              <a href={inform1_1kursSig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={inform1} target={"_blank"} rel="noreferrer">
                Информатика
              </a>
            </td>
            <td>
              <a href={inform1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={ingh_grafika1} target={"_blank"} rel="noreferrer">
                Инженерная графика
              </a>
            </td>
            <td>
              <a href={ingh_grafika1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={inostr1} target={"_blank"} rel="noreferrer">
                Иностранный язык, 1 курс
              </a>
            </td>
            <td>
              <a href={inostr1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={inostr1} target={"_blank"} rel="noreferrer">
                Иностранный язык
              </a>
            </td>
            <td>
              <a href={inostr1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={istor1_1kurs} target={"_blank"} rel="noreferrer">
                {" "}
                История, 1 курс
              </a>
            </td>
            <td>
              <a href={istor1_1kursSig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={istor1} target={"_blank"} rel="noreferrer">
                История
              </a>
            </td>
            <td>
              <a href={istor1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={komp_grafika11} target={"_blank"} rel="noreferrer">
                Компьютерная графика
              </a>
            </td>
            <td>
              <a href={komp_grafika11Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>21</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={matem1_1kurs} target={"_blank"} rel="noreferrer">
                Математика, 1 курс
              </a>
            </td>
            <td>
              <a href={matem1_1kursSig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>21</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={matem1} target={"_blank"} rel="noreferrer">
                Математика
              </a>
            </td>
            <td>
              <a href={matem1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>23</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={material1} target={"_blank"} rel="noreferrer">
                Материаловедение
              </a>
            </td>
            <td>
              <a href={material1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>24</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={mechanika1} target={"_blank"} rel="noreferrer">
                Механика
              </a>
            </td>
            <td>
              <a href={mechanika1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>25</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={metrolog1} target={"_blank"} rel="noreferrer">
                Метрология и стандартизация
              </a>
            </td>
            <td>
              <a href={metrolog1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>26</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={OBGH1} target={"_blank"} rel="noreferrer">
                Основы безопасности жизнедеятельности
              </a>
            </td>
            <td>
              <a href={OBGH1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>

          <tr>
            <td>27</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={obshest2} target={"_blank"} rel="noreferrer">
                Обществознание
              </a>
            </td>
            <td>
              <a href={obshest2Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>28</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={PM01_uprabl_expl1} target={"_blank"} rel="noreferrer">
                ПМ.01 Эксплуатация, техническое обслуживание и ремонт судового
                энергетического оборудования
              </a>
            </td>
            <td>
              <a href={PM01_uprabl_expl1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>29</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                href={PM02_obesp_bezop_plav1}
                target={"_blank"}
                rel="noreferrer"
              >
                ПМ.02 Обеспечение безопасности плавания
              </a>
            </td>
            <td>
              <a
                href={PM02_obesp_bezop_plav1Sig}
                target={"_blank"}
                rel="noreferrer"
              >
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>30</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                href={PM03_otrab_razm_gruza1}
                target={"_blank"}
                rel="noreferrer"
              >
                ПМ.03 Организация работы структурного подразделения
              </a>
            </td>
            <td>
              <a
                href={PM03_otrab_razm_gruza1Sig}
                target={"_blank"}
                rel="noreferrer"
              >
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>31</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a
                href={PM04_analiz_effekt_sudna1}
                target={"_blank"}
                rel="noreferrer"
              >
                ПМ.04 Выполнение работы по профессии Моторист
              </a>
            </td>
            <td>
              <a
                href={PM04_analiz_effekt_sudna1Sig}
                target={"_blank"}
                rel="noreferrer"
              >
                ЭЦП
              </a>
            </td>
          </tr>

          <tr>
            <td>32</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={"rodn_liter11"} target={"_blank"} rel="noreferrer">
                Литература
              </a>
            </td>
            <td>
              <a href={"rodn_liter11Sig"} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>

          <tr>
            <td>33</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={TUS1} target={"_blank"} rel="noreferrer">
                Теория и устройство судна
              </a>
            </td>
            <td>
              <a href={TUS1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>34</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={prog_vospit1} target={"_blank"} rel="noreferrer">
                Рабочая программа воспитания обучающихся
              </a>
            </td>
            <td>
              <a href={prog_vospit1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>35</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={russ_yaz10} target={"_blank"} rel="noreferrer">
                Русский язык
              </a>
            </td>
            <td>
              <a href={russ_yaz10Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>36</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={termodin11} target={"_blank"} rel="noreferrer">
                Термодинамика
              </a>
            </td>
            <td>
              <a href={termodin11Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>36</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={gidravlika11} target={"_blank"} rel="noreferrer">
                Гидравлика
              </a>
            </td>
            <td>
              <a href={gidravlika11Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default ShipPowerPlants2019;
