import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
const text = "tr";
const Cadets = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  const fac = [
    {
      facId: "1",
      group: "Раздел «Учебный процесс»",
      question: "Как можно оформить социальную стипендию?",
      answer: `На основании Положения о стипендиальном обеспечении и других формах материальной поддержки студентов и аспирантов «ВГУВТ», п. 7.1.5,  социальная стипендия  начисляется социально незащищенным категориям курсантов. Для оформления социальной стипендии – необходимо на отделение СПО (2 этаж) представить справку о том, что Вы являетесь получателем государственной социальной помощи и  написать соответствующее заявление. Выплата государственной социальной стипендии курсантам осуществляется  ежемесячно: начиная с момента обращения на отделение с подтверждающим документом,  по месяц прекращения действия основания ее назначения.`,
      /* addition: `Для оформления справки о том, что Вы являетесь получателем государственной социальной помощи  необходимо собрать следующий комплект документов:`,
      list: {
        0: "Взять в филиале  справку о том, что Вы являетесь курсантом и обучаетесь в нашем филиале (Канцелярия 1 этаж), и в бухгалтерии (1 этаж) справку о том, в каком размере Вы получаете стипендию.",
        1: "Обратиться по месту жительства и взять справку о составе семьи.",
        2: "Собрать документы о доходах всех членов семьи из п. 2.",
        3: "С комплектом документов обратиться в МФЦ или в центр соцзащиты по месту жительства.",
        4: "Получить документ, который будет подтверждать оформление, что Вы являетесь получателем государственной социальной помощи.",
      }, */
    },
  ];

  const getItemsStudyProcess = (panelStyle) => [
    {
      key: "1",
      label: "Как можно оформить социальную стипендию?",
      children: (
        <>
          <p>
            На основании Положения о стипендиальном обеспечении и других формах
            материальной поддержки студентов и аспирантов «ВГУВТ», п. 7.1.5,
            социальная стипендия начисляется социально незащищенным категориям
            курсантов. Для оформления социальной стипендии – необходимо на
            отделение СПО (2 этаж) представить справку о том, что Вы являетесь
            получателем государственной социальной помощи и написать
            соответствующее заявление. Выплата государственной социальной
            стипендии курсантам осуществляется ежемесячно: начиная с момента
            обращения на отделение с подтверждающим документом, по месяц
            прекращения действия основания ее назначения.
          </p>
          <p>
            Для оформления справки о том, что Вы являетесь получателем
            государственной социальной помощи необходимо собрать следующий
            комплект документов:
          </p>
          <ol>
            <li>
              Взять в филиале справку о том, что Вы являетесь курсантом и
              обучаетесь в нашем филиале (Канцелярия 1 этаж), и в бухгалтерии (1
              этаж) справку о том, в каком размере Вы получаете стипендию.
            </li>
            <li>
              Обратиться по месту жительства и взять справку о составе семьи.
            </li>
            <li>Собрать документы о доходах всех членов семьи из п. 2.</li>
            <li>
              С комплектом документов обратиться в МФЦ или в центр соцзащиты по
              месту жительства.
            </li>
            <li>
              Получить документ, который будет подтверждать оформление, что Вы
              являетесь получателем государственной социальной помощи.
            </li>
          </ol>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "2",
      label: "Когда и как можно перевестись с платного обучения на бесплатное?",
      children: (
        <>
          <p>
            На основании Положения о комиссии по переводу студентов с платного
            обучения на бесплатное, п. 7.1.3: «Право на переход с платного
            обучения на бесплатное имеет курсант, обучающийся на основании
            договора об оказании платных образовательных услуг, не имеющий на
            момент подачи заявления академическую задолженность, дисциплинарные
            взыскания, задолженности по оплате за обучение, с соблюдением одного
            из следующих условий:
          </p>
          <ol>
            <li>
              Сдачи промежуточной аттестации за два последних семестра обучения,
              предшествующие заявлению, на оценку «отлично» или «отлично» и
              «хорошо», или «хорошо»;
            </li>
            <li>
              Отнесения к следующим категориям граждан:{" "}
              <ul>
                <li>
                  - детей-сирот и детей, оставшихся без попечения родителей,
                </li>
                <li>
                  - лицам из числа детей-сирот и детей, оставшихся без попечения
                  родителей;{" "}
                </li>
                <li>
                  - граждан в возрасте до 20 лет, имеющих только одного родителя
                  – инвалида I группы, если среднедушевой доход семьи ниже
                  величины прожиточного минимума, установленного в
                  соответствующем субъекте Российской Федерации;
                </li>
              </ul>
            </li>
            <li>
              Утраты обучающимся в период обучения одного или обоих родителей
              (законных представителей) или единственного родителя (законного
              представителя).
            </li>
          </ol>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "3",
      label:
        "Сессия сдана, но по одной дисциплине получена оценка «3» (удовлетворительно). Буду ли получать стипендию?",
      children: (
        <p>
          На основании Положения о стипендиальном обеспечении и других формах
          материальной поддержки студентов и аспирантов «ВГУВТ», п. 7.1.3,
          Государственная академическая стипендия начисляется тем курсантам,
          которые сдали промежуточную аттестацию на «отлично», «хорошо и
          отлично», «хорошо». Академическая стипендия не выплачивается тем
          курсантам, кто получил «удовлетворительно» и (или)
          «неудовлетворительно».
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "4",
      label:
        "Может ли курсант  перевестись на обучение по другой специальности, а в другую группу?",
      children: (
        <p>
          Перевод на обучение с одной специальности на другую, перевод в другую
          группу одной специальности производится решением аттестационной
          комиссии, при наличии вакантных мест и заявления обучающегося.
          Перевестись на другую специальность возможно в период каникул.
          Заявление о переводе рассматривается в 10-дневный срок. При этом
          определяются сроки, курс, условия зачисления или причина отказа. При
          переводе в приказе устанавливается порядок и сроки ликвидации
          задолженностей.
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "5",
      label: "Какова процедура получения дубликата документов об образовании?",
      children: (
        <>
          <p>Дубликат диплома и дубликат приложения к диплому выдается:</p>
          <ol>
            <li>Взамен утраченного диплома и (или) приложения к диплому;</li>
            <li>
              Взамен диплома и (или) приложения к диплому, содержащего ошибки,
              обнаруженные выпускником после его получения;
            </li>
            <li>
              Лицу, изменившему свою фамилию (имя, отчество). Обмен производится
              на основании заявления лица, изменившего свою фамилию (имя,
              отчество), с приложением копий документов, подтверждающих
              изменение фамилии (имени, отчества) лица.
            </li>
          </ol>
          <p>
            Дубликаты диплома и приложения к нему выдаются на основании личного
            заявления.
          </p>
          <p>
            В целом, процедура получения дубликата документа об образовании
            описана в Приказе Минобрнауки России от 25.10.2013 N 1186 (ред. от
            27.04.2015) "Об утверждении Порядка заполнения, учета и выдачи
            дипломов о среднем профессиональном образовании и их дубликатов";
            Что касается конкретного случая в нашем учебном заведении, зависит
            от того, в каком году вы окончили учебное заведение:
          </p>
          <ol>
            <li>
              Вариант 1. Вы окончили учебное заведение до 01.09.2019 года{" "}
              <ol>
                <li>
                  Вы пишете заявление на имя ректора ФГБОУ ВО «Государственный
                  университет морского и речного транспорта имени адмирала С.О.
                  Макарова» Барышникова С.О. с просьбой о выдаче дубликата
                  диплома. В заявлении обязательно должна содержаться полная
                  информация: фамилия, имя, отчество, по какой специальности
                  обучались, в каком году закончили образовательное учреждение,
                  контактные данные (телефон и электронный адрес). В случае,
                  если не имеете возможности поехать в Санкт-Петербург за
                  дубликатом, в заявлении указываете, что дубликат просите
                  выслать на почтовый адрес (указываете свой полный почтовый
                  адрес обязательно с индексом).
                </li>
                <li>
                  Сканируете заявление и отправляете на эл.адрес
                  otd_umof@mail.ru
                </li>
                <li>
                  По исполнении заявления, Вас уведомят отправкой скана
                  дубликата на электронную почту. О приходе оригинала дубликата
                  уведомят извещением с отделения почты России.
                </li>
              </ol>
            </li>
            <li>
              Вариант 2. Вы окончили учебное заведение после 01.09.2019 года{" "}
              <ol>
                <li>
                  Вы пишете заявление на имя ректора ФГБОУ ВО «ВГУВТ» Кузьмичева
                  И.К. Информация в заявлении та же. Отправляете на электронную
                  почту rector@vsuwt.ru
                </li>
              </ol>
            </li>
          </ol>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "6",
      label:
        "Если я нахожусь в навигации и не успеваю приехать  на  вручение диплома, может ли мой родственник (друг)  получить диплом за меня?",
      children: (
        <p>
          Да, может. Согласно Приказа Минобрнауки России от 25.10.2013 N 1186
          (ред. от 27.04.2015) "Об утверждении Порядка заполнения, учета и
          выдачи дипломов о среднем профессиональном образовании и их
          дубликатов", диплом (дубликат диплома) выдается выпускнику лично или
          другому лицу по заверенной в установленном порядке доверенности,
          выданной указанному лицу выпускником. Т.е. это нотариально заверенная
          доверенность, которая остается в образовательном учреждении и хранится
          в личном деле выпускника.
        </p>
      ),
      style: panelStyle,
    },
  ];
  const getItemsCommitteeSelection = (panelStyle) => [
    {
      key: "1",
      label:
        "Подскажите, пожалуйста,  о количестве бюджетных мест в 2023 году.",
      children: (
        <>
          <p>Контрольные цифры приема на 2023-2024 учебный год:</p>
          <ol>
            <li>
              26.02.03 «Судовождение» (углубленная подготовка) на базе 9 кл. –
              50 мест.
            </li>
            <li>
              26.02.06 «Эксплуатация судового электрооборудования и средств
              автоматики» на базе 9 кл. – 50 мест.
            </li>
            <li>
              26.02.05 «Эксплуатация судовых энергетических установок» на базе 9
              кл. – 50 мест.
            </li>
            <li>
              23.02.01 «Организация перевозок и управление на транспорте» (по
              видам) на базе 9 кл. – 25 мест.
            </li>
          </ol>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "2",
      label: "Для девочек какие специальности в Вашем учебном заведении?",
      children: (
        <>
          <ol>
            <li>
              23.02.01 «Организация перевозок и управление на транспорте» (по
              видам).
            </li>
            <li>26.02.03 «Судовождение» (углубленная подготовка).</li>
          </ol>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "3",
      label: "Общежитие предоставляется?",
      children: (
        <>
          <p>Общежитие для иногородних предоставляется.</p>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "4",
      label: "Питание платное в Вашем учебном заведении?",
      children: (
        <>
          <p>
            Для обучающихся на бюджетной основе 3-х разовое питание бесплатно.
          </p>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "5",
      label: "Какой проходной балл в этом году в Ваше учебное заведение?",
      children: (
        <>
          <p>
            Проходной балл формируется ближе к 15 августа из числа подавших
            заявлений по рейтингу.
          </p>
        </>
      ),
      style: panelStyle,
    },
  ];
  return (
    <>
      <h1>Сборник вопросов и ответов для курсантов и абитуриентов</h1>
      <h2>Раздел «Учебный процесс»</h2>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        style={{
          background: token.colorBgContainer,
        }}
        items={getItemsStudyProcess(panelStyle)}
      />
      <h2>Приемная комиссия</h2>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        style={{
          background: token.colorBgContainer,
        }}
        items={getItemsCommitteeSelection(panelStyle)}
      />
    </>
  );
};
export default Cadets;
