import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
const CalendarGrid = ({ startDay, today, handlSelectDay, selectedDay }) => {
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
  const isCurrentDay = (day) => moment().isSame(day, "day");
  const isSelectedMonth = (day) => today.isSame(day, "month");
  const getSelectedClasses = (selected, date) => {
    if (selected && selected !== "" && date.format("DD.MM.YY") === selected) {
      return " calendarCellIsSelected ";
    }
  };
  return (
    <div className="calendarGrid__wrapper">
      {[...Array(7)].map((dayWeek, i) => (
        <div key={i} className="calendarCell-header">
          {moment().day(i).format("dd")}
        </div>
      ))}
      {daysArray.map((date, i) => (
        <div
          className={`calendarCell ${getSelectedClasses(selectedDay, date)} ${
            date.day() === 6 || date.day() === 0 ? " isWeekend" : ""
          }`}
          key={i}
          onClick={() => handlSelectDay(date)}
        >
          <div className="calendarCell-row">
            <div
              className={`calendarCell-day ${
                isSelectedMonth(date) ? " isDayOfSelectedMonth " : " "
              }`}
            >
              {isCurrentDay(date) ? (
                <div className="calendarCell-day-currentDay">
                  {date.format("D")}
                </div>
              ) : (
                <div>{date.format("D")}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
CalendarGrid.propTypes = {
  startDay: PropTypes.object.isRequired,
};
export default CalendarGrid;
