import React from "react";
import Badge from "../../badge/Bage";
import Image from "../../image/Image";
const CardFive = () => {
  return (
    <div className="newscard__container cardFive">
      <div className="newscard__background-five">
        <Image
          src="img/newsimg/parad.jpg"
          alt="Фото уплыло:("
          height="100%"
          width="100%"
        />

        <div className="newscard__frontend-five">
          <div className="newscard__date">
            <Badge title={"07.12.2022"} className="newscard__date-bage-five" />
          </div>
          <div className="newscard__info-five">
            Военный парад! <br />
            Форма украшает мужчин!
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardFive;
