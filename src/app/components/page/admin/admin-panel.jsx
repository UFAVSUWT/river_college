import React from "react";
import { toggleClassName } from "../../../utils/disabled";
import { observer } from "mobx-react-lite";
const AdminPanel = observer(() => {
  return (
    <section
      className={toggleClassName(
        "education__container",
        "education__container-white",
        "education__container-black",
        "education__container-contrast"
      )}
    >
      <h1 className="education__container-title">Панель администратора</h1>
      <div className="education__container-content flex min-height"></div>
    </section>
  );
});
export default AdminPanel;
