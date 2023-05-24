import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../../utils/disabled";
const JobFair = observer(() => {
  return (
    <>
      <section>
        <h1>Ярмарки вакансий</h1>
        <p>
          {" "}
          На данной странице Вы можете ознакомиться с вакансиями на сайтах
          ведущих кадровых агентств. Заходите, смотрите вакансии, заполняйте
          резюме и набирайтесь опыта в области карьерного продвижения:
        </p>
        <ul>
          <li>кадровые агентства плавательных специальностей</li>
          <li>кадровые агентства береговых специальностей</li>
          <li>государственные органы трудоустройства</li>
        </ul>
      </section>
      <section>
        <h2>Кадровые агентства плавательных специальностей</h2>
        <h3>Marlow-navigation</h3>
        <p>
          <a
            href="https://marlow-navigation.com/ru/marlow-russia-ru.asp"
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Марлоу Навигейшн Россия
          </a>{" "}
          обеспечивает набор и трудоустройство моряков для группы компаний
          Марлоу через глобальную сеть офисов по всей стране. Наша команда,
          состоящая из преданных своему делу и опытных сотрудников, может
          предоставить широкий спектр профессиональных и индивидуальных услуг
          для российских моряков.
        </p>
        <h3>Baltic Group International (BGI)</h3>
        <p>
          <a
            href="https://www.bgicrew.com/"
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            BGI
          </a>{" "}
          BGI - рекрутинг морского персонала для работы на всех типах грузовых
          судов, на паромах, пассажирских и круизных судах, персонала для работы
          в судоходных компаниях на управленческих должностях, берегового и
          морского персонала для энергетических проектов нефтегазовой отрасли.
        </p>
      </section>
      <section>
        <h2>Кадровые агентства береговых специальностей</h2>
        <h3>Портал «Работа в России»</h3>
        <p>
          <a
            href="https://trudvsem.ru/"
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Портал «Работа в России»
          </a>{" "}
          является федеральной государственной информационной системой
          Федеральной службы по труду и занятости. Портал создан для того, чтобы
          помочь гражданам найти работу, а работодателям - работников. Портал
          работает так же, как и большинство коммерческих сайтов по поиску и
          подбору работы. Все услуги оказываются бесплатно!
        </p>
        <h3>Neuvoo</h3>
        <p>
          Ищете работу? На{" "}
          <a
            href="https://neuvoo.ru/"
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Neuvoo{" "}
          </a>{" "}
          Вы найдете все возможные вакансии, доступные в Вашем регионе. Ваш
          поиск работы начинается здесь.
        </p>
        <h3>«Молодой Специалист»</h3>
        <p>
          <a
            href="https://msrabota.ru/"
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Всероссийский информационно-поисковый портал «Молодой Специалист»
          </a>{" "}
          портал для абитуриентов, студентов, молодых специалистов и молодых
          ученых. Основная цель Портала - профориентация молодежи, помощь выбора
          учебного заведения, интересных стажировок, практик, правильный выбор
          достойной профессии, трудоустройство профессиональных кадров в России
          и за рубежом , создание новых рабочих мест. Портал разработал
          инновационную систему подбора рабочих вакансий и индивидуальный подбор
          соискателей через личное портфолио.
        </p>
      </section>
      <section>
        <h2>Государственные органы трудоустройства</h2>
        <h3>ГКУ Центр занятости населения города Уфы</h3>
        <p>
          <a
            href="http://ufa.bashzan.ru"
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            ГКУ Центр занятости населения города Уфы.
          </a>{" "}
          Соискатели и работодатели, заинтересованные в поиске и предоставлении
          работы, всегда могут рассчитывать на поддержку, консультации, подбор
          оптимального варианта и другую практическую помощь со стороны наших
          сотрудников.
        </p>
        <h3>
          Интерактивный портал службы занятости населения Республики
          Башкортостан
        </h3>
        <p>
          <a
            href="https://rabota.bashkortostan.ru/"
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Интерактивный портал службы занятости населения Республики
            Башкортостан
          </a>{" "}
        </p>
      </section>
    </>
  );
});
export default JobFair;
