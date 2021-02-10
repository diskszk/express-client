import { BASE_URL } from "../constants";

export async function getUser(token: string) {
  try {
    console.log(token);

    const res = await fetch(`${BASE_URL}/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err.message);

    throw new Error(err);
  }
}
