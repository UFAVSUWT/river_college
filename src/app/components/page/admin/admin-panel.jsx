import React from "react";
import { toggleClassName } from "../../../utils/disabled";
import { observer } from "mobx-react-lite";
import { NavLink, Outlet } from "react-router-dom";
const AdminPanel = observer(() => {
  return (
    <section
      className={toggleClassName(
        "_container education__container",
        "_container education__container-white",
        "_container education__container-black",
        "_container education__container-contrast"
      )}
    >
      <h1 className="education__container-title">Панель администратора</h1>
      <NavLink to="editorNews">Редактор новостей</NavLink>
      <div className="education__container-content flex min-height">
        {<Outlet />}
      </div>
    </section>
  );
});
export default AdminPanel;
