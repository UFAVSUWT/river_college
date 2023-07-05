import { ReactComponent as GlassesLogo } from "../../../assets/svg/glasses.svg";
import { ReactComponent as CalendarLogo } from "../../../assets/svg/calendar.svg";
import { ReactComponent as MuseumLogo } from "../../../assets/svg/museum.svg";
import { ReactComponent as RiverUniversityLogo } from "../../../assets/svg/riveruniversityLogo.svg";
import { ReactComponent as UserLogo } from "../../../assets/svg/user.svg";
import React, { useState } from "react";
import Button from "../../common/button/Button";
import MenuNavbar from "../menu-navbar/navbar-menu";
import { NavLink } from "react-router-dom";
import Disabled from "../disabled/disabled-panel";
import { observer } from "mobx-react-lite";
import fontSize from "../../../store/fontSize";
import { toggleIconColor } from "../../../utils/disabled";
import {
  toggleFontSize,
  toggleIconHeightSize,
  toggleIconWidthSize,
} from "../../../utils/disabled";
import { disabled } from "../../../utils/disabled";
import { toggleClassName } from "../../../utils/disabled";
import PhoneMenu from "../../common/phoneMenu/PhoneMenu";
import DesktopLogIn from "../logIn/desktopLogIn";
const NavBar = observer(() => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <header
        className={toggleClassName(
          "header",
          "header-white",
          "header-black",
          "header-contrast"
        )}
      >
        {/* <div className="_container">
          {fontSize.fontSize !== "original" ? <Disabled /> : null}
          <div
            style={{ fontSize: toggleFontSize(12) }}
            className="header__section3"
          >
            
            <div className="header__section3-link">
              <div className="header__link header__link-pointer">
                <span className="icon">
                  <object>
                    <GlassesLogo
                      fill={toggleIconColor("#fff")}
                      width={toggleIconWidthSize(
                        "18px",
                        "22px",
                        "25px",
                        "28px"
                      )}
                      height={toggleIconHeightSize(
                        "18px",
                        "22px",
                        "25px",
                        "28px"
                      )}
                    />
                  </object>
                </span>
                <span onClick={disabled} className="text__underlined">
                  Версия для слабовидящих
                </span>
              </div>

           
              <div className="header__link">
                <span className="icon">
                  <object>
                    <MuseumLogo
                      fill={toggleIconColor("#fff")}
                      width={toggleIconWidthSize(
                        "18px",
                        "22px",
                        "25px",
                        "28px"
                      )}
                      height={toggleIconHeightSize(
                        "18px",
                        "22px",
                        "25px",
                        "28px"
                      )}
                    />
                  </object>
                </span>
                <span className="text__underlined">
                  <NavLink to="sveden/common">
                    Сведения об образовательной организации
                  </NavLink>
                </span>
              </div>
            </div>
    
            <div className="header__section3-btn">

              <div className="header__section3-btn-margin header__timetable">
                <NavLink to="schedule">
                  <Button
                    className={`button ${toggleClassName(
                      "btn__timetable",
                      "btn__timetable-white",
                      "btn__timetable-black",
                      "btn__timetable-contrast"
                    )}`}
                  >
                    {
                      <span className="icon">
                        <object>
                          <CalendarLogo
                            fill={toggleIconColor("#C80000")}
                            width={toggleIconWidthSize(
                              "18px",
                              "22px",
                              "25px",
                              "28px"
                            )}
                            height={toggleIconHeightSize(
                              "18px",
                              "22px",
                              "25px",
                              "28px"
                            )}
                          />
                        </object>
                      </span>
                    }
                    {
                      <span
                        style={{ fontSize: toggleFontSize(12) }}
                        className="btn__office-text"
                      >
                        Расписание
                      </span>
                    }
                  </Button>
                </NavLink>
              </div>
   
              <div className="header__section3-btn-margin header__office">
                <Button
                  onClick={() => setIsActive(!isActive)}
                  className={`button ${toggleClassName(
                    "btn__office",
                    "btn__office-white",
                    "btn__office-black",
                    "btn__office-contrast"
                  )}`}
                >
                  {
                    <span className="icon">
                      <object>
                        <UserLogo
                          fill={toggleIconColor("#fff")}
                          width={toggleIconWidthSize(
                            "18px",
                            "22px",
                            "25px",
                            "28px"
                          )}
                          height={toggleIconHeightSize(
                            "18px",
                            "22px",
                            "25px",
                            "28px"
                          )}
                        />
                      </object>
                    </span>
                  }
                  {
                    <span
                      style={{ fontSize: toggleFontSize(12) }}
                      className="btn__office-text"
                    >
                      Личный кабинет
                    </span>
                  }
                </Button>
                <DesktopLogIn isActive={isActive} setIsActive={setIsActive} />
              </div>
            </div>
          </div>
        </div> */}
        {/* Разделительная красная линия */}
        {/* <hr className="redline" /> */}
        <div className="_container">
          <div className="header__section2">
            <div className="signBoard__logo">
              <NavLink to="">
                <object>
                  <RiverUniversityLogo
                    fill={toggleIconColor("#0C1C2B", "", "#000")}
                  />
                </object>
              </NavLink>
            </div>
            <div style={{ fontSize: "2rem" }} className="signBoard__tagline">
              СТАНЬ КАПИТАНОМ СВОЕЙ СУДЬБЫ!
            </div>
          </div>
        </div>

        <div className="_container">
          <div className="header__section1">
            <MenuNavbar toggleFontSize={toggleFontSize} />
          </div>
        </div>
      </header>
      <PhoneMenu />
    </>
  );
});
export default NavBar;
