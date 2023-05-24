import PropTypes from "prop-types";
import Button from "../button/Button";
import React from "react";
import { ReactComponent as ArrowButton } from "../../../assets/svg/arrowButton.svg";
import { observer } from "mobx-react-lite";
import {
  toggleClassName,
  toggleFontSize,
  toggleIconColor,
} from "../../../utils/disabled";
import { NavLink } from "react-router-dom";

const InfoContainer = observer(
  ({ title, btnTitle, image, children, newsTitle }) => {
    return (
      <>
        <div
          style={{ fontSize: toggleFontSize(1) }}
          className="infocontainer__header"
        >
          <div>
            <div
              className={toggleClassName(
                "infocontainer__titile",
                "infocontainer__titile-white",
                "infocontainer__titile-black",
                "infocontainer__titile-contrast"
              )}
            >
              {title}
            </div>
          </div>
          {btnTitle ? (
            <div className="infocontainer__button">
              <NavLink to="home/univercityNews">
                <Button
                  style={{ fontSize: toggleFontSize(1) }}
                  className={toggleClassName(
                    "infopage__button",
                    "white white-radius",
                    "black black-radius",
                    "contrast contrast-radius"
                  )}
                >
                  <span>{btnTitle}</span>
                  {<ArrowButton fill={toggleIconColor("#C80000")} />}
                </Button>
              </NavLink>
            </div>
          ) : null}
        </div>

        {/*  <div className="infocontainer__image imageFloatLeft">{image}</div> */}
        <div className="news__block">
          <div style={{ fontSize: toggleFontSize(1) }} className="news__text">
            <div className="infocontainer__image imageFloatLeft">
              <span
                style={{ fontSize: toggleFontSize(1) }}
                className={toggleClassName(
                  "news__title",
                  "news__title-white",
                  "news__title-black",
                  "news__title-contrast"
                )}
              >
                {newsTitle}
              </span>
              {image}
            </div>
            {children}
          </div>
        </div>
      </>
    );
  }
);
InfoContainer.propTypes = {
  title: PropTypes.string,
  btnTitle: PropTypes.string,
  image: PropTypes.object,
  newsTitle: PropTypes.string,
  children: PropTypes.node,
};
export default InfoContainer;
