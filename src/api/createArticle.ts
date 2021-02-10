import { Article } from "../types";
import { BASE_URL } from "../constants";

export async function createArticle(article: Article): Promise<void> {
  const articleData = JSON.stringify(article);

  console.log("post / ", articleData);

  try {
    const res = await fetch(`${BASE_URL}/article/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: articleData,
    });

    console.log(res.status);
  } catch (err) {
    throw new Error(err);
  }
}
