import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../../utils/disabled";
const Feedback = observer(() => {
  return (
    <section>
      <h1>Уважаемые выпускники!</h1>
      <p>
        В целях совершенствования качества образования мы проводим анкетирование
        наших выпускников. Ответив на вопросы нашей анкеты, Вы поможете нам
        сделать процесс обучения в нашем филиале еще более эффективным. Для
        этого вам нужно заполнить анкету.
      </p>
      <p>Ваше мнение важно для нас! </p>
      <a
        href="https://forms.yandex.ru/cloud/63dc8f6ceb6146d241e66e4c/"
        target="_blank"
        rel="noopener noreferrer"
        className={toggleClassName(
          "education__link",
          "education__link-white",
          "education__link-black",
          "education__link-contrast"
        )}
      >
        Анкета выпускника
      </a>
    </section>
  );
});
export default Feedback;
