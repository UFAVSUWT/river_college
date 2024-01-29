import React from "react";

import { observer } from "mobx-react-lite";
import { NavLink, Outlet } from "react-router-dom";
import EducationContainer from "../../common/educationContainer/education-container";
const AdminPanel = observer(() => {
  return (
    <div className="admin-wrapper">
      <EducationContainer title={"Панель администратора"}>
        {" "}
        <div style={{ width: "100%" }}>
          <NavLink to="editorNews">Редактор новостей</NavLink>
        </div>
        {<Outlet />}
      </EducationContainer>
    </div>
  );
});
export default AdminPanel;
