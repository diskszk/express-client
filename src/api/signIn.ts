import { BASE_URL } from "../constants";
import { ResponseSignIN, SignInData } from "../types";

export async function signIn(user: SignInData): Promise<ResponseSignIN> {
  const userData = JSON.stringify(user);

  try {
    const res = await fetch(`${BASE_URL}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userData,
    });

    const json = await res.json();

    return json;
  } catch (err) {
    throw new Error(err);
  }
}
