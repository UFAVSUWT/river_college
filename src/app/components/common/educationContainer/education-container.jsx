import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../utils/disabled";
const EducationContainer = observer(({ title, children, classes }) => {
  return (
    <section
      className={toggleClassName(
        `_container education__container ${classes}`,
        "_container education__container-white",
        "_container education__container-black",
        "_container education__container-contrast"
      )}
    >
      <h1 className="education__container-title">{title}</h1>

      <div className="education__container-content flex f-w">{children}</div>
    </section>
  );
});
export default EducationContainer;
