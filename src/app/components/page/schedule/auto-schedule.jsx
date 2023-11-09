import React, { useEffect, useState } from "react";
import raspisanieJSON8 from "../../../mockData/Расписание_12.json";
import raspisanieJSON9 from "../../../mockData/Расписание_11.json";
import locale from "antd/es/date-picker/locale/ru_RU";
import "dayjs/locale/ru";
import EducationContainer from "../../common/educationContainer/education-container";
import { Button, ConfigProvider, DatePicker } from "antd";
import AutoScheduleNav from "./auto-schedule-nav";
import { ReactComponent as StarSelected } from "../../../assets/svg/schedule/star_selected.svg";
import { ReactComponent as Star } from "../../../assets/svg/schedule/star.svg";
import AutoScheduleGroups from "./auto-schedule-groups";
import AutoScheduleTeachers from "./auto-schedule-teachers";

import AutoScheduleGroupsWrapper from "./auto-schedule-groups-wrapper";
import AutoScheduleTeacherClassWrapper from "./auto-schedule-teacher-class-wrapper";
import AutoScheduleClass from "./auto-schedule-class";
const AutoSchedule = () => {
  const raspisanie8 = JSON.parse(JSON.stringify(raspisanieJSON8));
  const groups8 = raspisanie8.faculties[0].groups;
  const raspisanie9 = JSON.parse(JSON.stringify(raspisanieJSON9));
  const groups9 = raspisanie9.faculties[0].groups;
  //значения группы и курса для добавления в избранное
  const [localCourse, setLocalCourse] = useState(
    +localStorage.getItem("course")
  );
  const [localGroup, setLocalGroup] = useState(
    localStorage.getItem("groupNumber")
  );

  /* Навигация раздела */
  const [nav, setNav] = useState("groups");

  /* фильтрация по курсу */
  const [groupsOfSelectedCourse8, setGroupsOfSelectedCourse8] = useState([]);
  const [groupsOfSelectedCourse9, setGroupsOfSelectedCourse9] = useState([]);
  /* выбираем неделю, ее нужно менять каждый раз!!! */
  const [week, setWeek] = useState();

  /* выбранный курс */
  const [course, setCource] = useState("");
  /* номер выбранной группы */
  const [groupNumber, setGroupNumber] = useState(localGroup ? localGroup : "");
  /* выбранная группа */
  const [selectedGroup8, setSelectedGroup8] = useState(null);
  const [selectedGroup9, setSelectedGroup9] = useState(null);
  /* список групп на курсе */
  const [allGroupName, setAllGroupName] = useState([
    { label: "Сперва укажите ваш курс!" },
  ]);
  const [selectedDayNumber, setSelectedDayNumber] = useState("");
  const [selectedDaylessons, setSelectedDayLessons] = useState(null);
  /* если переходили по навигации в преподы или аудитори и вернулись обратно, сбрасываем указанную группу и курс */
  useEffect(() => {
    setAllGroupName([{ label: "Сперва укажите ваш курс!" }]);
    setCource("");
  }, [nav]);

  useEffect(() => {
    /* фильтруем группы, если курс менялся */
    const filtredGroupsFromCourse8 = groups8.filter((e) => e.course === course);
    setGroupsOfSelectedCourse8(filtredGroupsFromCourse8);
    const filtredGroupsFromCourse9 = groups9.filter((e) => e.course === course);
    setGroupsOfSelectedCourse9(filtredGroupsFromCourse9);
    /* получаем новый список */
    const groupNames = filtredGroupsFromCourse8.map((e) => ({
      value: e.group_name,
      label: e.group_name,
    }));
    setAllGroupName(groupNames);
    /* если не первый раз переходим по курсу, то сбрасываем список групп и получаем новый список */
    if (allGroupName.length !== 0) {
      allGroupName.splice(0, allGroupName.length);
    }
  }, [course]);

  useEffect(() => {
    /* фильтруем группы, если курс менялся для сохраненной группы*/
    if (localCourse && localCourse !== null) {
      const filtredGroupsFromCourse8 = groups8.filter(
        (e) => e.course === localCourse
      );
      setGroupsOfSelectedCourse8(filtredGroupsFromCourse8);
      const filtredGroupsFromCourse9 = groups9.filter(
        (e) => e.course === localCourse
      );
      setGroupsOfSelectedCourse9(filtredGroupsFromCourse9);
    }
  }, []);

  /* указываем стартовый день */
  const [day, setDay] = useState("");
  useEffect(() => {
    /* если выбрали новую группу, меням массив группы */

    setSelectedGroup8(
      groupsOfSelectedCourse8.filter((g) => g.group_name === groupNumber)
    );
    setSelectedGroup9(
      groupsOfSelectedCourse9.filter((g) => g.group_name === groupNumber)
    );
  }, [groupNumber]);
  useEffect(() => {
    /* если выбрали новую группу, меням массив группы */
    if (
      localGroup &&
      localGroup != null &&
      groupsOfSelectedCourse8 &&
      groupsOfSelectedCourse9
    ) {
      setSelectedGroup8(
        groupsOfSelectedCourse8.filter((g) => g.group_name === localGroup)
      );
      setSelectedGroup9(
        groupsOfSelectedCourse9.filter((g) => g.group_name === localGroup)
      );
    }
  }, [groupsOfSelectedCourse8, groupsOfSelectedCourse9]);

  const classesOfSelectedGroupOnWeek8 = selectedGroup8?.map((e) => e.days);
  const classesOfSelectedGroupOnWeek9 = selectedGroup9?.map((e) => e.days);
  /* выбор курса */
  const handleChangeCourse = (value) => {
    setCource(value);
  };
  /* выбор группы */
  const handleChangeGroup = (value) => {
    setGroupNumber(value);
    setSelectedDayLessons(null);
  };
  /* Выбор даты !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
  function getDayNumber() {
    if (day === "13-11-2023") {
      return 1;
    } else if (day === "14-11-2023") {
      return 2;
    } else if (day === "15-11-2023") {
      return 3;
    } else if (day === "16-11-2023") {
      return 4;
    } else if (day === "17-11-2023") {
      return 5;
    } else if (day === "18-11-2023") {
      return 6;
    } else if (day === "6-11-2023") {
      return 1;
    } else if (day === "7-11-2023") {
      return 2;
    } else if (day === "8-11-2023") {
      return 3;
    } else if (day === "9-11-2023") {
      return 4;
    } else if (day === "10-11-2023") {
      return 5;
    } else if (day === "11-11-2023") {
      return 6;
    }
  }
  useEffect(() => {
    if (day === "13-11-2023") {
      setWeek(12);
    } else if (day === "14-11-2023") {
      setWeek(12);
    } else if (day === "15-11-2023") {
      setWeek(12);
    } else if (day === "16-11-2023") {
      setWeek(12);
    } else if (day === "17-11-2023") {
      setWeek(12);
    } else if (day === "18-11-2023") {
      setWeek(12);
    } else if (day === "6-11-2023") {
      setWeek(11);
    } else if (day === "7-11-2023") {
      setWeek(11);
    } else if (day === "8-11-2023") {
      setWeek(11);
    } else if (day === "9-11-2023") {
      setWeek(11);
    } else if (day === "10-11-2023") {
      setWeek(11);
    } else if (day === "11-11-2023") {
      setWeek(11);
    }
  }, [day]);

  /* фильтрация по дню недели */
  useEffect(() => {
    if (
      classesOfSelectedGroupOnWeek8 &&
      classesOfSelectedGroupOnWeek9 &&
      selectedDayNumber
    ) {
      if (week === 12) {
        /* Меняем неделю!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
        setSelectedDayLessons(
          classesOfSelectedGroupOnWeek8[0]?.filter(
            (e) => e.weekday === selectedDayNumber
          )
        );
      } else if (week === 11) {
        setSelectedDayLessons(
          classesOfSelectedGroupOnWeek9[0]?.filter(
            (e) => e.weekday === selectedDayNumber
          )
        );
      }
    }
  }, [
    selectedDayNumber,
    groupNumber,
    day,
    selectedGroup9,
    selectedGroup8,
    week,
  ]);

  useEffect(() => {
    setSelectedDayNumber(getDayNumber());
  }, [day]);
  const onChange = (date, dateString) => {
    setSelectedDayNumber(getDayNumber());
    setDay(dateString);
  };

  const getDayToday = (tomorrow) => {
    const dateToday = new Date();
    if (tomorrow) {
      const timeOfDay = 60 * 60 * 1000 * 24;
      const tomorrowDate = new Date(dateToday.getTime() + timeOfDay);
      const getYearToday = tomorrowDate.getFullYear();
      const getMonthToday = tomorrowDate.getMonth() + 1;
      const getDayToday = tomorrowDate.getDate();
      return `${getDayToday}-${getMonthToday}-${getYearToday}`;
    } else {
      const getYearToday = dateToday.getFullYear();
      const getMonthToday = dateToday.getMonth() + 1;
      const getDayToday = dateToday.getDate();
      return `${getDayToday}-${getMonthToday}-${getYearToday}`;
    }
  };
  /* делаем активными дни в календаря */
  function disabledDate(current) {
    const startDate = new Date(2023, 10, 6); // не забываем про месяцы -1
    const endDate = new Date(2023, 10, 19); // дата окончания недели должна быть +1
    return (
      current.$d < startDate || // проверяем, что дата находится в заданном диапазоне
      current.$d > endDate ||
      current.$W === 0 // отключаем вс
    );
  }
  useEffect(() => {
    setSelectedDayLessons(null);
  }, [course]);
  const [bookmark, setBookmark] = useState(false);
  function toggleBookmark(bookmark) {
    if (bookmark) {
      localStorage.setItem("course", course);
      localStorage.setItem("groupNumber", groupNumber);
      setLocalCourse(localStorage.getItem("course"));
      setLocalGroup(localStorage.getItem("groupNumber"));
    } else {
      localStorage.removeItem("course", course);
      localStorage.removeItem("groupNumber", groupNumber);
      setLocalCourse("");
      setLocalGroup("");
    }
    setBookmark(bookmark);
  }

  /* если localGroup === groupNumber рисуем закрашенную звездочку, если нет, то пустую */
  function getBookmark() {
    if (localGroup === groupNumber) {
      return (
        <div className="first-container">
          <div className="group-info-name">{localGroup}</div>
          <div className="group-info-mark">
            <StarSelected
              width={"25px"}
              height={"25px"}
              onClick={() => toggleBookmark(false)}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="first-container">
          <div className="group-info-name">{groupNumber}</div>
          <div className="group-info-mark">
            <Star
              width={"25px"}
              height={"25px"}
              onClick={() => toggleBookmark(true)}
            />
          </div>
        </div>
      );
    }
  }

  //логика для работы блока преподавателей
  const [localTeacher, setLocalTeacher] = useState(
    localStorage.getItem("savedTeacher")
  );
  const [teachersLessonsOnDay, setTeachersLessonsOnDay] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(
    localTeacher ? localTeacher : "Выберите преподавателя"
  );
  useEffect(() => {
    setSelectedDayLessons(null);
  }, [course]);
  const [bookmarkTeachers, setBookmarkTeachers] = useState(false);
  function toggleBookmarkTeachers(bookmarkTeachers) {
    if (bookmarkTeachers) {
      localStorage.setItem("savedTeacher", selectedTeacher);

      setLocalTeacher(localStorage.getItem("savedTeacher"));
    } else {
      localStorage.removeItem("savedTeacher");

      setLocalTeacher("");
    }
    setBookmarkTeachers(bookmarkTeachers);
  }
  function getBookmarkTeacher() {
    if (localTeacher === selectedTeacher) {
      return (
        <div className="first-container">
          <div className="group-info-name">{localTeacher}</div>
          <div className="group-info-mark">
            <StarSelected
              width={"25px"}
              height={"25px"}
              onClick={() => toggleBookmarkTeachers(false)}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="first-container">
          <div className="group-info-name">{selectedTeacher}</div>
          <div className="group-info-mark">
            <Star
              width={"25px"}
              height={"25px"}
              onClick={() => toggleBookmarkTeachers(true)}
            />
          </div>
        </div>
      );
    }
  }

  //логика для работы блока аудиторий
  const [localClass, setLocalClass] = useState(localStorage.getItem("class"));
  const [classLessonsOnDay, setClassLessonsOnDay] = useState(null);
  const [selectedClass, setSelectedClass] = useState(
    localClass ? localClass : "Выберите аудиторию"
  );

  useEffect(() => {
    setSelectedDayLessons(null);
  }, [course]);
  const [bookmarkClass, setBookmarkClass] = useState(false);
  function toggleBookmarkClass(bookmarkClass) {
    if (bookmarkClass) {
      localStorage.setItem("class", selectedClass);

      setLocalClass(localStorage.getItem("class"));
    } else {
      localStorage.removeItem("class");

      setLocalClass("");
    }
    setBookmarkClass(bookmarkClass);
  }
  function getBookmarkClass() {
    if (localClass === selectedClass) {
      return (
        <div className="first-container">
          <div className="group-info-name">{localClass}</div>
          <div className="group-info-mark">
            <StarSelected
              width={"25px"}
              height={"25px"}
              onClick={() => toggleBookmarkClass(false)}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="first-container">
          <div className="group-info-name">{selectedClass}</div>
          <div className="group-info-mark">
            <Star
              width={"25px"}
              height={"25px"}
              onClick={() => toggleBookmarkClass(true)}
            />
          </div>
        </div>
      );
    }
  }

  return (
    <EducationContainer classes={"back_white"}>
      <ConfigProvider
        renderEmpty={() => "Выберите курс!"}
        theme={{
          components: {
            Select: {
              fontSize: 18,
              colorTextPlaceholder: "#123655",
              colorBorder: "#123655",
            },
            Button: {
              fontSize: 16,
              colorText: "#123655",
              colorBorder: "#123655",
            },
            DatePicker: {
              fontSize: 16,
              colorTextPlaceholder: "#123655",
              colorBorder: "#123655",
            },
          },
        }}
      >
        <div className="auto-schedule__container">
          <AutoScheduleNav nav={nav} setNav={setNav} />

          {nav === "groups" ? (
            <AutoScheduleGroups
              localCourse={localCourse}
              handleChangeCourse={handleChangeCourse}
              allGroupName={allGroupName}
              handleChangeGroup={handleChangeGroup}
              localGroup={localGroup}
            />
          ) : nav === "teacher" ? (
            <AutoScheduleTeachers
              groups8={groups8}
              groups9={groups9}
              week={week}
              day={day}
              /*   teachersLessonsOnDay={teachersLessonsOnDay} */
              setTeachersLessonsOnDay={setTeachersLessonsOnDay}
              selectedTeacher={selectedTeacher}
              setSelectedTeacher={setSelectedTeacher}
            />
          ) : (
            <AutoScheduleClass
              groups8={groups8}
              groups9={groups9}
              week={week}
              day={day}
              /*    classLessonsOnDay={classLessonsOnDay} */
              setClassLessonsOnDay={setClassLessonsOnDay}
              selectedClass={selectedClass}
              setSelectedClass={setSelectedClass}
            />
          )}
          <div className="auto-schedule__container-date-container">
            <Button className="button" onClick={() => setDay(getDayToday())}>
              На сегодня
            </Button>
            <Button
              className="button"
              onClick={() => setDay(getDayToday(true))}
            >
              На завтра
            </Button>
            <DatePicker
              className="button"
              locale={locale}
              format="D-MM-YYYY"
              placeholder="Выберите дату"
              disabledDate={disabledDate}
              onChange={onChange}
            />
          </div>
          {nav === "groups" ? (
            <AutoScheduleGroupsWrapper
              selectedDaylessons={selectedDaylessons}
              day={day}
              week={week}
              getBookmark={getBookmark}
            />
          ) : nav === "teacher" ? (
            <AutoScheduleTeacherClassWrapper
              data={teachersLessonsOnDay}
              getBookmark={getBookmarkTeacher}
              day={day}
              week={week}
              teachersComponent={true}
            />
          ) : (
            <AutoScheduleTeacherClassWrapper
              data={classLessonsOnDay}
              getBookmark={getBookmarkClass}
              day={day}
              week={week}
            />
          )}
        </div>
      </ConfigProvider>
    </EducationContainer>
  );
};
export default AutoSchedule;
