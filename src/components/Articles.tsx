import React, { useEffect, useState } from "react";
import { Article } from "../types";
import AddArticle from "./AddArticle";
import { getArticles } from "../api/getArticles";

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await getArticles();
      if (!res) {
        return;
      }
      setArticles(res);
    };
    fetch();
  });

  return (
    <div>
      <ul>
        {articles.map((article: Article) => {
          return (
            <li>
              <p>--------------------</p>
              <h2>{article.title}</h2>
              <p>{article.id}</p>
              <p>{article.text}</p>
              <p>{article.date}</p>
            </li>
          );
        })}
      </ul>
      <AddArticle />
    </div>
  );
};

export default Articles;
