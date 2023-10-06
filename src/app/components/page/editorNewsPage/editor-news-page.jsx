import React, { useContext, useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Checkbox, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { createNews, fetchNews } from "../../../httpService/newsApi";
import { useNavigate } from "react-router";
import { Context } from "../../../../index";
import { observer } from "mobx-react-lite";
const EditorNewsPage = observer(() => {
  const editorRef = useRef(null);
  const [file, setFile] = useState(null);
  const [page, setPage] = useState("STUDENT_LIFE");
  const [main, setMain] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [card, setCard] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("01.02.23");
  const { news } = useContext(Context);
  /*   useEffect(() => {
    fetchNews().then((data) => news.setNews(data));
  }, [news]); */

  const navigate = useNavigate();
  function onNavigate() {
    if (page === "STUDENT_LIFE") {
      navigate("../../live/studentsLive");
    } else if (page === "STUDENT_SPORT") {
      navigate("../../live/sport");
    } else if (page === "STUDENT_SCIENCE") {
      navigate("../../live/science");
    } else if (page === "STUDENT_PRIDE") {
      navigate("../../live/ourPride");
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const addNews = () => {
    const formData = new FormData();
    formData.append("title", `${title}`);
    formData.append("text", `${text}`);
    formData.append("image", file);
    formData.append("author", `${author}`);
    formData.append("card", `${card}`);
    formData.append("page", `${page}`);
    formData.append("main", `${main}`);
    formData.append("date", `${date}`);
    createNews(formData);
    fetchNews().then((data) => news.setNews(data));
    onNavigate();
  };

  return (
    <section className="editor-news-page_wrapper">
      <Form
        name="basic"
        initialValues={{
          /*  main: data.main, */
          page: page,
          /*     card: data.card, */
        }}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* Выбор страницы */}
        <Form.Item label="Страница" name="page" rules={[{ required: true }]}>
          <Select
            style={{ width: 300 }}
            options={[
              { value: "STUDENT_LIFE", label: "Студенческая жизнь" },
              { value: "STUDENT_SPORT", label: "Спорт" },
              { value: "STUDENT_PRIDE", label: "Наша гордость" },
              { value: "STUDENT_SCIENCE", label: "Наука" },
            ]}
            onChange={(e) => setPage(e)}
          />
        </Form.Item>
        {/* Главная новость! */}
        <Form.Item label="Главная новость" name="main" valuePropName="checked">
          <Checkbox onChange={(e) => setMain(e.target.checked)} />
        </Form.Item>
        {/* Выбор карточки */}
        <Form.Item label="Выберите карточку" name="card">
          <Select
            style={{ width: 300 }}
            options={[
              { value: "", label: "" },
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
              { value: "5", label: "5" },
              { value: "6", label: "6" },
            ]}
            onChange={(e) => setCard(e)}
          />
        </Form.Item>
        {/* Заголовок */}
        <Form.Item
          label="Название новости"
          name="title"
          rules={[
            {
              required: true,
              message: "Введите название новости!",
              /*   defaultField: data.title, */
            },
          ]}
        >
          <Input onChange={(e) => setTitle(e.target.value)} />
        </Form.Item>
        {/* Автор */}
        <Form.Item
          label="Автор новости"
          name="author"
          rules={[
            {
              required: true,
              message: "Укажите Ваше имя и фамилию!",
            },
          ]}
        >
          <Input onChange={(e) => setAuthor(e.target.value)} />
        </Form.Item>
        <Form.Item
          name="image"
          onChange={(e) =>
            setFile(e.target.files[0])
          } /* getValueFromEvent={getFile} */
        >
          <Upload maxCount={1}>
            {" "}
            <Button icon={<UploadOutlined />}>Добавить изображение</Button>
          </Upload>
        </Form.Item>
        {/* Редактор текста */}
        <Editor
          apiKey="zd2ikpvwav8hhbalfmc0ksg1w0wj5chfei2uer8esvxyf40t"
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",

              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | autolink | link |" +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat |",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
          onChange={(e) => setText(e.level.content)}
        />
        <hr />
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={addNews}>
            Добавить новость
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
});
export default EditorNewsPage;
