import React, { useState } from "react";
import { Button, Modal, ConfigProvider } from "antd";
import { MessageOutlined, CloseOutlined } from "@ant-design/icons";
const QuizButton = () => {
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

  const handleOk = () => {
    setTimeout(() => {
      localStorage.setItem("helpModal", false);
      setIsModalOpen(false);
    }, 100);
  };

  const handleCancel = () => {
    setTimeout(() => {
      localStorage.setItem("helpModal", false);
      setIsModalOpen(false);
    }, 100);
  };

  return (
    <div className={"quiz-button"} onClick={showModal}>
      {" "}
      <div className="quiz-button-icon-container">
        {" "}
        <MessageOutlined className="icon-help" />
      </div>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: "#123655",
              headerBg: "#123655",
              titleColor: "#fff",
              titleFontSize: 22,
              titleLineHeight: 2,
            },
            Button: {
              borderRadius: 0,
              defaultHoverBorderColor: "black ",
            },
          },
        }}
      >
        <Modal
          closeIcon={
            <CloseOutlined style={{ color: "white", fontSize: "22px" }} />
          }
          title="Виртуальная приёмная"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
        >
          <div className="quiz-button-content">
            <h2>Уважаемые посетители!</h2>
            <p>
              Вы можете задать вопрос, воспользовавшись услугами вертуальной
              приёмной!
            </p>
            <p>
              <i>
                Для этого выберите тему обращения и заполните форму, после
                обработки обращения, на указанную почту будет направлен ответ
              </i>
            </p>

            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://forms.yandex.ru/cloud/65dd658c5d2a061e51706b25/"
            >
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#123655",
                  color: "white",
                  marginBottom: "5px",
                  height: "40px",
                  fontSize: "18px",
                }}
              >
                Образование
              </Button>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://forms.yandex.ru/cloud/65dd68aac769f11efa34d231/"
            >
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#123655",
                  color: "white",
                  marginBottom: "5px",
                  height: "40px",
                  fontSize: "18px",
                }}
              >
                Воспитание
              </Button>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://forms.yandex.ru/cloud/65dd6a5bc417f32028f555e0/"
            >
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#123655",
                  color: "white",
                  marginBottom: "5px",
                  height: "40px",
                  fontSize: "18px",
                }}
              >
                Практика
              </Button>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://forms.yandex.ru/cloud/65dd6b39c417f32010f555f1/"
            >
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#123655",
                  color: "white",
                  marginBottom: "5px",
                  height: "40px",
                  fontSize: "18px",
                }}
              >
                Общежитие
              </Button>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://forms.yandex.ru/cloud/65dd6b5e73cee720237ade9a/"
            >
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#123655",
                  color: "white",
                  marginBottom: "5px",
                  height: "40px",
                  fontSize: "18px",
                }}
              >
                Питание
              </Button>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://forms.yandex.ru/cloud/65deba22c09c02497c7c23a0/"
            >
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#123655",
                  color: "white",
                  marginBottom: "5px",
                  height: "40px",
                  fontSize: "18px",
                }}
              >
                Работа сайта
              </Button>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://forms.yandex.ru/cloud/65dd6ba4c09c021fd27c2378/"
            >
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#123655",
                  color: "white",
                  marginBottom: "5px",
                  height: "40px",
                  fontSize: "18px",
                }}
              >
                Другой вопрос
              </Button>
            </a>
          </div>
        </Modal>
      </ConfigProvider>
    </div>
  );
};

export default QuizButton;
