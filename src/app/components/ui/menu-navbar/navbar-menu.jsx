import React from "react";
import { Menu } from "antd";
import { ReactComponent as Icon } from "../../../assets/svg/burger.svg";
import theme from "../../../store/theme";
import {
  toggleIconColor,
  toggleIconHeightSize,
  toggleIconWidthSize,
} from "../../../utils/disabled";
import { useNavigate } from "react-router-dom";
import {
  ApplicantMenu,
  EducationMenu,
  MainMenu,
  StudentLifeMenu,
  TrainingMenu,
} from "./items-menu";

const MenuNavbar = ({ toggleFontSize }) => {
  const navigate = useNavigate();
  const toggleBackColor = () => {
    const currentTheme = theme.theme;
    if (currentTheme === "main") return "#0C1C2B";
    if (currentTheme === "white") return "white";
    if (currentTheme === "black") return "black";
    if (currentTheme === "contrast") return "#9dd1ff";
  };
  const toggleColor = () => {
    const currentTheme = theme.theme;
    if (currentTheme === "main") return "white";
    if (currentTheme === "white") return "black";
    if (currentTheme === "black") return "white";
    if (currentTheme === "contrast") return "#195183";
  };

  const onEducationItemClick = (item) => {
    navigate(`learning/${item.key}`);
  };
  const onEnrolleeItemClick = (item) => {
    navigate(`enrollee/${item.key}`);
  };
  const onTrainingItemClick = (item) => {
    navigate(`training/${item.key}`);
  };
  const onMainItemClick = (item) => {
    if (item.key === "main") {
      navigate(`/`);
    } else {
      navigate(`home/${item.key}`);
    }
  };
  const onLiveItemClick = (item) => {
    if (item.key === "ourPride") {
      navigate(`live/${item.key}`);
    } else {
      navigate(`home/${item.key}`);
    }
  };
  return (
    <>
      <nav className="header__navbar">
        <Menu
          overflowedIndicator={
            <Icon
              stroke={toggleIconColor("#fff")}
              width={toggleIconWidthSize("30px", "32px", "35px", "38px")}
              height={toggleIconHeightSize("18px", "22px", "25px", "28px")}
            />
          }
          className="header__navbar-button"
          style={{
            width: "100%",
            fontSize: toggleFontSize(0.875),
            backgroundColor: toggleBackColor(),
            color: toggleColor(),
            hover: { color: "white" },
          }}
          mode="horizontal"
          items={[
            {
              label: "Главная",
              key: "main",

              children: [
                {
                  label: <MainMenu onMainItemClick={onMainItemClick} />,
                  key: "mainMenu",
                  style: {
                    height: "fit-content",
                  },
                },
              ],
            },
            {
              label: "Образование",
              key: "education",
              children: [
                {
                  label: (
                    <EducationMenu
                      onEducationItemClick={onEducationItemClick}
                    />
                  ),
                  key: "educationMenu",
                  style: {
                    height: "fit-content",
                  },
                },
              ],
            },
            {
              label: "Абитуриенту",
              key: "enrollee",
              children: [
                {
                  label: (
                    <ApplicantMenu onEnrolleeItemClick={onEnrolleeItemClick} />
                  ),
                  key: "applicantMenu",
                  style: {
                    height: "fit-content",
                  },
                },
              ],
            },
            {
              label: "Дополнительное образование",
              key: "training",

              children: [
                {
                  label: (
                    <TrainingMenu onTrainingItemClick={onTrainingItemClick} />
                  ),
                  key: "trainingMenu",
                  style: {
                    height: "fit-content",
                  },
                },
              ],
            },
            {
              label: "Студенческая жизнь",
              key: "studentLife",
              children: [
                {
                  label: <StudentLifeMenu onLiveItemClick={onLiveItemClick} />,
                  key: "studentLifeMenu",
                  style: {
                    height: "fit-content",
                  },
                },
              ],
            },
          ]}
        ></Menu>
      </nav>
    </>
  );
};

export default MenuNavbar;
