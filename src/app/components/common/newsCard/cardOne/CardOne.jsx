import React from "react";
import Badge from "../../badge/Bage";
import Image from "../../image/Image";
const CardOne = () => {
  return (
    <div className="newscard__container cardOne">
      <div className="newscard__background">
        <Image
          src="img/newsimg/corpus.jpg"
          alt="Фото уплыло:("
          height="100%"
          width="100%"
        />

        <div className="newscard__frontend-one">
          <div className="newscard__date-one">
            <Badge title={"07.12.2022"} className="newscard__date-bage" />
          </div>
          <div className="newscard__info">
            Дорогие абитурьенты! Приглашаем Вас принять участие в приемной
            компании!
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardOne;
