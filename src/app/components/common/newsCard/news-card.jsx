import React, { useState } from "react";
const NewsCard = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={`card  ${isActive ? "show z-index" : ""}`}
    >
      <div className="card__image-holder">
        {/* <img src={Image} alt="wave" /> */}
      </div>
      <div className="card-title">
        <a href="/" className="toggle-info btnCard">
          <span className="left"></span>
          <span className="right"></span>
        </a>
        <h2>
          Card title
          <small>Image from unsplash.com</small>
        </h2>
      </div>
      <div className="card-flap flap1">
        <div className="card-description">
          This grid is an attempt to make something nice that works on touch
          devices. Ignoring hover states when they're not available etc.
        </div>
        <div className="card-flap flap2">
          <div className="card-actions">
            <a href="/" className="btnCard">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>

    /*   <div className="newsCard_wrapper">
      <div className="newsCard_wrapper-image_container">
        <img src="" alt="" />
        <div className="newsCard_wrapper-image_container-date"></div>
      </div>
      <div className="newsCard_wrapper-content_container">
        <div className="newsCard_wrapper-content_container-content">
          <h5>Учебная практика</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
            fugiat ut delectus mollitia minus, illum odit quae in neque suscipit
            accusantium porro! Similique veniam nulla libero dicta, ullam harum
            voluptatum?
          </p>
          <button className="newsCard_wrapper-content_container-content-btnCard_show"></button>
          <button className="newsCard_wrapper-content_container-content-btnCard_nav"></button>
        </div>
      </div>
    </div> */
  );
};
export default NewsCard;
