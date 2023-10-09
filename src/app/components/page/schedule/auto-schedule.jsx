import React, { useState } from "react";

import raspisanieJSON from "../../../mockData/Расписание_18.json";
import axios from "axios";
import EducationContainer from "../../common/educationContainer/education-container";
import { Button, Form, Input, Select, Space, Tooltip, Typography } from "antd";

const { Option } = Select;

const AutoSchedule = () => {
  const raspisanie = JSON.parse(JSON.stringify(raspisanieJSON));
  console.log(raspisanie);
  const groups = raspisanie.faculties[0].groups;
  const [course, setCource] = useState("");
  const [groupName, setGroupName] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const firstCourse = groups.filter((e) => {
    return e.course === course;
  });
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  console.log(firstCourse);
  return (
    <EducationContainer>
      <Select
        defaultValue="lucy"
        placeholder="title"
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: "jack",
            label: "Jack",
          },
          {
            value: "lucy",
            label: "Lucy",
          },
          {
            value: "Yiminghe",
            label: "yiminghe",
          },
          {
            value: "disabled",
            label: "Disabled",
            disabled: true,
          },
        ]}
      />
      <Select
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        disabled
        options={[
          {
            value: "lucy",
            label: "Lucy",
          },
        ]}
      />
      <Select
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        loading
        options={[
          {
            value: "lucy",
            label: "Lucy",
          },
        ]}
      />
      <Select
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        allowClear
        options={[
          {
            value: "lucy",
            label: "Lucy",
          },
        ]}
      />
    </EducationContainer>
  );
};
export default AutoSchedule;
