import React from "react";
import Badge from "../../badge/Bage";
import Image from "../../image/Image";
const CardTwo = () => {
  return (
    <div className="newscard__container container-two">
      <div className="newscard__background">
        <Image
          src="img/newsimg/hersones.jpg"
          alt="Фото уплыло:("
          height="100%"
          width="100%"
        />

        <div className="newscard__frontend-two">
          <div className="newscard__date-two">
            <Badge title={"07.12.2022"} className="newscard__date-bage-two" />
          </div>
          <div className="newscard__info-two">Учебный фрегат ХЕРСОНЕС!</div>
        </div>
      </div>
    </div>
  );
};
export default CardTwo;
