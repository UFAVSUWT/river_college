import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import { toggleClassName, toggleFontSize } from "../../../utils/disabled";
import PropTypes from "prop-types";
const NewsNavbar = observer(({ mainComponents, setMainComponents }) => {
  return (
    <>
      <nav className="news__navbar">
        <ul>
          <li
            className={
              mainComponents === "news"
                ? toggleClassName(
                    "navbar__button-active",
                    "navbar__button-active",
                    "navbar__button-active-black",
                    "navbar__button-active-contrast"
                  )
                : toggleClassName(
                    "navbar__button",
                    "navbar__button-white",
                    "navbar__button-black",
                    "navbar__button-contrast"
                  )
            }
            style={{ fontSize: toggleFontSize(22) }}
            onClick={() => setMainComponents("news")}
          >
            Новости
          </li>
          {/* <li
            className={toggleClassName(
              "navbar__button",
              "navbar__button-white",
              "navbar__button-black",
              "navbar__button-contrast"
            )}
          >
            <NavLink
              to="/events"
              className={(navData) =>
                navData.isActive
                  ? toggleClassName(
                      "navbar__button-active",
                      "navbar__button-active",
                      "navbar__button-active-black",
                      "navbar__button-active-contrast"
                    )
                  : ""
              }
            >
              Мероприятия
            </NavLink>
          </li> */}
          <li
            className={
              mainComponents === "applicants"
                ? toggleClassName(
                    "navbar__button-active",
                    "navbar__button-active",
                    "navbar__button-active-black",
                    "navbar__button-active-contrast"
                  )
                : toggleClassName(
                    "navbar__button",
                    "navbar__button-white",
                    "navbar__button-black",
                    "navbar__button-contrast"
                  )
            }
            onClick={() => setMainComponents("applicants")}
            style={{ fontSize: toggleFontSize(22) }}
          >
            Поступающим
          </li>
          {/* <li
            className={toggleClassName(
              "navbar__button",
              "navbar__button-white",
              "navbar__button-black",
              "navbar__button-contrast"
            )}
          >
            <NavLink
              to="/security"
              className={(navData) =>
                navData.isActive
                  ? toggleClassName(
                      "navbar__button-active",
                      "navbar__button-active",
                      "navbar__button-active-black",
                      "navbar__button-active-contrast"
                    )
                  : ""
              }
            >
              Безопасность
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </>
  );
});
NewsNavbar.propTypes = {
  mainComponents: PropTypes.string,
  setMainComponents: PropTypes.func,
};
export default NewsNavbar;
