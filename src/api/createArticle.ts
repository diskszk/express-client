import { Article } from "../types";
import { BASE_URL } from "../constants";

export async function createArticle(article: Article): Promise<void> {

  const articleData = JSON.stringify(article);

  console.log("post / ", articleData);

  try {
    const res = await fetch(`${BASE_URL}/api/v1/article/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: articleData,
    });

    console.log(res.status);
  } catch (err) {
    throw new Error(err);
  }
}
