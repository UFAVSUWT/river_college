import React from "react";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import astronom1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/astronom7.pdf";
import astronom1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/astronom7.pdf.sig";
import BGHD1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/BGHD7.pdf";
import BGHD1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/BGHD7.pdf";
import chimiya1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/chimiya7.pdf";
import chimiya1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/chimiya7.pdf.sig";
import elektronika1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/elektronika7.pdf";
import elektronika1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/elektronika7.pdf.sig";
import EOP1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/EOP7.pdf";
import EOP1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/EOP7.pdf.sig";
/* import expl_SEU1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/expl_SEU7.pdf";
import expl_SEU1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/expl_SEU7.pdf.sig";
 */ import filosof1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/filosof7.pdf";
import filosof1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/filosof7.pdf.sig";
import fiz_kult1_1kurs from "../../../../assets/pdf/educationPage/260206/workPrograms2018/fiz_kult7_1kurs.pdf";
import fiz_kult1_1kursSig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/fiz_kult7_1kurs.pdf.sig";
import fizika1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/fizika7.pdf";
import fizika1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/fizika7.pdf.sig";
import inform1_1kurs from "../../../../assets/pdf/educationPage/260206/workPrograms2018/inform7_1kurs.pdf";
import inform1_1kursSig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/inform7_1kurs.pdf.sig";
import inform1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/inform7.pdf";
import inform1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/inform7.pdf.sig";
import ingh_grafika1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/ingh_grafika7.pdf";
import ingh_grafika1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/ingh_grafika7.pdf.sig";
import inostr1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/inostr7.pdf";
import inostr1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/inostr7.pdf.sig";
import istor1_1kurs from "../../../../assets/pdf/educationPage/260206/workPrograms2018/istor7_1kurs.pdf";
import istor1_1kursSig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/istor7.pdf.sig";
import istor1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/istor7.pdf";
import istor1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/istor7.pdf.sig";
import literatura1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/liter7.pdf";
import literatura1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/liter7.pdf.sig";
import matem1_1kurs from "../../../../assets/pdf/educationPage/260206/workPrograms2018/matem7.pdf";
import matem1_1kursSig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/matem7_1kurs.pdf.sig";
import matem1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/matem7.pdf";
import matem1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/matem7.pdf.sig";
import mechanika1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/mechanika7.pdf";
import mechanika1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/mechanika7.pdf.sig";
import metrolog1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/metrolog7.pdf";
import metrolog1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/metrolog7.pdf.sig";
import OBGH1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/OBGH7.pdf";
import OBGH1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/OBGH7.pdf.sig";
import PM01_uprabl_expl1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/PM01_Techn_expl_sud_elekt7.pdf";
import PM01_uprabl_expl1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/PM01_Techn_expl_sud_elekt7.pdf.sig";
import PM02_obesp_bezop_plav1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/PM02_Org_rabot7.pdf";
import PM02_obesp_bezop_plav1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/PM02_Org_rabot7.pdf.sig";
import PM03_otrab_razm_gruza1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/PM03_obesp_bezop_plav7.pdf";
import PM03_otrab_razm_gruza1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/PM03_obesp_bezop_plav7.pdf.sig";
import PM04_analiz_effekt_sudna1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/PM04_Elektrik7.pdf";
import PM04_analiz_effekt_sudna1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/PM04_Elektrik7.pdf.sig";
/* import PM05_proffes1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/PM05_proffes7.pdf";
import PM05_proffes1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/PM05_proffes7.pdf.sig";
import POPD1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/POPD7.pdf";
import POPD1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/POPD7.pdf.sig";
 */ import prog_vospit1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/prog_vospit7.pdf";
import prog_vospit1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/prog_vospit7.pdf.sig";
/* import psocholog1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/psocholog7.pdf";
import psocholog1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/psocholog7.pdf.sig";
import russ_yaz1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/russ_yaz7.pdf";
import russ_yaz1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/russ_yaz7.pdf.sig";
 */ import TUS1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/TUS7.pdf";
