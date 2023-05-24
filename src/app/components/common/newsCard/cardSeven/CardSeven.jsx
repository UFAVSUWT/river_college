import React from "react";
import Badge from "../../badge/Bage";
import Image from "../../image/Image";
const CardSeven = () => {
  return (
    <div className="newscard__container cardSeven">
      <div className="newscard__background-seven">
        <Image
          src="img/newsimg/mans.jpg"
          alt="Фото уплыло:("
          height="100%"
          width="100%"
        />

        <div className="newscard__frontend-seven">
          <div className="newscard__date">
            <Badge title={"07.12.2022"} className="newscard__date-bage-seven" />
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
export default CardSeven;
