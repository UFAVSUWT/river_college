import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toggleClassName, toggleFontSize } from "../../../utils/disabled";
import Image from "../../common/image/Image";
import { fetchOneNews } from "../../../httpService/newsApi";
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
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorDelite, setErrorDelite] = useState(false);
  const [loadingDelite, setLoadingDelite] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchOneNews(id)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Не удалось загрузить новость");
        }
        return response.data;
      })
      .then((data) => {
        setOneNews(data);
        setLoading(false);
      })
      .catch(() => setError("Не удалось загрузить новость"))
      .finally(setLoading(false));
  }, [id]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    deleteNews(id)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Не удалось удалить новость");
        }
        return response.data;
      })
      .then((data) => {
        console.log(data);
        news.filter((e) => e.id !== id);
        setLoadingDelite(false);
        onNavigate();
      })
      .catch(() => setErrorDelite("Не удалось удалить новость"))
      .finally(() => {
        setDeletedNews(true);
        setIsModalOpen(false);
      });
    /*  deleteNews(id);
    news.filter((e) => e.id !== id); */
    /*   setDeletedNews(true);
    setIsModalOpen(false);
    onNavigate(); */
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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

  if (loading) return "Загрузка...";
  if (error) return error;
  /*   if (
    oneNews === undefined ||
    oneNews === null ||
    Object.keys(oneNews).length === 0
  )
    return "Эта новость удалена или еще не создана..."; */

  return (
    <>
      <div
        style={{ fontSize: toggleFontSize(18) }}
        className={`one-news-page_container _container${toggleClassName(
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
          />
        </div>

        <div dangerouslySetInnerHTML={{ __html: oneNews.text }}></div>
        <div className="one-news-page_container-admin">
          <div>
            {user.auth && user.user.role === "ADMIN" ? (
              <div className="one-news-page_container-admin-author">
                Автор новости: {oneNews.author}
              </div>
            ) : null}
          </div>
          <div className="one-news-page_container-admin-btns">
            <div>
              {user.auth && user.user.role === "ADMIN" ? (
                <Button
                  className={"edit"}
                  onClick={() => navigate(`../../../editNewsPage/${id}`)}
                >
                  Редактировать новость
                </Button>
              ) : null}
            </div>
            <div>
              {user.auth && user.user.role === "ADMIN" ? (
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
        <p>{loadingDelite}</p>
        <p>{errorDelite}</p>
      </Modal>
    </>
  );
};
export default OneNewsPage;
