import React, { useEffect, useState } from "react";
import raspisanieJSON8 from "../../../mockData/Расписание_8.json";
import raspisanieJSON9 from "../../../mockData/Расписание_9.json";
import locale from "antd/es/date-picker/locale/ru_RU";
import "dayjs/locale/ru";
import EducationContainer from "../../common/educationContainer/education-container";
import { Button, ConfigProvider, DatePicker, Select } from "antd";
import AutoScheduleNav from "./auto-schedule-nav";

const AutoSchedule = () => {
  const raspisanie8 = JSON.parse(JSON.stringify(raspisanieJSON8));
  const groups8 = raspisanie8.faculties[0].groups;
  const raspisanie9 = JSON.parse(JSON.stringify(raspisanieJSON9));
  const groups9 = raspisanie9.faculties[0].groups;

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
  const [groupNumber, setGroupNumber] = useState("");
  /* выбранная группа */
  const [selectedGroup8, setSelectedGroup8] = useState(null);
  const [selectedGroup9, setSelectedGroup9] = useState(null);
  /* список групп на курсе */
  const [allGroupName, setAllGroupName] = useState([
    { label: "Сперва укажите ваш курс!" },
  ]);
  /* если переходили по навигации в преподы или аудитори и вернулись обратно, сбрасываем указанную группу и курс */
  useEffect(() => {
    setAllGroupName([{ label: "Сперва укажите ваш курс!" }]);
    setCource("");
    /*  setGroupNumber("");
    setWeek(); */
    /*    setSelectedGroup8();
    setSelectedGroup9(); */
  }, [nav]);

  useEffect(() => {
    /* фильтруем группы, если курс менялся */
    const filtredGroupsFromCourse8 = groups8.filter((e) => e.course === course);
    setGroupsOfSelectedCourse8(filtredGroupsFromCourse8);
    const filtredGroupsFromCourse9 = groups9.filter((e) => e.course === course);
    setGroupsOfSelectedCourse9(filtredGroupsFromCourse9);
    /* если не первый раз переходим по курсу, то сбрасываем список групп и получаем новый список */
    if (allGroupName.length !== 0) {
      allGroupName.splice(0, allGroupName.length);
    }
    /* получаем новый список */
    filtredGroupsFromCourse8.forEach((e) =>
      allGroupName.push({ value: e.group_name, label: e.group_name })
    );
  }, [course]);
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
    /*    setSelectedGroup8(null);
    setSelectedGroup9(null);
    setDay(""); */
  };
  /* Выбор даты */
  function getDayNumber() {
    if (day === "16-10-2023") {
      return 1;
    } else if (day === "17-10-2023") {
      return 2;
    } else if (day === "18-10-2023") {
      return 3;
    } else if (day === "19-10-2023") {
      return 4;
    } else if (day === "20-10-2023") {
      return 5;
    } else if (day === "21-10-2023") {
      return 6;
    } else if (day === "23-10-2023") {
      return 1;
    } else if (day === "24-10-2023") {
      return 2;
    } else if (day === "25-10-2023") {
      return 3;
    } else if (day === "26-10-2023") {
      return 4;
    } else if (day === "27-10-2023") {
      return 5;
    } else if (day === "28-10-2023") {
      return 6;
    }
  }
  useEffect(() => {
    if (day === "16-10-2023") {
      setWeek(8);
    } else if (day === "17-10-2023") {
      setWeek(8);
    } else if (day === "18-10-2023") {
      setWeek(8);
    } else if (day === "19-10-2023") {
      setWeek(8);
    } else if (day === "20-10-2023") {
      setWeek(8);
    } else if (day === "21-10-2023") {
      setWeek(8);
    } else if (day === "23-10-2023") {
      setWeek(9);
    } else if (day === "24-10-2023") {
      setWeek(9);
    } else if (day === "25-10-2023") {
      setWeek(9);
    } else if (day === "26-10-2023") {
      setWeek(9);
    } else if (day === "27-10-2023") {
      setWeek(9);
    } else if (day === "28-10-2023") {
      setWeek(9);
    }
  }, [day]);
  const [selectedDayNumber, setSelectedDayNumber] = useState("");

  const [selectedDaylessons, setSelectedDayLessons] = useState(null);

  /*   const classesOfSelectedGroupOnWeek = selectedGroup8?.map((e) => e.days);
  const classesOfSelectedGroupOnWeek9 = selectedGroup9?.map((e) => e.days); */

  console.log(selectedGroup8);

  console.log(selectedGroup9);
  /*   useEffect(() => {
    setSelectedDayLessons(
      classesOfSelectedGroupOnWeek?.filter(
        (e) => e.weekday === selectedDayNumber
      )
    );
  }, [selectedDayNumber]); */
  /* фильтрация по дню недели */
  useEffect(() => {
    if (
      classesOfSelectedGroupOnWeek8 &&
      classesOfSelectedGroupOnWeek9 &&
      selectedDayNumber
    ) {
      if (week === 8) {
        setSelectedDayLessons(
          classesOfSelectedGroupOnWeek8[0]?.filter(
            (e) => e.weekday === selectedDayNumber
          )
        );
      } else if (week === 9) {
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
  const onChangeDayOnToday = () => {
    setSelectedDayNumber(getDayNumber());
    setDay(getDayToday());
    console.log(getDayToday());
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
    const startDate = new Date(2023, 9, 16); // не забываем про месяцы -1
    const endDate = new Date(2023, 9, 29); // дата окончания недели должна быть +1
    return (
      current.$d < startDate || // проверяем, что дата находится в заданном диапазоне
      current.$d > endDate ||
      current.$W === 0 // отключаем вс
    );
  }
  useEffect(() => {
    setSelectedDayLessons(null);
  }, [course]);
  return (
    <EducationContainer classes={"back_white"}>
      <ConfigProvider
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
            <div className="auto-schedule__container-groups-container">
              <Select
                placeholder="Выберите курс"
                className="select"
                onChange={handleChangeCourse}
                options={[
                  {
                    value: 1,
                    label: 1,
                  },
                  {
                    value: 2,
                    label: 2,
                  },
                  {
                    value: 3,
                    label: 3,
                  },
                  {
                    value: 4,
                    label: 4,
                  },
                  {
                    value: 5,
                    label: 5,
                  },
                  {
                    value: 6,
                    label: 6,
                  },
                ]}
              />

              <Select
                placeholder="Выберите группу"
                className="select"
                onChange={handleChangeGroup}
                options={allGroupName}
                key={allGroupName.map((option) => option.value).join("-")}
              />
            </div>
          ) : nav === "teacher" ? (
            <div className="auto-schedule__container-teacher-container">
              <Select
                placeholder="Выберите преподавателя"
                className="select"
                onChange={handleChangeGroup}
                options={allGroupName}
                key={allGroupName.map((option) => option.value).join("-")}
              />
            </div>
          ) : (
            <div className="auto-schedule__container-classes-container">
              Аудитории
            </div>
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
              format="DD-MM-YYYY"
              placeholder="Выберите дату"
              disabledDate={disabledDate}
              onChange={onChange}
            />
          </div>
          <div className="auto-schedule__container-lessons-container">
            {selectedDaylessons &&
            selectedDaylessons[0].lessons !== undefined ? (
              <div className="group-name">{groupNumber}</div>
            ) : null}
            {selectedDaylessons &&
            selectedDaylessons[0].lessons === undefined ? (
              <div className="absent">Расписание отсутствует!</div>
            ) : selectedDaylessons &&
              selectedDaylessons[0].lessons !== undefined ? (
              selectedDaylessons[0].lessons.map((e, index) => (
                <div className="lessons-container" key={`lessons` + index}>
                  <div className="lessons-container-number">
                    <div>{index + 1}</div>
                  </div>
                  <div className="lessons-container-time">
                    <div>{e.time_start}</div>
                    <div>{e.time_end}</div>
                  </div>{" "}
                  <div className="lessons-container-lessons-common">
                    <div className="lessons-container-lessons-common-lesson">
                      {e.subject}
                    </div>
                    <div className="lessons-container-lessons-common-teacher">
                      {e.teachers.map((e, index) => (
                        <div key={`${index} + ${e.teacher_name}`}>
                          {e.teacher_name}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lessons-container-auditory">
                    {e.auditories.map((e, index) => (
                      <div key={`${index} + ${e.auditory_name}`}>
                        {e.auditory_name}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : null}
          </div>
        </div>
      </ConfigProvider>
    </EducationContainer>
  );
};
export default AutoSchedule;
