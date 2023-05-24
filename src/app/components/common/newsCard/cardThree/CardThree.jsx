import React from "react";
import Badge from "../../badge/Bage";
import Image from "../../image/Image";
const CardThree = () => {
  return (
    <div className="newscard__container container-three">
      <div className="newscard__background">
        <Image
          src="img/newsimg/guitar.jpg"
          alt="Фото уплыло:("
          height="100%"
          width="100%"
        />

        <div className="newscard__frontend-three">
          <div className="newscard__date-three">
            <Badge title={"07.12.2022"} className="newscard__date-bage-three" />
          </div>
          <div className="newscard__info-three">
            Конкурс талантов! <br />
            АХ как поет!
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardThree;
