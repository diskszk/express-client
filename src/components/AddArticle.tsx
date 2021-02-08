import React, { useState } from "react";
import { createArticle } from "../api/createArticle";
import { Article } from "../types";

const AddArticle: React.FC = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function inputTitle(ev: React.ChangeEvent<HTMLInputElement>) {
    const value = ev.target.value;
    setTitle(value);
  }

  function inputText(ev: React.ChangeEvent<HTMLInputElement>) {
    const value = ev.target.value;
    setText(value);
  }

  async function handleClick(_ev: React.MouseEvent<HTMLButtonElement>) {
    if (title === "" || text === "") {
      alert("必要事項がから！");
      return;
    }
    const article: Article = {
      title: title,
      text: text,
    };
    try {
      await createArticle(article);
    } catch (err) {
      console.error(err);
      return;
    }
    // 初期化処理
    setTitle("");
    setText("");
  }

  return (
    <div>
      <label htmlFor="title">タイトル</label>
      <input name="title" type="text" value={title} onChange={inputTitle} />
      <br />
      <label htmlFor="text">内容</label>
      <input name="text" type="text" value={text} onChange={inputText} />
      <br />
      <div>
        <button onClick={handleClick}>送信</button>
      </div>
    </div>
  );
};

export default AddArticle;
