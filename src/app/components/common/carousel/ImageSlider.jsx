import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Arctica from "../../../assets/img/main/arctica.jpg";
import Boat from "../../../assets/img/main/boat.png";
import Students from "../../../assets/img/main/students.jpg";
import { NavLink } from "react-router-dom";
import ChapterMenu from "../../ui/chapterMenu/ChapterMenu";
import images from "../../../store/images";
import { observer } from "mobx-react-lite";

const ImageSlider = observer(({ className, ...rest }) => {
  const linksArray = [
    { title: "Главная", path: "/" },
    { title: "О филиале", path: "/home/aboutBranch" },
    { title: "Историческая справка", path: "/home/historicalReference" },
    { title: "Новости", path: "/home/univercityNews" },
    { title: "План мероприятий", path: "/home/univercityEvents" },
  ];
  return (
    <>
      {images.image !== "off" ? (
        <>
          <div className="main-mobileMenu">
            <ChapterMenu linksArray={linksArray} />
          </div>
          <div className="imageSlider-show">
            <Swiper
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 5000,
              }}
            >
              <SwiperSlide>
                <NavLink to={"enrollee/reception"}>
                  <div className="marquee-infinite">
                    <span>
                      <img
                        className={`${
                          images.image === "gray" ? "imageFilter" : null
                        }`}
                        src={Boat}
                        alt=""
                        width={"250px"}
                        height={"96px"}
                      />
                    </span>
                  </div>
                  <div className="_container">
                    <div className="swiperSlideFirs__lable">
                      <div className="_container swiperSlideFirs__lable-content">
                        Открыт набор курсантов по специальностям высшего и
                        среднего образования!
                        <br /> Стань капитаном своей судьбы!
                      </div>
                    </div>
                  </div>
                  <img
                    className={`${
                      images.image === "gray" ? "imageFilter" : null
                    }`}
                    src={Students}
                    alt="Картинка уплыла"
                  />
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <div className="marquee-infinite">
                  <span>
                    <img src={Boat} alt="" width={"250px"} height={"96px"} />
                  </span>
                </div>
                <div className="_container">
                  <h1 className="swiperSlideFirs__title">Наши выпускники!</h1>
                  <div className="swiperSlideFirs__text">
                    Статья о том, как сложилась судьба некоторых наших
                    выпускников, которые связали свою жизнь с морем!
                  </div>
                  <ul className="swiperSlideFirs__list">
                    <li>Преподаватель в родном училище</li>
                    <li>Капитан огромного ледокола в арктике!</li>
                    <li>И еще несколько интересных историй!</li>
                  </ul>
                  <NavLink to={"home/univercityNews"}>
                    <div className="swiperSlideFirs__btn">Читать</div>
                  </NavLink>
                </div>
                <img src={Arctica} alt="Картинка уплыла" />
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      ) : null}
    </>
  );
});

ImageSlider.defaultProps = {
  pagination: true,
};

ImageSlider.propTypes = {
  /*  items: PropTypes.array.isRequired, */
  className: PropTypes.string,
  pagination: PropTypes.bool.isRequired,
};

export default ImageSlider;
