import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toggleClassName, toggleFontSize } from "../../../utils/disabled";
import Image from "../../common/image/Image";
import { fetchNews, fetchOneNews } from "../../../httpService/newsApi";
import { deleteNews } from "../../../httpService/newsApi";
import { Context } from "../../../../index";
import Button from "../../common/button/Button";
import { Modal } from "antd";

const OneNewsPage = () => {
  const navigate = useNavigate();
  const [oneNews, setOneNews] = useState({});
  const { user } = useContext(Context);
  const { news } = useContext(Context);
  const { id } = useParams();
  // Открываем модалку для подтвержения
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletedNews, setDeletedNews] = useState(false);
  useEffect(() => {
    fetchOneNews(id).then((data) => setOneNews(data));
  }, [id, deletedNews]);
  useEffect(() => {
    fetchNews().then((data) => news.setNews(data));
  }, [news]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    console.log(id);
    deleteNews(id);
    setDeletedNews(true);
    setIsModalOpen(false);
    onNavigate();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    /* setDeletedNews(false); */
  };

  function onNavigate() {
    if (oneNews.page === "STUDENT_LIFE") {
      navigate("../../../live/studentsLive");
    } else if (oneNews.page === "STUDENT_SPORT") {
      navigate("../../../live/sport");
    } else if (oneNews.page === "STUDENT_SCIENCE") {
      navigate("../../../live/science");
    } else if (oneNews.page === "STUDENT_PRIDE") {
      navigate("../../../live/ourPride");
    }
  }
  const onDelete = () => {
    showModal();
  };
  if (
    oneNews === undefined ||
    oneNews === null ||
    Object.keys(oneNews).length === 0
  )
    return "Эта новость удалена или еще не создана...";

  return (
    <>
      <div
        style={{ fontSize: toggleFontSize(18) }}
        className={`one-news-page_container ${toggleClassName(
          " ",
          "",
          "",
          ""
        )}`}
      >
        <h1>{oneNews.title}</h1>
        <div className="image-news">
          <Image
            src={process.env.REACT_APP_API_URL + oneNews.image}
            alt="Фото уплыло:("
            width={"100%"}
            /*   height={"100%"} */
          />
        </div>

        <div dangerouslySetInnerHTML={{ __html: oneNews.text }}></div>
        <div className="one-news-page_container-admin">
          <div>
            {user.isAuth && user.user.role === "ADMIN" ? (
              <div className="one-news-page_container-admin-author">
                Автор новости: {oneNews.author}
              </div>
            ) : null}
          </div>
          <div className="one-news-page_container-admin-btns">
            <div>
              {user.isAuth && user.user.role === "ADMIN" ? (
                <Button
                  className={"edit"}
                  onClick={() => navigate(`../../../editNewsPage/${id}`)}
                >
                  Редактировать новость
                </Button>
              ) : null}
            </div>
            <div>
              {user.isAuth && user.user.role === "ADMIN" ? (
                <Button onClick={() => onDelete()} className={"delite"}>
                  Удалить новость
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Удалить новость?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Отмена"
        okText="Удалить"
        okType="danger"
      >
        <p>Эта новость будет удалена!</p>
      </Modal>
    </>
  );
};
export default OneNewsPage;
