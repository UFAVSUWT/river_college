import NavBar from "./components/ui/nav-bar/nav-bar";
import Footer from "./components/ui/footer/Footer";
import { useRoutes } from "react-router";
import routes from "./routes";
import { observer } from "mobx-react-lite";
import fontSize from "./store/fontSize";
const App = observer(() => {
  const element = useRoutes(routes());
  const toggleFontSize = () => {
    const size = fontSize.fontSize;
    if (size === "normal") return "18px";
    if (size === "medium") return "22px";
    if (size === "large") return "28px";
  };

  return (
    <div style={{ fontSize: toggleFontSize() }}>
      <NavBar />
      {element}
      <Footer />
    </div>
  );
});

export default App;
