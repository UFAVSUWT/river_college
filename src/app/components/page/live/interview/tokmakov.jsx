import React from "react";
import { Carousel } from "antd";
import tokmakov from "../../../../assets/img/interview/tokmakov/1.JPG";
import tokmakov1 from "../../../../assets/img/interview/tokmakov/2.JPG";
import tokmakov2 from "../../../../assets/img/interview/tokmakov/3.jpg";
import tokmakov3 from "../../../../assets/img/interview/tokmakov/4.JPG";
import tokmakov4 from "../../../../assets/img/interview/tokmakov/5.JPG";
import tokmakov5 from "../../../../assets/img/interview/tokmakov/6.JPG";

const Tokmakov = () => {
  return (
    <section className="interview-container">
      <h1>ВЫПУСКНИК – КАПИТАН-НАЧАЛЬНИК</h1>
      <div className="image-wrapper">
        <img src={tokmakov1} alt="Фото уплыло:(" height="100%" width="100%" />
        <p>
          <i>
            «Жизнь продолжается при любых обстоятельствах…» Александр
            Александрович
          </i>
        </p>
      </div>
      <p>
        Токмаков Александр Александрович - выпускник 1984 года, получил диплом с
        отличием по специальности «Судовождение с правом эксплуатации судовых
        энергетических установок», в настоящее время, начальник Бельской
        Инспекции "Государственного портового контроля".
      </p>
      <p>
        <strong>Как Вы выбрали свою будущую профессию?</strong>
      </p>
      <p>
        - С 12 лет мечтал работать на флоте, объездил разные мореходные училища,
        но вот судьба распорядилась, чтобы я получил профессию мечты в Уфе.
      </p>
      <p>
        <strong>А какое самое яркое воспоминание о годах учебы?</strong>
      </p>
      <p>
        - Чего-то отдельно выделить не могу, этот период – сам по себе большое,
        яркое, незабываемое воспоминание и впечатление. Жизнь кипела: учеба,
        практика, спорт, походы, да много всего было.
      </p>
      <p>
        <strong>С чего начиналась и как развивалась Ваша карьера?</strong>
      </p>
      <p>
        - После получения диплома отслужил в рядах Вооруженных Сил, потом
        начинал вторым помощником капитана, вторым помощником механика, набрался
        опыта и уже сам стал капитаном-механиком судна «Семен Федов». Интересный
        профессиональный опыт я получил в стенах родного учебного заведения, где
        почти 8 лет проработал заместителем директора по учебно-производственной
        работе. Пришлось и учебно-производственным флотом командовать, в тот
        период это четыре единицы самоходного флота с экипажами, и
        организовывать практику курсантам. А ведь от того, как пройдет практика,
        зависит становление курсанта как будущего профессионала.
      </p>
      <p>
        <strong>
          Вы сейчас являетесь начальником Бельской Инспекции Государственного
          портового контроля, как-то приходится взаимодействовать с выпускниками
          или курсантами Уфимского филиала?
        </strong>
      </p>
      <p>
        - Конечно, в Инспекции Государственного портового контроля проходят
        квалификационные испытания для получения квалификационного свидетельства
        на право занятия должности. Курсанты приходят и сдают экзамены для
        получения свидетельств по рабочей профессии «матрос», «рулевой-моторист»
        и других, а выпускники уже на должности «помощника капитана», «помощника
        механика», «помощника электромеханика».
      </p>
      <p>
        <strong>
          Получается, что Вы в том числе, даете старт в профессиональную жизнь
          нашим курсантам, можете дать им свое наставление или пожелание?
        </strong>
      </p>
      <p>
        - Может звучит совсем просто, но во время учебы – учитесь по-настоящему,
        не лоботрясничайте. Может сейчас до вас не доходит, но время учебы – это
        не только учеба, это еще и становление личности специалиста, не теряйте
        зря это время. И помните, что жизнь продолжается при любых
        обстоятельствах.
      </p>

      <div className="carousel-wrapper">
        <Carousel autoplay={true} dotPosition="top">
          <div>
            <img src={tokmakov2} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={tokmakov3} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={tokmakov4} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={tokmakov5} alt="Фото уплыло:(" />
          </div>
          <div>
            <img src={tokmakov} alt="Фото уплыло:(" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
export default Tokmakov;