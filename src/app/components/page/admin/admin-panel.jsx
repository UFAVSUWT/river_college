import React from "react";
import { toggleClassName } from "../../../utils/disabled";
import { observer } from "mobx-react-lite";
import { NavLink, Outlet } from "react-router-dom";
import EducationContainer from "../../common/educationContainer/education-container";
const AdminPanel = observer(() => {
  return (
    <EducationContainer title={"Панель администратора"}>
      {" "}
      <span style={{ width: "100%" }}>
        <NavLink to="editorNews">Редактор новостей</NavLink>
      </span>
      {<Outlet />}
    </EducationContainer>
  );
});
export default AdminPanel;
