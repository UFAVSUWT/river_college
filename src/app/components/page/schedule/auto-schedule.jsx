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
  const [course, setCource] = useState("");
  const [groupNumber, setGroupNumber] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [allGroupName, setAllGroupName] = useState([
    { label: "Сперва укажите ваш курс!" },
  ]);
  useEffect(() => {
    setAllGroupName([{ label: "Сперва укажите ваш курс!" }]);
  }, [nav]);
  useEffect(() => {
    const filtredGroupsFromCourse = groups.filter((e) => e.course === course);
    setGroupsOfSelectedCourse(filtredGroupsFromCourse);
    if (allGroupName.length !== 0) {
      allGroupName.splice(0, allGroupName.length);
    }
    filtredGroupsFromCourse.forEach((e) =>
      allGroupName.push({ value: e.group_name, label: e.group_name })
    );
  }, [course]);
  useEffect(() => {
    setSelectedGroup(
      groupsOfSelectedCourse.filter((g) => g.group_name === groupNumber)
    );
  }, [groupNumber]);
  const handleChangeCourse = (value) => {
    setCource(value);
  };
  const handleChangeGroup = (value) => {
    setGroupNumber(value);
  };
  const [selectedDayNumber, setSelectedDayNumber] = useState(null);
  const [selectedDaylessons, setSelectedDayLessons] = useState(null);
  const classesOfSelectedGroupOnWeek = selectedGroup?.map((e) => e.days);
  /*   useEffect(() => {
    setSelectedDayLessons(
      classesOfSelectedGroupOnWeek?.filter(
        (e) => e.weekday === selectedDayNumber
      )
    );
  }, [selectedDayNumber]); */

  useEffect(() => {
    if (classesOfSelectedGroupOnWeek && selectedDayNumber) {
      setSelectedDayLessons(
        classesOfSelectedGroupOnWeek[0].filter(
          (e) => e.weekday === selectedDayNumber
        )
      );
    }
  }, [selectedDayNumber, groupNumber]);
  console.log(classesOfSelectedGroupOnWeek);

  /* Выбор даты */
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
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
              Преподаватели
            </div>
          ) : (
            <div className="auto-schedule__container-classes-container">
              Аудитории
            </div>
          )}
          <div className="auto-schedule__container-date-container">
            <Button className="button" onClick={() => setSelectedDayNumber(1)}>
              На сегодня
            </Button>
            <Button className="button" onClick={() => setSelectedDayNumber(1)}>
              На завтра
            </Button>
            <DatePicker
              className="button"
              locale={locale}
              placeholder="Выберите дату"
              onChange={onChange}
            />
          </div>
          <div className="auto-schedule__container-lessons-container">
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
