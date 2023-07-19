import NavBar from "./components/ui/nav-bar/nav-bar";
import Footer from "./components/ui/footer/Footer";
import { useRoutes } from "react-router";
import routes from "./routes";
import { observer } from "mobx-react-lite";
import fontSize from "./store/fontSize";
import LeftPanel from "./components/ui/left-panel/left-panel";
import ScrollUp from "./components/ui/scroll-up/scroll-up";
import { toggleClassName } from "./utils/disabled";
const App = observer(() => {
  const element = useRoutes(routes());
  const toggleFontSize = () => {
    const size = fontSize.fontSize;
    if (size === "normal") return "18px";
    if (size === "medium") return "22px";
    if (size === "large") return "28px";
  };

  return (
    <div style={{ fontSize: toggleFontSize() }} className={"app__wrapper"}>
      <div className="app__wrapper-leftPanel">
        <LeftPanel />
      </div>
      <NavBar />
      <div  className={`app__wrapper-main ${toggleClassName(
          "",
          "",
          "app__wrapper-main-black",
          "app__wrapper-main-contrast"
        )}`}>
        <div>
          {element}
          <ScrollUp />
        </div>
        <Footer />
      </div>
    </div>
  );
});

export default App;
