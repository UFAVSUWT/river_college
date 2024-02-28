import NavBar from "./components/ui/nav-bar/nav-bar";
import Footer from "./components/ui/footer/Footer";
import { useRoutes } from "react-router";
import routes from "./routes";
import { observer } from "mobx-react-lite";
import fontSize from "./store/fontSize";
import LeftPanel from "./components/ui/left-panel/left-panel";
import ScrollUp from "./components/ui/scroll-up/scroll-up";
import { toggleClassName } from "./utils/disabled";
import QuizButton from "./components/ui/quiz-button/quiz-button";
import { useState } from "react";
const App = observer(() => {
  const element = useRoutes(routes());

  const toggleFontSize = () => {
    const size = fontSize.fontSize;
    if (size === "normal") return "18px";
    if (size === "medium") return "22px";
    if (size === "large") return "28px";
  };

  /* логика для отображения виртуальной приемной, ссылка в контактах и в нижней части экрана справа */

  let isOpen =
    localStorage.getItem("helpModal") === "true"
      ? true
      : localStorage.getItem("helpModal") === null
      ? true
      : false;

  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const showModal = () => {
    localStorage.setItem("helpModal", true);
    setIsModalOpen(true);
  };
  return (
    <>
      <div style={{ fontSize: toggleFontSize() }} className={"app__wrapper"}>
        <div className="app__wrapper-leftPanel">
          <LeftPanel />
        </div>
        <div className="header-wrapper">
          {" "}
          <NavBar showModal={showModal} />
        </div>
        <div
          className={toggleClassName(
            "main-wrapper",
            "main-wrapper-white",
            "main-wrapper-black",
            "main-wrapper-contrast"
          )}
        >
          {element}
          <ScrollUp />
          <QuizButton
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            showModal={showModal}
          />
        </div>
        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </>
  );
});

export default App;
