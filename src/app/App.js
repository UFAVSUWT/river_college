import NavBar from "./components/ui/nav-bar/nav-bar";
import Footer from "./components/ui/footer/Footer";
import { useRoutes } from "react-router";
import routes from "./routes";
import { observer } from "mobx-react-lite";
import fontSize from "./store/fontSize";
import LeftPanel from "./components/ui/left-panel/left-panel";
import ScrollUp from "./components/ui/scroll-up/scroll-up";
import { toggleClassName } from "./utils/disabled";
import { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { check } from "./httpService/userApi";
import { Space, Spin } from "antd";
import { fetchNews } from "./httpService/newsApi";
const App = observer(() => {
  const element = useRoutes(routes());
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);
  const { news } = useContext(Context);
  useEffect(() => {
    fetchNews().then((data) => news.setNews(data));
  }, []);
  //получаем развер шрифта, если он изменяется
  const toggleFontSize = () => {
    const size = fontSize.fontSize;
    if (size === "normal") return "18px";
    if (size === "medium") return "22px";
    if (size === "large") return "28px";
  };
  if (loading) {
    return (
      <div className="spinWrapper">
        <div>
          <Space>
            <Spin tip="Загрузка" size="large">
              <div className="content" />
            </Spin>
          </Space>
        </div>
      </div>
    );
  }
  return (
    <>
      <div style={{ fontSize: toggleFontSize() }} className={"app__wrapper"}>
        <div className="app__wrapper-leftPanel">
          <LeftPanel />
        </div>
        <div className="header-wrapper">
          {" "}
          <NavBar />
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
        </div>
        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </>
  );
});

export default App;
