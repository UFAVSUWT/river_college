import React from "react";
import Button from "../../common/button/Button";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
const Schedule = () => {
  const navigate = useNavigate();
  return (
    <main className="schedule__container">
      <div className="schedule__wrapper">
        <dib className="schedule__wrapper-btn-container">
          <Button onClick={() => navigate(-1)}>Назад</Button>
          <NavLink to="/">
            <Button>На главную</Button>
          </NavLink>
        </dib>
        {/* <Calendar /> */}
        Расписание отсутствует
      </div>
    </main>
  );
};
export default Schedule;
