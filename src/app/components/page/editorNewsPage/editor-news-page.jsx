import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const EditorNewsPage = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey="zd2ikpvwav8hhbalfmc0ksg1w0wj5chfei2uer8esvxyf40t"
        onInit={(evt, editor) => (editorRef.current = editor)}
        /*         initialValue="<p>Создайте новость</p>" */
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
        <button onClick={log}>Опубликовать</button>
      </div>
    </>
  );
};
export default EditorNewsPage;
