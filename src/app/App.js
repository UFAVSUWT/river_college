import NavBar from "./components/common/NavBar/NavBar";
import Footer from "./components/ui/footer/Footer";
import { useRoutes } from "react-router";
import routes from "./routes";
import { observer } from "mobx-react-lite";
import fontSize from "./store/fontSize";
const App = observer(() => {
  const element = useRoutes(routes());
  const toggleFontSize = () => {
    const size = fontSize.fontSize;
    if (size === "normal") return "1.25rem";
    if (size === "medium") return "1.5rem";
    if (size === "large") return "2rem";
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
