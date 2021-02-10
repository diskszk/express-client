import { Article } from "../types";
import { BASE_URL } from "../constants";

export async function getArticles(): Promise<Article[]> {
  try {
    const res = await fetch(`${BASE_URL}/article/`, { method: "GET" });
    const articles = await res.json();
    return articles;
  } catch (err) {
    throw new Error(err);
  }
}
