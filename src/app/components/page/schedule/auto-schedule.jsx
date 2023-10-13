import React, { useEffect, useState } from "react";
import raspisanieJSON from "../../../mockData/Расписание_8.json";
import locale from "antd/es/date-picker/locale/ru_RU";
import "dayjs/locale/ru";
import EducationContainer from "../../common/educationContainer/education-container";
import { Button, ConfigProvider, DatePicker, Select } from "antd";
import AutoScheduleNav from "./auto-schedule-nav";

const AutoSchedule = () => {
  const raspisanie = JSON.parse(JSON.stringify(raspisanieJSON));
  const groups = raspisanie.faculties[0].groups;

  /* Навигация раздела */
  const [nav, setNav] = useState("groups");

  /* фильтрация по курсу */
  const [groupsOfSelectedCourse, setGroupsOfSelectedCourse] = useState([]);
  /* выбранный курс */
  const [course, setCource] = useState("");
  /* номер выбранной группы */
  const [groupNumber, setGroupNumber] = useState("");
  /* выбранныя группа */
  const [selectedGroup, setSelectedGroup] = useState(null);
  /* список групп на курсе */
  const [allGroupName, setAllGroupName] = useState([
    { label: "Сперва укажите ваш курс!" },
  ]);
  /* если переходили по навигации в преподы или аудитори и вернулись обратно, сбрасываем указанную группу и курс */
  useEffect(() => {
    setAllGroupName([{ label: "Сперва укажите ваш курс!" }]);
    setCource("");
  }, [nav]);

  useEffect(() => {
    /* фильтруем группы, если курс менялся */
    const filtredGroupsFromCourse = groups.filter((e) => e.course === course);
    setGroupsOfSelectedCourse(filtredGroupsFromCourse);
    /* если не первый раз переходим по курсу, то сбрасываем список групп и получаем новый список */
    if (allGroupName.length !== 0) {
      allGroupName.splice(0, allGroupName.length);
    }
    /* получаем новый список */
    filtredGroupsFromCourse.forEach((e) =>
      allGroupName.push({ value: e.group_name, label: e.group_name })
    );
  }, [course]);
  useEffect(() => {
    /* если выбрали новую группу, меням массив группы */
    setSelectedGroup(
      groupsOfSelectedCourse.filter((g) => g.group_name === groupNumber)
    );
  }, [groupNumber]);

  /* выбор курса */
  const handleChangeCourse = (value) => {
    setCource(value);
  };
  /* выбор группы */
  const handleChangeGroup = (value) => {
    setGroupNumber(value);
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
    }
  }
  const [day, setDay] = useState("16-10-2023");
  const [selectedDayNumber, setSelectedDayNumber] = useState(getDayNumber());
  const [selectedDaylessons, setSelectedDayLessons] = useState(null);
  const classesOfSelectedGroupOnWeek = selectedGroup?.map((e) => e.days);
  /*   useEffect(() => {
    setSelectedDayLessons(
      classesOfSelectedGroupOnWeek?.filter(
        (e) => e.weekday === selectedDayNumber
      )
    );
  }, [selectedDayNumber]); */
  /* фильтрация по дню недели */
  useEffect(() => {
    if (classesOfSelectedGroupOnWeek && selectedDayNumber) {
      setSelectedDayNumber(getDayNumber());
      setSelectedDayLessons(
        classesOfSelectedGroupOnWeek[0]?.filter(
          (e) => e.weekday === selectedDayNumber
        )
      );
    }
  }, [selectedDayNumber, groupNumber, day]);
  console.log(day);

  const onChange = (date, dateString) => {
    setDay(dateString);
  };
  const getDayToday = () => {
    const dateToday = new Date();
    const getYearToday = dateToday.getFullYear();
    const getMonthToday = dateToday.getMonth() + 1;
    const getDayToday = dateToday.getDate();
    return `${getDayToday}-${getMonthToday}-${getYearToday}`;
  };
  console.log(classesOfSelectedGroupOnWeek);
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
            <Button className="button" onClick={() => setSelectedDayNumber(1)}>
              На завтра
            </Button>
            <DatePicker
              className="button"
              locale={locale}
              format="DD-MM-YYYY"
              placeholder="Выберите дату"
              onChange={onChange}
            />
          </div>
          <div className="auto-schedule__container-lessons-container">
            <div className="group-name">{groupNumber}</div>
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
