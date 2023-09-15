import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {
  Button,
  Checkbox,
  Input,
  Select,
  Space,
  Upload,
  UploadProps,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
const EditorNewsPage = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const props = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange({ file, fileList }) {
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
    },
  };
  return (
    <section className="editor-news-page_wrapper">
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
            <Checkbox onChange={onChange}>
              Разместить на главной странице отдельным блоком
            </Checkbox>
          </div>
          <div className="margin-top-bg">
            3. Укажите номер карточки (при необходимости - новость появится на
            главной странице в одной из 6 карточек). Новая новость займет место
            старой. Старая новость не удалится, она останется на своей странице
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
            <Input />
          </div>
          <div className="margin-top-bg">
            5. Укажите автора новости (Кто публикует). Данный параметр будет
            видеть только администрация (Обязательно)
          </div>
          <div className="margin-top-sm">
            <Input />
          </div>
          <div className="margin-top-bg">
            5. Прикрепите изображение. В новость можно добавить только одну
            картинку.
          </div>
          <div className="margin-top-sm">
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Добавит изображение</Button>
            </Upload>
          </div>
          <div className="margin-top-bg">
            6. Если у вас нет изображения, но вы хотите прикрепить картику,
            поставьте галочку. Будет добавлен логотип нашего филиала. (Не
            рекомендуется)
          </div>
          <div className="margin-top-sm">
            <Checkbox onChange={onChange}>Добавить логотип</Checkbox>
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
        <Button icon={<UploadOutlined />} onClick={log}>
          Опубликовать
        </Button>
      </div>
    </section>
  );
};
export default EditorNewsPage;
