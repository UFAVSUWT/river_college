import React, { useState } from "react";
import moment from "moment";
import Header from "./header/Header";
import Monitor from "./monitor/Monitor";
import CalendarGrid from "./calendarGrid/CalendarGrid";
import ScheduleInfo from "../../../mockData/Расписание_14.json";
const Calendar = ({ selectedDay, handlSelectDay }) => {
  const groups = ScheduleInfo.faculties.map((e) => e.groups);
  const firstCourse = ScheduleInfo.faculties.map((e) =>
    e.groups.filter((e) => e.course === 1)
  );
  const firstcourse = groups.filter((e) => e.course === 1);

  window.moment = moment;
  moment.updateLocale("ru", { week: { dow: 1 } });
  moment.updateLocale("ru", {
    months: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
  });
  moment.updateLocale("ru", {
    weekdaysMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  });
  const [today, setToday] = useState(moment());

  const startDay = today.clone().startOf("month").startOf("week");
  const prevHandler = () => {
    setToday((prevState) => prevState.clone().subtract(1, "month"));
  };
  const todayHandler = () => {
    setToday(moment());
  };
  const nextHandler = () => {
    setToday((prevState) => prevState.clone().add(1, "month"));
  };

  return (
    <div className="calendar__wrapper">
      <Header />
      <Monitor
        today={today}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
        prevHandler={prevHandler}
      />
      <CalendarGrid
        startDay={startDay}
        today={today}
        handlSelectDay={handlSelectDay}
        selectedDay={selectedDay}
      />
    </div>
  );
};
export default Calendar;
