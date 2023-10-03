import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Space,
  Upload,
  UploadProps,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { createNews } from "../../../httpService/newsApi";
const EditorNewsPage = () => {
  const editorRef = useRef(null);
  const [file, setFile] = useState(null);
  const [page, setPage] = useState("STUDENT_LIFE");
  const [main, setMain] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [card, setCard] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("01.02.23");
  /* const [data, setData] = useState({
    page: "STUDENT_LIFE",
    main: false,
    title: "",
    text: "",
    card: "",
    author: "",
    image: image,
    date: "",
  }); */
  /*   useEffect(

    [data]
  ); */
  function tooglePage(e) {
    console.log(e);
  }
  useEffect(() => {
    setText(log());
  }, [title]);
  const log = () => {
    if (editorRef.current) {
      return editorRef.current.getContent();
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  /*  const getFile = (e) => {
    setFile(e.target.files[0]);
  }; */
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
    /*  for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    } */
    createNews(formData);
  };
  const onFinish = (values) => {
    /* const text = log();
    setData({ ...data, ...values, text, image }); */
    /*     const formData = new FormData();
    formData.append("title", `${data.title}`);
    formData.append("text", `${data.text}`);
    formData.append("author", `${data.author}`);
    formData.append("card", `${data.card}`);
    formData.append("main", `${data.main}`);
    formData.append("date", `${data.date}`);
    formData.append("page", `${data.page}`);
    formData.append("image", data.image); */
    /*  createNews(data); */
  };
  console.log(file);
  return (
    <section className="editor-news-page_wrapper">
      <Form
        name="basic"
        /*  initialValues={{
          main: data.main,
          page: data.page,
          card: data.card,
        }} */
        onFinish={onFinish}
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
            Submit
          </Button>
        </Form.Item>
      </Form>

      {/* <Form>
        <Space wrap>
          <div className="editor-news-page_select-container">
            <div className="margin-top-bg">
              {" "}
              1. Укажите страницу, на которой будет размещена новость (На нашем
              сайте всего 4 страницы с новостями)
            </div>
            <div className="margin-top-sm">
              <Select
                defaultValue="STUDENT_LIFE"
                style={{ width: 300 }}
                onChange={handleChange}
                label={"номер"}
                options={[
                  { value: "STUDENT_LIFE", label: "Студенческая жизнь" },
                  { value: "STUDENT_SPORT", label: "Спорт" },
                  { value: "STUDENT_PRIDE", label: "Наша гордость" },
                  { value: "STUDENT_SCIENCE", label: "Наука" },
                ]}
              />
            </div>
            <div className="margin-top-bg">
              2. Если вы хотите поместить новость на главной странице, поставьте
              галочку. Только одна новость может находиться в этом блоке. При
              добавлении новости сюда, она займет место старой новости. Старая
              новость не удалится, она останется на своей странице
            </div>
            <div className="margin-top-sm">
              <Checkbox onChange={handleChange}>
                Разместить на главной странице отдельным блоком
              </Checkbox>
            </div>
            <div className="margin-top-bg">
              3. Укажите номер карточки (при необходимости - новость появится на
              главной странице в одной из 6 карточек). Новая новость займет
              место старой. Старая новость не удалится, она останется на своей
              странице
            </div>
            <div className="margin-top-sm">
              <Select
                defaultValue=""
                style={{ width: 120 }}
                onChange={handleChange}
                label={"номер"}
                options={[
                  { value: "", label: "" },
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                  { value: "6", label: "6" },
                ]}
              />
            </div>
            <div className="margin-top-bg">4. Введите название новости</div>
            <div className="margin-top-sm">
              <Input onChange={handleChange} />
            </div>
            <div className="margin-top-bg">
              5. Укажите автора новости (Кто публикует). Данный параметр будет
              видеть только администрация (Обязательно)
            </div>
            <div className="margin-top-sm">
              <Input onChange={handleChange} />
            </div>
            <div className="margin-top-bg">
              5. Прикрепите изображение. В новость можно добавить только одну
              картинку.
            </div>
            <div className="margin-top-sm">
              <Upload onChange={handleChange} {...props}>
                <Button icon={<UploadOutlined />}>Добавит изображение</Button>
              </Upload>
            </div>
            <div className="margin-top-bg">
              6. Если у вас нет изображения, но вы хотите прикрепить картику,
              поставьте галочку. Будет добавлен логотип нашего филиала. (Не
              рекомендуется)
            </div>
            <div className="margin-top-sm">
              <Checkbox onChange={handleChange}>Добавить логотип</Checkbox>
            </div>
          </div>
        </Space>
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
        />
        <hr />
        <div>
          <Button
            htmlType="submit"
            icon={<UploadOutlined />} onClick={log} 
          >
            Опубликовать
          </Button>
        </div>
      </Form> */}
    </section>
  );
};
export default EditorNewsPage;
