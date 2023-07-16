import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import { toggleClassName } from "../../../utils/disabled";
const NewsNavbar = observer(() => {
  return (
    <>
      <nav className="news__navbar">
        <ul>
          {/* <li
            className={toggleClassName(
              "navbar__button",
              "navbar__button-white",
              "navbar__button-black",
              "navbar__button-contrast"
            )}
          >
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive
                  ? toggleClassName(
                      "navbar__button-active",
                      "navbar__button-white-active",
                      "navbar__button-black-active",
                      "navbar__button-contrast-active"
                    )
                  : ""
              }
            >
              Новости
            </NavLink>
          </li> */}
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
                      "navbar__button-white-active",
                      "navbar__button-black-active",
                      "navbar__button-contrast-active"
                    )
                  : ""
              }
            >
              Мероприятия
            </NavLink>
          </li> */}
          <li
            className={toggleClassName(
              "navbar__button",
              "navbar__button-white",
              "navbar__button-black",
              "navbar__button-contrast"
            )}
          >
            <NavLink
              to="/applicants"
              className={(navData) =>
                navData.isActive
                  ? toggleClassName(
                      "navbar__button-active",
                      "navbar__button-white-active",
                      "navbar__button-black-active",
                      "navbar__button-contrast-active"
                    )
                  : ""
              }
            >
              Поступающим
            </NavLink>
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
                      "navbar__button-white-active",
                      "navbar__button-black-active",
                      "navbar__button-contrast-active"
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
export default NewsNavbar;
