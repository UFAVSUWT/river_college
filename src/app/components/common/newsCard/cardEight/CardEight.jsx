import React from "react";
import Badge from "../../badge/Bage";
import Image from "../../image/Image";
const CardEight = () => {
  return (
    <div className="newscard__container cardEight">
      <div className="newscard__background-eight">
        <Image
          src="img/newsimg/raspred.jpg"
          alt="Фото уплыло:("
          height="100%"
          width="100%"
        />

        <div className="newscard__frontend-eight">
          <div className="newscard__date">
            <Badge title={"07.12.2022"} className="newscard__date-bage-eight" />
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
export default CardEight;