import TUS1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/TUS7.pdf.sig";
import biolog2 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/biolog7.pdf";
import biolog2Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/biolog7.pdf.sig";
import geograf2 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/geograf7.pdf";
import geograf2Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/geograf7.pdf.sig";
import obshest2 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/obshest7.pdf";
import obshest2Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/obshest7.pdf.sig";
import fiz_kult1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/fiz_kult7.pdf";
import fiz_kult1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/fiz_kult7.pdf.sig";
import material1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/material7.pdf.sig";
import material1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/material7.pdf";
import ochr_truda1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/ochr_truda7.pdf";
import ochr_truda1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/ochr_truda7.pdf.sig";
import rus_yaz1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/rus_yaz7.pdf";
import rus_yaz1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/rus_yaz7.pdf.sig";
/* import rodn_yaz1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/rodn_yaz7.pdf";
import rodn_yaz1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/rodn_yaz7.pdf.sig";
 */ import TOE1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/TOE7.pdf";
import TOE1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/TOE7.pdf";
import expl_sudna1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/expl_sudna7.pdf";
import expl_sudna1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/expl_sudna7.pdf.sig";
import sudov_sv_navigac1 from "../../../../assets/pdf/educationPage/260206/workPrograms2018/sudov_sv_navigac7.pdf";
import sudov_sv_navigac1Sig from "../../../../assets/pdf/educationPage/260206/workPrograms2018/sudov_sv_navigac7.pdf.sig";

const MarineElectricalEquipment2018 = () => {
  return (
    <section className="workProgramm__wrapper">
      <h1>
        Основная профессиональная образовательная программа среднего
        профессионального образования для специальности 26.02.06 "Эксплуатация
        судового электрооборудования и средств автоматики" 2018 года набора
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
            <td>7</td>
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
            <td>8</td>
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
            <td>9</td>
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
            <td>10</td>
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
            <td>11</td>
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
            <td>12</td>
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
            <td>13</td>
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
            <td>14</td>
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
            <td>15</td>
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
            <td>16</td>
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
            <td>17</td>
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
            <td>18</td>
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
            <td>19</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={literatura1} target={"_blank"} rel="noreferrer">
                Литература
              </a>
            </td>
            <td>
              <a href={literatura1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>20</td>
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
            <td>22</td>
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
            <td>23</td>
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
            <td>24</td>
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
            <td>25</td>
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
            <td>26</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={ochr_truda1} target={"_blank"} rel="noreferrer">
                Охрана труда
              </a>
            </td>
            <td>
              <a href={ochr_truda1Sig} target={"_blank"} rel="noreferrer">
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
                ПМ.01 Техническая эксплуатация судового электрооборудования и
                средств автоматики
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
                ПМ.02 Организация работы коллектива исполнителей
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
                ПМ.03 Обеспечение безопасности плавания
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
                ПМ.04 Выполнение работы по профессии Электрик судовой
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
              <a href={rus_yaz1} target={"_blank"} rel="noreferrer">
                Русский язык
              </a>
            </td>
            <td>
              <a href={rus_yaz1Sig} target={"_blank"} rel="noreferrer">
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
              <a href={TOE1} target={"_blank"} rel="noreferrer">
                Теоретические основы электротехники
              </a>
            </td>
            <td>
              <a href={TOE1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>36</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={expl_sudna1} target={"_blank"} rel="noreferrer">
                Эксплуатация судна на вспомогательном уровне
              </a>
            </td>
            <td>
              <a href={expl_sudna1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
          <tr>
            <td>37</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={sudov_sv_navigac1} target={"_blank"} rel="noreferrer">
                Системы судовой связи и навигации
              </a>
            </td>
            <td>
              <a href={sudov_sv_navigac1Sig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default MarineElectricalEquipment2018;
