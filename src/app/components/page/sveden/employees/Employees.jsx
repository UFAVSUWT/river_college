import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName, toggleFontSize } from "../../../../utils/disabled";
import TableWrapper from "../../../common/tableWrapper/TableWrapper";
const Employees = observer(() => {
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
        Руководство. Педагогический (научно-педагогический) состав
      </h1>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о руководителе/заместителях руководителя Уфимского филиала
        ФГБОУ ВО "ВГУВТ"
      </h3>
      <TableWrapper>
        <table className="">
          <tbody>
            <tr>
              <td>ФИО</td>
              <td>Должность</td>
              <td>Контактные телефоны</td>
              <td>Адреса электронной почты</td>
            </tr>
            <tr itemProp="rucovodstvo">
              <td itemProp="fio">Ахмадеева Фарида Шариповна </td>
              <td itemProp="post">Директор </td>
              <td itemProp="telephone">8 (347) 278-28-83 </td>
              <td itemProp="email">uf-vsuwt@uf-vsuwt.ru</td>
            </tr>
            <tr itemProp="rucovodstvo">
              <td itemProp="fio">Мусина Гульфия Ириковна </td>
              <td itemProp="post">Заместитель директора </td>
              <td itemProp="telephone">8 (347) 278-28-86 </td>
              <td itemProp="email">pur@uf-vsuwt.ru</td>
            </tr>
            <tr itemProp="rucovodstvo">
              <td itemProp="fio">Акбашева Альбина Галимзяновна </td>
              <td itemProp="post">Заместитель директора </td>
              <td itemProp="telephone">8 (347) 278-28-86 </td>
              <td itemProp="email">pvr@uf-vsuwt.ru</td>
            </tr>
            <tr itemProp="rucovodstvo">
              <td itemProp="fio">Жоссан Елена Евгеньевна </td>
              <td itemProp="post">Главный бухгалтер </td>
              <td itemProp="telephone">8 (347) 278-03-25 </td>
              <td itemProp="email">buh@uf-vsuwt.ru</td>
            </tr>
            <tr itemProp="rucovodstvo">
              <td itemProp="fio">Мукимов Ралиф Фаритович</td>
              <td itemProp="post">
                Начальник центра организационно-правовой работы{" "}
              </td>
              <td itemProp="telephone">
                8 (347) 278-28-83, 278-28-86, вн.110{" "}
              </td>
              <td itemProp="email">copr@uf-vsuwt.ru</td>
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
        Информация о руководителях филиалов Уфимского филиала ФГБОУ ВО "ВГУВТ"
        (при наличии)
      </h3>
      Уфимский филиал ФГБОУ ВО "ВГУВТ" филиалов не имеет.
      <table className="">
        <tbody>
          <tr>
            <td>Наименование филиала</td>
            <td>-</td>
          </tr>
          <tr>
            <td>ФИО</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Должность</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Контактные телефоны</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Адреса электронной почты</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о составе педагогических (научно-педагогических) работников
        Уфимского филиала ФГБОУ ВО "ВГУВТ"
      </h3>
      <ul>
        <li className="doc__item">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Информация о составе педагогических (научно-педагогических)
            работников Уфимского филиала ФГБОУ ВО "ВГУВТ" ЭЦП
          </a>
        </li>
      </ul>
      <TableWrapper>
        <table>
          <tbody>
            <tr>
              <td>ФИО преподавателя, реализующего программу </td>
              <td>Должность преподавателя </td>
              <td>
                Перечень преподаваемых учебных предметов, курсов, дисциплин
                (модулей){" "}
              </td>
              <td>
                Наименование специальности (специальностей), направления
                (направлений) подготовки профессиональной образовательной
                программы высшего образования, шифр и наименование области
                науки, научной специальности программы (программ) подготовки
                научных и научно-педагогических кадров в аспирантуре, в в
                реализации которых участвует педагогический работник{" "}
              </td>
              <td>Уровень образования </td>
              <td>Квалификация</td>
              <td>
                Ученая степень педагогического работника (при наличии) с
                указанием шифра и наименования научной специальности{" "}
              </td>
              <td>
                Ученое звание педагогического работника (при наличии) с
                указанием шифра и наименования научной специальности{" "}
              </td>
              <td>
                Наименование направления подготовки и (или) специальности
                педагогического работника{" "}
              </td>
              <td>
                Сведения о повышении квалификации и (или) профессиональной
                переподготовке педагогического работника (при наличии){" "}
              </td>
              <td>Общий стаж работы </td>
              <td>Стаж работы педагогического работника по специальности</td>
            </tr>
            <tr>
              <td itemProp="teachingOp" colSpan="12">
                26.02.03 «Судовождение» (углубленная подготовка)
              </td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Абкадиров Ильдар Ангамович </td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории{" "}
              </td>
              <td itemProp="teachingDiscipline">
                Мореходная астрономия; Радионавигационные системы;
                Радиооборудование судов; РЛС И САРП ; Судов. Радиооборудование и
                ГМССБ; ЭНП и С{" "}
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер - судоводитель</td>
              <td>-</td>
              <td>-</td>
              <td>Судовождение на морских путях </td>
              <td>
                "Особенности деятельности педагогических работников СПО в свете
                требований профессионального стандарта"(2020); "Оказание первой
                медицинской помощи"(2020) .{" "}
              </td>
              <td itemProp="genExperience">27</td>
              <td itemProp="specExperience">22</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Акбарова Залия Шамсуновна </td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории{" "}
              </td>
              <td itemProp="teachingDiscipline">Математика </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Учитель физики и математики </td>
              <td itemProp="degree">Кандидат педагогических наук </td>
              <td>-</td>
              <td>Физика и математика</td>
              <td itemProp="profDevelopment">
                "Математика: Методика обучения в основной и средней школе в
                условиях реализации ФГОС ОО" (2019); "Оказание первой
                медицинской помощи" (2020){" "}
              </td>
              <td itemProp="genExperience">23</td>
              <td itemProp="specExperience">22</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Акбашева Альбина Галимзяновна</td>
              <td itemProp="post">Заместитель директора</td>
              <td itemProp="teachingDiscipline">ПОПД</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Магистр «Специалист по государственному и муниципальному
                управлению»
              </td>
              <td>-</td>
              <td>-</td>
              <td>
                Экономика. Переподготовка "Специалист по государственному и
                муниципальному управлению"
              </td>
              <td>-</td>
              <td itemProp="genExperience">12</td>
              <td itemProp="specExperience">10</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Арсланова Наталья Анатольевна</td>
              <td itemProp="post">Медицинская сестра</td>
              <td itemProp="teachingDiscipline">
                ОБЖ. Основы мед. знаний, Безопасность жизнедеятельности (Основы
                Медицинских знаний), Иностранный язык
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Сестринское дело (медицинская сестра) Лингвист, переводчик
                немецкого и английского языка
              </td>
              <td>-</td>
              <td>-</td>
              <td>Сестринское дело Перевод и переводоведение</td>
              <td itemProp="profDevelopment">
                «Проведение предсменных, предрейсовых и послесменных,
                послерейсовых медицинских осмотров» (2020)
              </td>
              <td itemProp="genExperience">14</td>
              <td itemProp="specExperience">3</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Ахметшин Максут Раянович </td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории{" "}
              </td>
              <td itemProp="teachingDiscipline">
                Метрология и стандартизация, Механика{" "}
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер-механик </td>
              <td>-</td>
              <td>-</td>
              <td>Механизация сельского хозяйства</td>
              <td itemProp="profDevelopment">
                Стажировка на учебном судне-тренажере "Штурман Альбанов" по теме
                "Эксплуатация судовых энергетических установок, эксплуатация
                судового электрооборудования и средств автоматики"(2019);
                "Использование инновационных интерактивных технологий в системе
                СПО" (2019); "Подготовка по оказанию первой медицинской помощи"
                (2019); "Организация и сопровождение инклюзивного образования"
                (2019) ; "Особенности деятельности педагогических работников СПО
                в свете требований профессионального стандарта"(2020){" "}
              </td>
              <td itemProp="genExperience">31</td>
              <td itemProp="specExperience">19</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Белобородова Наталья Павловна </td>
              <td itemProp="post">
                Начальник отдела конвенционной подготовки и дополнительного
                образования{" "}
              </td>
              <td itemProp="teachingDiscipline">Инженерная графика </td>
              <td itemProp="employeeQualification"> -</td>
              <td itemProp="teachingLevel">Высшее </td>
              <td itemProp="teachingQual"> Инженер - механик</td>
              <td>-</td>
              <td>-</td>
              <td>Авиационные двигатели</td>
              <td>-</td>
              <td itemProp="genExperience">42</td>
              <td itemProp="specExperience">31</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Бублис Юрий Федорович </td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории{" "}
              </td>
              <td itemProp="teachingDiscipline">
                СВМ и системы, теория устройства судна Обслуживание и ремонт
                судовых энергетических установок{" "}
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер кораблестроитель</td>
              <td>-</td>
              <td>-</td>
              <td>Судостроение и судоремонт</td>
              <td itemProp="profDevelopment">
                "Педагогика и психология в системе СПО" (2021)
              </td>
              <td itemProp="genExperience">50</td>
              <td itemProp="specExperience">22</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Гайнетдинова Эльвера Галихановна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                СЭУ (включая тренажер машинного отделения),Судовые
                энергетические установки и их эксплуатация (включая тренажер
                вахтенного механика)
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel"> Высшее</td>
              <td itemProp="teachingQual">Инженер-механик</td>
              <td>-</td>
              <td>-</td>
              <td>«Судовые машины и механизмы»</td>
              <td itemProp="profDevelopment">
                "Педагогика и психология в системе СПО" (2021)
              </td>
              <td itemProp="genExperience">42</td>
              <td itemProp="specExperience">40</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Галлямова Раушания Харисовна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Физика</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Физик</td>
              <td>-</td>
              <td>-</td>
              <td>Физика</td>
              <td>-</td>
              <td itemProp="genExperience">27</td>
              <td itemProp="specExperience">21</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Гарифуллина Зульфия Муратовна</td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                Иностранный язык; Родной язык/ родная литература
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Учитель башкирского языка, литературы и английского языка.
              </td>
              <td>-</td>
              <td>-</td>
              <td>Родной язык, литература и иностранный язык</td>
              <td>-</td>
              <td itemProp="genExperience">12</td>
              <td itemProp="specExperience">6</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Гафаров Ильшат Радмирович</td>
              <td itemProp="post">Руководитель физического воспитания</td>
              <td itemProp="teachingDiscipline">Физическая культура</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                специалист по адаптивной физической культуре
              </td>
              <td>-</td>
              <td>-</td>
              <td>
                Физическая культура для лиц с отклонениями в состоянии здоровья
                (Адаптивная физическая культура)
              </td>
              <td itemProp="profDevelopment">
                "Организационно-методические основы организации уроков
                физической культуры и внеурочных мероприятий с учетом стандарта
                Вордскилс по компетенции "Физическая культура, спорт и
                фитнес"(2021)
              </td>
              <td itemProp="genExperience">23</td>
              <td itemProp="specExperience">21</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Еникеев Алик Гайсинович</td>
              <td itemProp="post">
                Заместитель директора, преподаватель высшей квалификационной
                категории
              </td>
              <td itemProp="teachingDiscipline">
                Общая и спец. лоция ВВП; Матрос; ПП и управление судами на ВПП;
                Управление судном на ВВП; Лоция ВВП, Использование РЛС на ВВП,
                Управление судном.
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер</td>
              <td>-</td>
              <td>-</td>
              <td>Судовождение</td>
              <td itemProp="profDevelopment">
                "Оказание первой помощи "(2020); " Особенности деятельности
                педагогических работников СПО в свете требований
                профессионального стандарта"(2020) "Организация и и проведение
                демонстративного экзамена по стандартам Вордскилс в 2021 году"
              </td>
              <td itemProp="genExperience">5</td>
              <td itemProp="specExperience">3</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Жилина Анна Викторовна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Информатика</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Учитель математики и информатики</td>
              <td>-</td>
              <td>-</td>
              <td>Математика и информатика</td>
              <td itemProp="profDevelopment">
                "Применение современных компьютерных технологий в процессе
                обучения информатики в условиях реализации ФГОС"(2020)
              </td>
              <td itemProp="genExperience">20</td>
              <td itemProp="specExperience">19</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Зараев Ильшат Фаритович</td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Астрономия; Химия;</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее </td>
              <td itemProp="teachingQual">Учитель биологии и химии</td>
              <td>-</td>
              <td>-</td>
              <td>Биология и химия</td>
              <td itemProp="profDevelopment">
                "Современные образовательные технологии в преподавании химии с
                учетом ФГОС" (2020); "Основы предмета "Экология в соответствии с
                требованиями ФГОС" (2020); "Методика преподавания астрономии при
                подготовке специалистов среднего звена" (2020)
              </td>
              <td itemProp="genExperience">14</td>
              <td itemProp="specExperience">11</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Миниярова Лилия Вансеттаевна</td>
              <td itemProp="post">
                главный специалист отдела информационных технологий,
                Преподаватель первой квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Информатика</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер</td>
              <td>-</td>
              <td>-</td>
              <td>
                Автоматизированные системы обработки информации и управления
              </td>
              <td itemProp="profDevelopment">
                "Оказание первой помощи"(2020); "Особенности деятельности
                педагогических работников СПО в свете требований
                профессионального стандарта"(2020); "Обеспечение безопасности
                персональных данных " (2021)
              </td>
              <td itemProp="genExperience">20</td>
              <td itemProp="specExperience">18</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Зкриева Гульнара Робертовна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                Электрооборудование судов; Судовые энергетические установки и
                электрооборудование судов
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер-электрик </td>
              <td>-</td>
              <td>-</td>
              <td>Электрофикация и автоматизация сельского хозяйства</td>
              <td itemProp="profDevelopment">
                "Педагогика и психология в системе СПО" (2021)
              </td>
              <td itemProp="genExperience">26</td>
              <td itemProp="specExperience">25</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Исхакова Лилия Лутфулловна</td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                Техника безопасности на судах, Коммерческая эксплуатация,
                Технология перевозок, Основы анализа эффективности работы судна
                с применением информационных технологий
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее образование</td>
              <td itemProp="teachingQual">Бакалавр</td>
              <td>-</td>
              <td>-</td>
              <td>Технология транспортных процессов</td>
              <td itemProp="profDevelopment">
                "Педагогика и психология в системе СПО" (2021)
              </td>
              <td itemProp="genExperience">20</td>
              <td itemProp="specExperience">3</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Козырь Снежана Андреевна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Русский язык</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Бакалавр</td>
              <td>-</td>
              <td>-</td>
              <td>Филология</td>
              <td itemProp="profDevelopment">
                "Оказание первой медицинской помощи"(2020); "Особенности
                деятельности педагогических работников СПО в свете требований
                профессионального стандарта"(2020); "Исследовательская
                технология на уроках русского языка и литературы по ФГОС"(2020)
              </td>
              <td itemProp="genExperience">5</td>
              <td itemProp="specExperience">3</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Крикунов Сергей Петрович</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                Навигация и лоция, Навиг. гидрометеорология, Использование РЛС
                на ВВП, Тренажерная подготовка. Использование ЭКНИС, Основы
                картографии и НК, Управление судном
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер-судоводитель</td>
              <td>-</td>
              <td>-</td>
              <td>Судовождение на внутренних водных путях</td>
              <td itemProp="profDevelopment">
                "Педагогика и психология в системе СПО" (2021)
              </td>
              <td itemProp="genExperience">45</td>
              <td itemProp="specExperience">44</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Муратов Раис Фаритович</td>
              <td itemProp="post">Преподаватель</td>
              <td itemProp="teachingDiscipline">
                Основы анализа эффективности работы судна с применением
                информационных технологий, Эксплуатация судовых энергетических
                установок на вспомогательном уровне, Судовые энергетические
                установки (включая тренажер вахтенного механика)
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер -электромеханик</td>
              <td>-</td>
              <td>-</td>
              <td>Электрические машины</td>
              <td itemProp="profDevelopment">
                "Особенности деятельности педагогических работников СПО в свете
                требований профессионального стандарта"(2020)
              </td>
              <td itemProp="genExperience">41</td>
              <td itemProp="specExperience">10</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Мусина Гульфия Ириковна</td>
              <td itemProp="post">
                Заместитель директора; Преподаватель высшей квалификационной
                категории
              </td>
              <td itemProp="teachingDiscipline">Литература</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Учитель русского языка и литературы Учитель истории
              </td>
              <td>-</td>
              <td>-</td>
              <td> Русский язык и литература</td>
              <td itemProp="profDevelopment">
                "Оказание первой помощи"(2020); "Профессиональная компетентность
                педагогов в условиях внедрения ФГОС" (2020); "Реализация
                образовательных программ среднего профессионального образования
                с учетом специфики WordSkills" (2021)
              </td>
              <td itemProp="genExperience">26</td>
              <td itemProp="specExperience">26</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Мухутдинова Лилия Ирековна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Иностранный язык</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Филолог. Преподаватель немецкого языка
              </td>
              <td>-</td>
              <td>-</td>
              <td>Филология</td>
              <td itemProp="profDevelopment">
                "Психофизические особенности инвалидов и лиц с ограниченными
                возможностями здоровья, специфика приема передачи учебной
                информации , применение специальных технических средств обучения
                с учетом различных нарушений функций организма человека" (2019);
                "Оказание первой помощи"(2020); "Особенности деятельности
                педагогических работников СПО в свете требований
                профессионального стандарта"(2020);
              </td>
              <td itemProp="genExperience">28</td>
              <td itemProp="specExperience">27</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Немцев Сергей Николаевич</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                Судовые энергетические установки и электрооборудование судов
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер-электромеханик</td>
              <td>-</td>
              <td>-</td>
              <td>Электрические машины</td>
              <td itemProp="profDevelopment">
                "Особенности деятельности педагогических работников СПО в свете
                требований профессионального стандарта"(2020)
              </td>
              <td itemProp="genExperience">42</td>
              <td itemProp="specExperience">31</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Решетников Виталий Евгеньевич</td>
              <td itemProp="post">Преподаватель</td>
              <td itemProp="teachingDiscipline">Основы философии , История </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Историк, преподаватель истории</td>
              <td>-</td>
              <td>-</td>
              <td>История</td>
              <td itemProp="profDevelopment">
                "Философия: Теория и методика преподавания в условиях реализации
                ФГОС" (2019); "Подготовка по оказанию первой медицинской помощи"
                "(2019); "Организация и сопровождение инклюзивного образования"
                (2019);{" "}
              </td>
              <td itemProp="genExperience">18</td>
              <td itemProp="specExperience">10</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Рома нов Зульфир Вахитович</td>
              <td itemProp="post">
                Преподаватель-организатор основ безопасности жизнедеятельности
                высшей категории
              </td>
              <td itemProp="teachingDiscipline">
                ОБЖ Безопасность жизнедеятельности, БЖ военные сборы
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Историк. Преподаватель истории. Специалист по гражданской
                обороне
              </td>
              <td>-</td>
              <td>-</td>
              <td>История</td>
              <td itemProp="profDevelopment">
                "Психофизические особенности инвалидов и лиц с ограниченными
                возможностями здоровья, специфика приема передачи учебной
                информации , применение специальных технических средств обучения
                с учетом различных нарушений функций организма человека" (2019);
                Профессиональная переподготовка " Гражданская оборона и защита
                населения от чрезвычайных ситуаций для должностных лиц"
              </td>
              <td itemProp="genExperience">11</td>
              <td itemProp="specExperience">5</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Сиразетдинова Эльвира Раисовна</td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                История; Экологические основы природопользования, Предупреждение
                и предотвращение загрязнения окружающей среды
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                {" "}
                Историк. Преподаватель истории. Профессиональная переподготовка
                "Специалист по экологической безопасности"
              </td>
              <td>-</td>
              <td>-</td>
              <td>История</td>
              <td itemProp="profDevelopment">
                "Организация и сопровождение инклюзивного образования" (2019);
                "Подготовка по оказанию первой медицинской помощи"(2019)
                "Педагогика и психология в системе СПО" (2021)
              </td>
              <td itemProp="genExperience">22</td>
              <td itemProp="specExperience">3</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Султангалиева Диана Римовна </td>
              <td itemProp="post">
                Заведующий отделом практической подготовки
              </td>
              <td itemProp="teachingDiscipline">Психология общения</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Психолог. Преподаватель психологии
              </td>
              <td>-</td>
              <td>-</td>
              <td>Психология</td>
              <td>-</td>
              <td itemProp="genExperience">6</td>
              <td itemProp="specExperience">2</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Тарба Растан Александрович</td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории
              </td>
              <td>
                Эксплуатация судовых энергетических установок на вспомогательном
                уровне, Судовые энергетические установки и их эксплуатация
                (включая тренажер вахтенного механика)
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Бакалавр</td>
              <td>-</td>
              <td>-</td>
              <td>Технологические машины и оборудование</td>
              <td itemProp="profDevelopment">
                "Организация и сопровождение инклюзивного образования" (2019);
                "Подготовка по оказанию первой медицинской помощи"(2019)
                "Педагогика и психология в системе СПО" (2021)
              </td>
              <td itemProp="genExperience">6</td>
              <td itemProp="specExperience">2</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Фомичев Сергей Юрьевич</td>
              <td itemProp="post">Преподаватель</td>
              <td itemProp="teachingDiscipline">
                Судовая автоматика и КИП, Обслуживание и ремонт судового
                электрического и электронного оборудования, Электрооборудование
                судов
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер- электрик</td>
              <td>-</td>
              <td>-</td>
              <td>Электропривод и автоматизация промышленных установок,</td>
              <td itemProp="profDevelopment">
                Особенности деятельности педагогических работников СПО в свете
                требований профессионального стандарта (2020); "Оказание первой
                медицинской помощи"(2020); "Психофизические особенности
                инвалидов и лиц с ограниченными возможностями здоровья,
                специфика приема передачи учебной информации , применение
                специальных технических средств обучения с учетом различных
                нарушений функций организма человека" (2020);
              </td>
              <td itemProp="genExperience">31</td>
              <td itemProp="specExperience">1</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Щербакова Амина Байраковна</td>
              <td itemProp="post">
                Заведующий учебным отделом, преподаватель высшей
                квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Литература</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Историк, преподаватель истории и обществоведения
              </td>
              <td>-</td>
              <td>-</td>
              <td>История</td>
              <td itemProp="profDevelopment">
                {" "}
                "Оказание первой помощи"(2019); " Современные требования
                преподавания курса "История России" в свете требований ФГОС и
                Историку- культурного стандарта" (2019); " Нормативно -
                правовые, теоретико -методологические и методические основы
                преподавания предмета обществознание" (2019)
              </td>
              <td itemProp="genExperience">25</td>
              <td itemProp="specExperience">23</td>
            </tr>
            <tr>
              <td itemProp="teachingOp" colSpan="12">
                26.02.05 «Эксплуатация судовых энергетических установок»
              </td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Арсланова Наталья Анатольевна</td>
              <td itemProp="post">Медицинская сестра</td>
              <td itemProp="teachingDiscipline">
                ОБЖ. Основы мед. знаний, Безопасность жизнедеятельности (Основы
                Медицинских знаний),
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Сестринское дело (медицинская сестра)
              </td>
              <td>-</td>
              <td>-</td>
              <td>Сестринское дело</td>
              <td itemProp="profDevelopment">
                «Проведение предсменных, предрейсовых и послесменных,
                послерейсовых медицинских осмотров» (2020)
              </td>
              <td itemProp="genExperience">14</td>
              <td itemProp="specExperience">3</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Ахметшин Максут Раянович</td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                Метрология и стандартизация, Механика
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер-механик</td>
              <td>-</td>
              <td>-</td>
              <td>Механизация сельского хозяйства</td>
              <td itemProp="profDevelopment">
                Стажировка на учебном -судне тренажере "Штурман Альбанов" по
                теме "Эксплуатация судовых энергетических установок,
                эксплуатация судового электрооборудования и средств
                автоматики"(2019); "Использование инновационных интерактивных
                технологий в системе СПО" (2019); "Подготовка по оказанию первой
                медицинской помощи" (2019); "Организация и сопровождение
                инклюзивного образования" (2019) ; "Особенности деятельности
                педагогических работников СПО в свете требований
                профессионального стандарта"(2020)
              </td>
              <td itemProp="genExperience">31</td>
              <td itemProp="specExperience">19</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Баширова Альфия Анваровна</td>
              <td itemProp="post">Педагог- организатор</td>
              <td itemProp="teachingDiscipline">
                Родной язык; Родная литература
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Учитель Башкирского языка и литературы
              </td>
              <td>-</td>
              <td>-</td>
              <td>Филология</td>
              <td itemProp="profDevelopment">
                "Методические аспекты при изучении русской литературы последней
                трети XIX века в современной школе"(2020)
              </td>
              <td itemProp="genExperience">13</td>
              <td itemProp="specExperience">1</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Бублис Юрий Федорович</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Теория устройства судна</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер кораблестроитель</td>
              <td>-</td>
              <td>-</td>
              <td>Судостроение и судоремонт</td>
              <td itemProp="profDevelopment">
                "Педагогика и психология в системе СПО" (2021)
              </td>
              <td itemProp="genExperience">50</td>
              <td itemProp="specExperience">22</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Гайнетдинова Эльвера Галихановна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                Судовые энергетические установки и их эксплуатация (включая
                тренажер вахтенного механика),Материаловедение
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер-механик</td>
              <td>-</td>
              <td>-</td>
              <td>«Судовые машины и механизмы»</td>
              <td itemProp="profDevelopment">
                "Педагогика и психология в системе СПО" (2021)
              </td>
              <td itemProp="genExperience">42</td>
              <td itemProp="specExperience">40</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Галлямова Раушания Харисовна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Физика</td>
              <td>-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Физик</td>
              <td>-</td>
              <td>-</td>
              <td>Физика</td>
              <td>-</td>
              <td itemProp="genExperience">27</td>
              <td itemProp="specExperience">21</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Гарифуллина Зульфия Муратовна</td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Иностранный язык</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Учитель башкирского языка, литературы и английского языка.
              </td>
              <td>-</td>
              <td>-</td>
              <td>Родной язык, литература и иностранный язык</td>
              <td>-</td>
              <td itemProp="genExperience">12</td>
              <td itemProp="specExperience">6</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Гафаров Ильшат Радмирович</td>
              <td itemProp="post">Руководитель физического воспитания</td>
              <td itemProp="teachingDiscipline">Физическая культура</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                специалист по адаптивной физической культуре
              </td>
              <td>-</td>
              <td>-</td>
              <td>
                Физическая культура для лиц с отклонениями в состоянии здоровья
                (Адаптивная физическая культура)
              </td>
              <td itemProp="profDevelopment">
                "Организационно- методические основы организации уроков
                физической культуры и внеурочных мероприятий с учетом стандарта
                Вордскилс по компетенции "Физическая культура, спорт и
                фитнес"(2021)
              </td>
              <td itemProp="genExperience">23</td>
              <td itemProp="specExperience">21</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Жилина Анна Викторовна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                Информатика; компьютерная графика
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Учитель математики и информатики</td>
              <td>-</td>
              <td>-</td>
              <td>Математика и информатика</td>
              <td itemProp="profDevelopment">
                "Применение современных компьютерных технологий в процессе
                обучения информатики в условиях реализации ФГОС"(2020)
              </td>
              <td itemProp="genExperience">20</td>
              <td itemProp="specExperience">19</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Зараев Ильшат Фаритович</td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                Астрономия; Химия; Экологические основы природопользования.
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Учитель биологии и химии</td>
              <td>-</td>
              <td>-</td>
              <td>Биология и химия</td>
              <td itemProp="profDevelopment">
                "Современные образовательные технологии в преподавании химии с
                учетом ФГОС" (2020); "Основы предмета "Экология в соответствии с
                требованиями ФГОС" (2020); "Методика преподавания астрономии при
                подготовке специалистов среднего звена" (2020)
              </td>
              <td itemProp="genExperience">14</td>
              <td itemProp="specExperience">11</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Зкриева Гульнара Робертовна</td>
              <td itemProp="post">
                категории Астрономия; Химия; Экологические основы
                природопользования. - Высшее Учитель биологии и химии - -
                Биология и химия "Современные образовательные технологии в
                преподавании химии с учетом ФГОС" (2020); "Основы предмета
                "Экология в соответствии с требованиями ФГОС" (2020); "Методика
                преподавания астрономии при подготовке специалистов среднего
                звена" (2020) 14 11 Зкриева Гульнара Робертовна Преподаватель
                высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                Электрооборудование судов; Гидравлика Электроника и
                электротехника
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер-электрик </td>
              <td>-</td>
              <td>-</td>
              <td>Электрофикация и автоматизация сельского хозяйства</td>
              <td itemProp="profDevelopment">
                "Педагогика и психология в системе СПО" (2021)
              </td>
              <td itemProp="genExperience">26</td>
              <td itemProp="specExperience">25</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Исхакова Лилия Лутфулловна</td>
              <td itemProp="post">Преподаватель</td>
              <td itemProp="teachingDiscipline">
                Планирование и руководство работы структурного подразделения
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Бакалавр</td>
              <td>-</td>
              <td>-</td>
              <td>Технология транспортных процессов</td>
              <td itemProp="profDevelopment">
                "Педагогика и психология в системе СПО" (2021)
              </td>
              <td itemProp="genExperience">20</td>
              <td itemProp="specExperience">3</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Козырь Снежана Андреевна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Русский язык; Литература</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Бакалавр</td>
              <td>-</td>
              <td>-</td>
              <td>Филология</td>
              <td itemProp="profDevelopment">
                "Оказание первой медицинской помощи"(2020); "Особенности
                деятельности педагогических работников СПО в свете требований
                профессионального стандарта"(2020); "Исследовательская
                технология на уроках русского языка и литературы по ФГОС"(2020)
              </td>
              <td itemProp="genExperience">5</td>
              <td itemProp="specExperience">3</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Муратов Раис Фаритович</td>
              <td itemProp="post">Преподаватель</td>
              <td itemProp="teachingDiscipline">
                Национальные и международные требования по эксплуатации судна,
                Планирование и руководство работы структурного подразделения,
                Анализ деятельности структурного подразделения
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер -электромеханик</td>
              <td>-</td>
              <td>-</td>
              <td>Электрические машины</td>
              <td itemProp="profDevelopment">
                "Особенности деятельности педагогических работников СПО в свете
                требований профессионального стандарта"(2020){" "}
              </td>
              <td itemProp="genExperience">41</td>
              <td itemProp="specExperience">10</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Мухутдинова Лилия Ирековна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Иностранный язык</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Филолог. Преподаватель немецкого языка
              </td>
              <td>-</td>
              <td>-</td>
              <td>Филология</td>
              <td itemProp="profDevelopment">
                "Психофизические особенности инвалидов и лиц с ограниченными
                возможностями здоровья, специфика приема передачи учебной
                информации , применение специальных технических средств обучения
                с учетом различных нарушений функций организма человека" (2019);
                "Оказание первой помощи"(2020); "Особенности деятельности
                педагогических работников СПО в свете требований
                профессионального стандарта"(2020);
              </td>
              <td itemProp="genExperience">28</td>
              <td itemProp="specExperience">27</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Немцев Сергей Николаевич</td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                Электроника и электротехника
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер-электромеханик</td>
              <td>-</td>
              <td>-</td>
              <td>Электрические машины</td>
              <td itemProp="profDevelopment">
                {" "}
                "Особенности деятельности педагогических работников СПО в свете
                требований профессионального стандарта"(2020)
              </td>
              <td itemProp="genExperience">42</td>
              <td itemProp="specExperience">31</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Решетников Виталий Евгеньевич</td>
              <td itemProp="post">Преподаватель</td>
              <td itemProp="teachingDiscipline">Основы философии , История</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Историк, преподаватель истории</td>
              <td>-</td>
              <td>-</td>
              <td> История</td>
              <td itemProp="profDevelopment">
                "Философия: Теория и методика преподавания в условиях реализации
                ФГОС" (2019); "Подготовка по оказанию первой медицинской помощи"
                "(2019); " Организация и сопровождение инклюзивного образования"
                (2019);{" "}
              </td>
              <td itemProp="genExperience">18</td>
              <td itemProp="specExperience">10</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Романов Зульфир Вахитович</td>
              <td itemProp="post">
                Преподаватель-организатор основ безопасности жизнедеятельности
                высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                ОБЖ Безопасность жизнедеятельности, БЖ военные сборы
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Историк. Преподаватель истории. Специалист по гражданской
                обороне
              </td>
              <td>-</td>
              <td>-</td>
              <td>История</td>
              <td itemProp="profDevelopment">
                {" "}
                "Психофизические особенности инвалидов и лиц с ограниченными
                возможностями здоровья, специфика приема передачи учебной
                информации , применение специальных технических средств обучения
                с учетом различных нарушений функций организма человека" (2019);
                Профессиональная переподготовка " Гражданская оборона и защита
                населения от чрезвычайных ситуаций для должностных лиц"
              </td>
              <td itemProp="genExperience">11</td>
              <td itemProp="specExperience">5</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Сиразетдинова Эльвира Раисовна</td>
              <td itemProp="post">Преподаватель</td>
              <td itemProp="teachingDiscipline">
                История; Предотвращение загрязнения окружающей среды;
                Экологические основы природопользования{" "}
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Историк. Преподаватель истории. Профессиональная переподготовка
                "Специалист по экологической безопасности"
              </td>
              <td>-</td>
              <td>-</td>
              <td>История</td>
              <td itemProp="profDevelopment">
                "Организация и сопровождение инклюзивного образования" (2019);
                "Подготовка по оказанию первой медицинской помощи"(2019)
                "Педагогика и психология в системе СПО" (2021){" "}
              </td>
              <td itemProp="genExperience">22</td>
              <td itemProp="specExperience">16</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Тазиева Гульдар Гайсаровна</td>
              <td itemProp="post">Специалист по охране труда </td>
              <td itemProp="teachingDiscipline">
                Охрана труда и ТБ на судах, СВМ и их эксплуатация{" "}
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Инженер по организации и управлению на транспорте; Специалист по
                охране труда
              </td>
              <td>-</td>
              <td>-</td>
              <td>
                Организация перевозок и управление на транспорте (водном)
                «Техносферная безопасность. Охрана труда»{" "}
              </td>
              <td itemProp="profDevelopment">
                "Психофизические особенности инвалидов и лиц с ограниченными
                возможностями здоровья, специфика приема передачи учебной
                информации , применение специальных технических средств обучения
                с учетом различных нарушений функций организма человека" (2019);
                " "Оказание первой помощи"(2019); "Особенности деятельности
                педагогических работников СПО в свете требований
                профессионального стандарта"(2019);{" "}
              </td>
              <td itemProp="genExperience">21</td>
              <td itemProp="specExperience">2</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Тарба Растан Александрович </td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории{" "}
              </td>
              <td itemProp="teachingDiscipline">
                Эксплуатация судовых энергетических установок на вспомогательном
                уровне, Эксплуатация судна на вспомогательном уровне, Моторист
                (машинист),{" "}
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Бакалавр</td>
              <td>-</td>
              <td>-</td>
              <td>Технологические машины и оборудование </td>
              <td itemProp="profDevelopment">
                {" "}
                "Организация и сопровождение инклюзивного образования" (2019);
                "Подготовка по оказанию первой медицинской помощи"(2019)
                "Педагогика и психология в системе СПО" (2021){" "}
              </td>
              <td itemProp="genExperience">6</td>
              <td itemProp="specExperience">2</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Фомичев Сергей Юрьевич </td>
              <td itemProp="post">Преподаватель</td>
              <td itemProp="teachingDiscipline">
                Судовые вспомогательные механизмы и их эксплуатация, Техническое
                обслуживание и ремонт судового оборудования, Техническая
                эксплуатация судовой автоматики{" "}
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер- электрик</td>
              <td>-</td>
              <td>-</td>
              <td>Электропривод и автоматизация промышленных установок, </td>
              <td itemProp="profDevelopment">
                Особенности деятельности педагогических работников СПО в свете
                требований профессионального стандарта (2020); "Оказание первой
                медицинской помощи"(2020); "Психофизические особенности
                инвалидов и лиц с ограниченными возможностями здоровья,
                специфика приема передачи учебной информации , применение
                специальных технических средств обучения с учетом различных
                нарушений функций организма человека" (2020);{" "}
              </td>
              <td itemProp="genExperience">37</td>
              <td itemProp="specExperience">1</td>
            </tr>
            <tr>
              <td itemProp="teachingOp" colSpan="12">
                26.02.06.«Эксплуатация судового электрооборудования и средств
                автоматики»
              </td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Акбарова Залия Шамсуновна </td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории{" "}
              </td>
              <td itemProp="teachingDiscipline">Математика </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Учитель физики и математики </td>
              <td itemProp="degree">Кандидат педагогических наук </td>
              <td>-</td>
              <td>Физика и математика</td>
              <td itemProp="profDevelopment">
                "Математика: Методика обучения в основной и средней школе в
                условиях реализации ФГОС ОО" (2019); "Оказание первой
                медицинской помощи" (2020){" "}
              </td>
              <td itemProp="genExperience">23</td>
              <td itemProp="specExperience">22</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Арсланова Наталья Анатольевна</td>
              <td itemProp="post">Медицинская сестра</td>
              <td itemProp="teachingDiscipline">
                ОБЖ. Основы мед. знаний, Безопасность жизнедеятельности (Основы
                Медицинских знаний), Иностранный язык
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Сестринское дело (медицинская сестра) Лингвист, переводчик
                немецкого и английского языка
              </td>
              <td>-</td>
              <td>-</td>
              <td>Сестринское дело Перевод и переводоведение</td>
              <td itemProp="profDevelopment">
                «Проведение предсменных, предрейсовых и послесменных,
                послерейсовых медицинских осмотров» (2020)
              </td>
              <td itemProp="genExperience">14</td>
              <td itemProp="specExperience">3</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Ахметшин Максут Раянович </td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории{" "}
              </td>
              <td itemProp="teachingDiscipline">
                Метрология и стандартизация, Механика{" "}
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер-механик </td>
              <td>-</td>
              <td>-</td>
              <td>Механизация сельского хозяйства</td>
              <td itemProp="profDevelopment">
                Стажировка на учебном -судне тренажере "Штурман Альбанов" по
                теме "Эксплуатация судовых энергетических установок,
                эксплуатация судового электрооборудования и средств
                автоматики"(2019); "Использование инновационных интерактивных
                технологий в системе СПО" (2019); "Подготовка по оказанию первой
                медицинской помощи" (2019); "Организация и сопровождение
                инклюзивного образования" (2019) ; "Особенности деятельности
                педагогических работников СПО в свете требований
                профессионального стандарта"(2020){" "}
              </td>
              <td itemProp="genExperience">31</td>
              <td itemProp="specExperience">19</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Баширова Альфия Анваровна</td>
              <td itemProp="post">Педагог- организатор</td>
              <td itemProp="teachingDiscipline">
                Родной язык ; Родная литература
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Учитель Башкирского языка и литературы
              </td>
              <td>-</td>
              <td>-</td>
              <td>Филология</td>
              <td itemProp="profDevelopment">
                "Методические аспекты при изучении русской литературы последней
                трети XIX века в современной школе"(2020)
              </td>
              <td itemProp="genExperience">13</td>
              <td itemProp="specExperience">1</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Бублис Юрий Федорович</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Теория устройства судна</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер кораблестроитель</td>
              <td>-</td>
              <td>-</td>
              <td>Судостроение и судоремонт</td>
              <td itemProp="profDevelopment">
                "Педагогика и психология в системе СПО" (2021)
              </td>
              <td itemProp="genExperience">50</td>
              <td itemProp="specExperience">22</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Гайнетдинова Эльвера Галихановна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                Судовые энергетические установки и их эксплуатация (включая
                тренажер вахтенного механика),Материаловедение
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер-механик</td>
              <td>-</td>
              <td>-</td>
              <td>«Судовые машины и механизмы»</td>
              <td itemProp="profDevelopment">
                "Педагогика и психология в системе СПО" (2021)
              </td>
              <td itemProp="genExperience">42</td>
              <td itemProp="specExperience">40</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Галлямова Раушания Харисовна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Физика</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Физик</td>
              <td>-</td>
              <td>-</td>
              <td>Физика</td>
              <td>-</td>
              <td itemProp="genExperience">27</td>
              <td itemProp="specExperience">21</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Гарифуллина Зульфия Муратовна</td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Иностранный язык</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td>
                Учитель башкирского языка, литературы и английского языка.
              </td>
              <td>-</td>
              <td>-</td>
              <td>Родной язык, литература и иностранный язык</td>
              <td>-</td>
              <td itemProp="genExperience">12</td>
              <td itemProp="specExperience">6</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Гафаров Ильшат Радмирович</td>
              <td itemProp="post">Руководитель физического воспитания</td>
              <td itemProp="teachingDiscipline">Физическая культура</td>
              <td>-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Специалист по адаптивной физической культуре
              </td>
              <td>-</td>
              <td>-</td>
              <td>
                Физическая культура для лиц с отклонениями в состоянии здоровья
                (Адаптивная физическая культура)
              </td>
              <td itemProp="profDevelopment">
                "Организационно-методические основы организации уроков
                физической культуры и внеурочных мероприятий с учетом стандарта
                Вордскилс по компетенции "Физическая культура, спорт и
                фитнес"(2021)
              </td>
              <td itemProp="genExperience">23</td>
              <td itemProp="specExperience">21</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Жилина Анна Викторовна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                Информатика; компьютерная графика
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Учитель математики и информатики</td>
              <td>-</td>
              <td>-</td>
              <td>Математика и информатика</td>
              <td itemProp="profDevelopment">
                "Применение современных компьютерных технологий в процессе
                обучения информатики в условиях реализации ФГОС"(2020)
              </td>
              <td itemProp="genExperience">20</td>
              <td itemProp="specExperience">19</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Зараев Ильшат Фаритович</td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                Астрономия; Химия; Экологические основы природопользования.
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Учитель биологии и химии</td>
              <td>-</td>
              <td>-</td>
              <td>Биология и химия</td>
              <td itemProp="profDevelopment">
                "Современные образовательные технологии в преподавании химии с
                учетом ФГОС" (2020); "Основы предмета "Экология в соответствии с
                требованиями ФГОС" (2020); "Методика преподавания астрономии при
                подготовке специалистов среднего звена" (2020)
              </td>
              <td itemProp="genExperience">14</td>
              <td itemProp="specExperience">11</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Зкриева Гульнара Робертовна</td>
              <td itemProp="post">
                категории Астрономия; Химия; Экологические основы
                природопользования. - Высшее Учитель биологии и химии - -
                Биология и химия "Современные образовательные технологии в
                преподавании химии с учетом ФГОС" (2020); "Основы предмета
                "Экология в соответствии с требованиями ФГОС" (2020); "Методика
                преподавания астрономии при подготовке специалистов среднего
                звена" (2020) 14 11 Зкриева Гульнара Робертовна Преподаватель
                высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                Электрооборудование судов; Гидравлика Электроника и
                электротехника
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер-электрик </td>
              <td>-</td>
              <td>-</td>
              <td>Электрофикация и автоматизация сельского хозяйства</td>
              <td itemProp="profDevelopment">
                "Педагогика и психология в системе СПО" (2021)
              </td>
              <td itemProp="genExperience">26</td>
              <td itemProp="specExperience">25</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Козырь Снежана Андреевна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Русский язык</td>
              <td itemProp="employeeQualification"> -</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Бакалавр</td>
              <td>-</td>
              <td>-</td>
              <td>Филология</td>
              <td itemProp="profDevelopment">
                "Оказание первой медицинской помощи"(2020); "Особенности
                деятельности педагогических работников СПО в свете требований
                профессионального стандарта"(2020); "Исследовательская
                технология на уроках русского языка и литературы по ФГОС"(2020)
              </td>
              <td itemProp="genExperience">5</td>
              <td itemProp="specExperience">3</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Муратов Раис Фаритович</td>
              <td itemProp="post">Преподаватель</td>
              <td itemProp="teachingDiscipline">
                Основы анализа эффективности работы судна с применением
                информационных технологий, Эксплуатация судовых энергетических
                установок на вспомогательном уровне, Судовые энергетические
                установки (включая тренажер вахтенного механика)
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер-электромеханик</td>
              <td>-</td>
              <td>-</td>
              <td>Электрические машины</td>
              <td itemProp="profDevelopment">
                "Особенности деятельности педагогических работников СПО в свете
                требований профессионального стандарта"(2020)
              </td>
              <td itemProp="genExperience">41</td>
              <td itemProp="specExperience">10</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Мусина Гульфия Ириковна</td>
              <td itemProp="post">
                Заместитель директора; Преподаватель высшей квалификационной
                категории
              </td>
              <td itemProp="teachingDiscipline">Литература</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Учитель русского языка и литературы Учитель истории
              </td>
              <td>-</td>
              <td>-</td>
              <td>Русский язык и литература</td>
              <td itemProp="profDevelopment">
                "Оказание первой помощи"(2020); "Профессиональная компетентность
                педагогов в условиях внедрения ФГОС" (2020); "Реализация
                образовательных программ среднего профессионального образования
                с учетом специфики WordSkills" (2021)
              </td>
              <td itemProp="genExperience">26</td>
              <td itemProp="specExperience">26</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Мухутдинова Лилия Ирековна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Иностранный язык</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Филолог. Преподаватель немецкого языка
              </td>
              <td>-</td>
              <td>-</td>
              <td>Филология</td>
              <td itemProp="profDevelopment">
                "Психофизические особенности инвалидов и лиц с ограниченными
                возможностями здоровья, специфика приема передачи учебной
                информации, применение специальных технических средств обучения
                с учетом различных нарушений функций организма человека" (2019);
                "Оказание первой помощи"(2020); "Особенности деятельности
                педагогических работников СПО в свете требований
                профессионального стандарта"(2020);
              </td>
              <td itemProp="genExperience">28</td>
              <td itemProp="specExperience">27</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Решетников Виталий Евгеньевич</td>
              <td itemProp="post">Преподаватель</td>
              <td itemProp="teachingDiscipline">Основы философии , История </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Историк, преподаватель истории</td>
              <td>-</td>
              <td>-</td>
              <td>История</td>
              <td itemProp="profDevelopment">
                "Философия: Теория и методика преподавания в условиях реализации
                ФГОС" (2019); "Подготовка по оказанию первой медицинской помощи"
                "(2019); "Организация и сопровождение инклюзивного образования"
                (2019);{" "}
              </td>
              <td itemProp="genExperience">18</td>
              <td itemProp="specExperience">10</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Романов Зульфир Вахитович</td>
              <td itemProp="post">
                Преподаватель-организатор основ безопасности жизнедеятельности
                высшей категории
              </td>
              <td itemProp="teachingDiscipline">
                ОБЖ Безопасность жизнедеятельности, БЖ военные сборы
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Историк. Преподаватель истории. Специалист по гражданской
                обороне
              </td>
              <td>-</td>
              <td>-</td>
              <td>История</td>
              <td itemProp="profDevelopment">
                "Психофизические особенности инвалидов и лиц с ограниченными
                возможностями здоровья, специфика приема передачи учебной
                информации, применение специальных технических средств обучения
                с учетом различных нарушений функций организма человека" (2019);
                Профессиональная переподготовка" Гражданская оборона и защита
                населения от чрезвычайных ситуаций для должностных лиц"
              </td>
              <td itemProp="genExperience">11</td>
              <td itemProp="specExperience">5</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Сиразетдинова Эльвира Раисовна</td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                История; Экологические основы природопользования, Предупреждение
                и предотвращение загрязнения окружающей среды
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Историк. Преподаватель истории. Профессиональная переподготовка
                "Специалист по экологической безопасности"
              </td>
              <td>-</td>
              <td>-</td>
              <td>История</td>
              <td itemProp="profDevelopment">
                "Организация и сопровождение инклюзивного образования" (2019);
                "Подготовка по оказанию первой медицинской помощи"(2019)
                "Педагогика и психология в системе СПО" (2021)
              </td>
              <td itemProp="genExperience">22</td>
              <td itemProp="specExperience">3</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Тазиева Гульдар Гайсаровна</td>
              <td itemProp="post">Специалист по охране труда </td>
              <td itemProp="teachingDiscipline">
                Охрана труда и ТБ на судах, СВМ и их эксплуатация{" "}
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Инженер по организации и управлению на транспорте; Специалист по
                охране труда{" "}
              </td>
              <td>-</td>
              <td>-</td>
              <td>
                Организация перевозок и управление на транспорте (водном)
                «Техносферная безопасность. Охрана труда»{" "}
              </td>
              <td itemProp="profDevelopment">
                "Психофизические особенности инвалидов и лиц с ограниченными
                возможностями здоровья, специфика приема передачи учебной
                информации , применение специальных технических средств обучения
                с учетом различных нарушений функций организма человека" (2019);
                " "Оказание первой помощи"(2019); "Особенности деятельности
                педагогических работников СПО в свете требований
                профессионального стандарта"(2019);{" "}
              </td>
              <td itemProp="genExperience">21</td>
              <td itemProp="specExperience">2</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Тарба Растан Александрович </td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории{" "}
              </td>
              <td itemProp="teachingDiscipline">
                Эксплуатация судовых энергетических установок на вспомогательном
                уровне, Эксплуатация судна на вспомогательном уровне, Моторист
                (машинист)
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Бакалавр</td>
              <td>-</td>
              <td>-</td>
              <td>Технологические машины и оборудование </td>
              <td itemProp="profDevelopment">
                {" "}
                "Организация и сопровождение инклюзивного образования" (2019);
                "Подготовка по оказанию первой медицинской помощи"(2019)
                "Педагогика и психология в системе СПО" (2021){" "}
              </td>
              <td itemProp="genExperience">6</td>
              <td itemProp="specExperience">2</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Фомичев Сергей Юрьевич </td>
              <td itemProp="post">Преподаватель</td>
              <td itemProp="teachingDiscipline">
                Судовые вспомогательные механизмы и их эксплуатация, Техническое
                обслуживание и ремонт судового оборудования, Техническая
                эксплуатация судовой автоматики{" "}
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер-электрик</td>
              <td>-</td>
              <td>-</td>
              <td>Электропривод и автоматизация промышленных установок, </td>
              <td itemProp="profDevelopment">
                Особенности деятельности педагогических работников СПО в свете
                требований профессионального стандарта (2020); "Оказание первой
                медицинской помощи"(2020); "Психофизические особенности
                инвалидов и лиц с ограниченными возможностями здоровья,
                специфика приема передачи учебной информации , применение
                специальных технических средств обучения с учетом различных
                нарушений функций организма человека" (2020);{" "}
              </td>
              <td itemProp="genExperience">37</td>
              <td itemProp="specExperience">1</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Щербакова Амина Байраковна</td>
              <td itemProp="post">
                Заведующий учебным отделом, преподаватель высшей
                квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Литература</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Историк, преподаватель истории и обществоведения
              </td>
              <td>-</td>
              <td>-</td>
              <td>История</td>
              <td itemProp="profDevelopment">
                {" "}
                "Оказание первой помощи"(2019); "Современные требования
                преподавания курса "История России" в свете требований ФГОС и
                Историку- культурного стандарта" (2019); "Нормативно - правовые,
                теоретико -методологические и методические основы преподавания
                предмета обществознание" (2019)
              </td>
              <td itemProp="genExperience">25</td>
              <td itemProp="specExperience">23</td>
            </tr>
            <tr>
              <td itemProp="teachingOp" colSpan="12">
                23.02.01 "Организация перевозок и управление на транспорте (по
                видам)"
              </td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Арсланова Наталья Анатольевна</td>
              <td itemProp="post">Медицинская сестра</td>
              <td itemProp="teachingDiscipline">
                ОБЖ. Основы мед. знаний, Безопасность жизнедеятельности (Основы
                Медицинских знаний), Иностранный язык
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Сестринское дело (медицинская сестра) Лингвист, переводчик
                немецкого и английского языка
              </td>
              <td>-</td>
              <td>-</td>
              <td>Сестринское дело Перевод и переводоведение</td>
              <td itemProp="profDevelopment">
                «Проведение предсменных, предрейсовых и послесменных,
                послерейсовых медицинских осмотров» (2020)
              </td>
              <td itemProp="genExperience">14</td>
              <td itemProp="specExperience">3</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Ахметшин Максут Раянович </td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории{" "}
              </td>
              <td itemProp="teachingDiscipline">
                Метрология и стандартизация, Механика{" "}
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер-механик </td>
              <td>-</td>
              <td>-</td>
              <td>Механизация сельского хозяйства</td>
              <td itemProp="profDevelopment">
                Стажировка на учебном судне-тренажере "Штурман Альбанов" по теме
                "Эксплуатация судовых энергетических установок, эксплуатация
                судового электрооборудования и средств автоматики"(2019);
                "Использование инновационных интерактивных технологий в системе
                СПО" (2019); "Подготовка по оказанию первой медицинской помощи"
                (2019); "Организация и сопровождение инклюзивного образования"
                (2019); "Особенности деятельности педагогических работников СПО
                в свете требований профессионального стандарта"(2020){" "}
              </td>
              <td itemProp="genExperience">31</td>
              <td itemProp="specExperience">19</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Баширова Альфия Анваровна</td>
              <td itemProp="post">Педагог- организатор</td>
              <td itemProp="teachingDiscipline">
                Родной язык; Родная литература
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Учитель Башкирского языка и литературы
              </td>
              <td>-</td>
              <td>-</td>
              <td>Филология</td>
              <td itemProp="profDevelopment">
                "Методические аспекты при изучении русской литературы последней
                трети XIX века в современной школе"(2020)
              </td>
              <td itemProp="genExperience">13</td>
              <td itemProp="specExperience">1</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Бублис Юрий Федорович</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Теория устройства судна</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер кораблестроитель</td>
              <td>-</td>
              <td>-</td>
              <td>Судостроение и судоремонт</td>
              <td itemProp="profDevelopment">
                {" "}
                "Педагогика и психология в системе СПО" (2021)
              </td>
              <td itemProp="genExperience">50</td>
              <td itemProp="specExperience">22</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Галлямова Раушания Харисовна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Физика</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td>Физик</td>
              <td>-</td>
              <td>-</td>
              <td>Физика</td>
              <td>-</td>
              <td itemProp="genExperience">27</td>
              <td itemProp="specExperience">21</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Жилина Анна Викторовна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                Информатика; компьютерная графика
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Учитель математики и информатики</td>
              <td>-</td>
              <td>-</td>
              <td>Математика и информатика</td>
              <td itemProp="profDevelopment">
                "Применение современных компьютерных технологий в процессе
                обучения информатики в условиях реализации ФГОС"(2020)
              </td>
              <td itemProp="genExperience">20</td>
              <td itemProp="specExperience">19</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Зараев Ильшат Фаритович</td>
              <td itemProp="post">
                Преподаватель первой квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                Астрономия; Химия; Экологические основы природопользования.
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Учитель биологии и химии</td>
              <td>-</td>
              <td>-</td>
              <td>Биология и химия</td>
              <td itemProp="profDevelopment">
                "Современные образовательные технологии в преподавании химии с
                учетом ФГОС" (2020); "Основы предмета "Экология в соответствии с
                требованиями ФГОС" (2020); "Методика преподавания астрономии при
                подготовке специалистов среднего звена" (2020)
              </td>
              <td itemProp="genExperience">14</td>
              <td itemProp="specExperience">11</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Исхакова Лилия Лутфулловна</td>
              <td itemProp="post">Преподаватель</td>
              <td itemProp="teachingDiscipline">
                Планирование и руководство работы структурного подразделения
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Бакалавр</td>
              <td>-</td>
              <td>-</td>
              <td>Технология транспортных процессов</td>
              <td itemProp="profDevelopment">
                "Педагогика и психология в системе СПО" (2021)
              </td>
              <td itemProp="genExperience">20</td>
              <td itemProp="specExperience">3</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Козырь Снежана Андреевна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Русский язык; Литература</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Бакалавр</td>
              <td>-</td>
              <td>-</td>
              <td>Филология</td>
              <td itemProp="profDevelopment">
                "Оказание первой медицинской помощи"(2020); "Особенности
                деятельности педагогических работников СПО в свете требований
                профессионального стандарта"(2020); "Исследовательская
                технология на уроках русского языка и литературы по ФГОС"(2020)
              </td>
              <td itemProp="genExperience">5</td>
              <td itemProp="specExperience">3</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Муратов Раис Фаритович</td>
              <td itemProp="post">Преподаватель</td>
              <td itemProp="teachingDiscipline">
                Национальные и международные требования по эксплуатации судна,
                Планирование и руководство работы структурного подразделения,
                Анализ деятельности структурного подразделения
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Инженер -электромеханик</td>
              <td>-</td>
              <td>-</td>
              <td>Электрические машины</td>
              <td itemProp="profDevelopment">
                "Особенности деятельности педагогических работников СПО в свете
                требований профессионального стандарта"(2020){" "}
              </td>
              <td itemProp="genExperience">41</td>
              <td itemProp="specExperience">10</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Мухутдинова Лилия Ирековна</td>
              <td itemProp="post">
                Преподаватель высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">Иностранный язык</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Филолог. Преподаватель немецкого языка
              </td>
              <td>-</td>
              <td>-</td>
              <td>Филология</td>
              <td itemProp="profDevelopment">
                "Психофизические особенности инвалидов и лиц с ограниченными
                возможностями здоровья, специфика приема передачи учебной
                информации, применение специальных технических средств обучения
                с учетом различных нарушений функций организма человека" (2019);
                "Оказание первой помощи"(2020); "Особенности деятельности
                педагогических работников СПО в свете требований
                профессионального стандарта"(2020);
              </td>
              <td itemProp="genExperience">28</td>
              <td itemProp="specExperience">27</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Решетников Виталий Евгеньевич</td>
              <td itemProp="post">Преподаватель</td>
              <td itemProp="teachingDiscipline">Основы философии , История</td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">Историк, преподаватель истории</td>
              <td>-</td>
              <td>-</td>
              <td> История</td>
              <td itemProp="profDevelopment">
                "Философия: Теория и методика преподавания в условиях реализации
                ФГОС" (2019); "Подготовка по оказанию первой медицинской помощи"
                "(2019); "Организация и сопровождение инклюзивного образования"
                (2019);{" "}
              </td>
              <td itemProp="genExperience">18</td>
              <td itemProp="specExperience">10</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Романов Зульфир Вахитович</td>
              <td itemProp="post">
                Преподаватель-организатор основ безопасности жизнедеятельности
                высшей квалификационной категории
              </td>
              <td itemProp="teachingDiscipline">
                ОБЖ Безопасность жизнедеятельности, БЖ военные сборы
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Историк. Преподаватель истории. Специалист по гражданской
                обороне
              </td>
              <td>-</td>
              <td>-</td>
              <td>История</td>
              <td itemProp="profDevelopment">
                {" "}
                "Психофизические особенности инвалидов и лиц с ограниченными
                возможностями здоровья, специфика приема передачи учебной
                информации, применение специальных технических средств обучения
                с учетом различных нарушений функций организма человека" (2019);
                Профессиональная переподготовка" Гражданская оборона и защита
                населения от чрезвычайных ситуаций для должностных лиц"
              </td>
              <td itemProp="genExperience">11</td>
              <td itemProp="specExperience">5</td>
            </tr>
            <tr itemProp="teachingStaff">
              <td itemProp="fio">Сиразетдинова Эльвира Раисовна</td>
              <td itemProp="post">Преподаватель</td>
              <td itemProp="teachingDiscipline">
                История; Предотвращение загрязнения окружающей среды;
                Экологические основы природопользования{" "}
              </td>
              <td itemProp="employeeQualification">-</td>
              <td itemProp="teachingLevel">Высшее</td>
              <td itemProp="teachingQual">
                Историк. Преподаватель истории. Профессиональная переподготовка
                "Специалист по экологической безопасности"
              </td>
              <td>-</td>
              <td>-</td>
              <td>История</td>
              <td itemProp="profDevelopment">
                "Организация и сопровождение инклюзивного образования" (2019);
                "Подготовка по оказанию первой медицинской помощи"(2019)
                "Педагогика и психология в системе СПО" (2021){" "}
              </td>
              <td itemProp="genExperience">22</td>
              <td itemProp="specExperience">16</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
    </div>
  );
});
export default Employees;
