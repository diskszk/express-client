import React, { useEffect, useState } from "react";
import { SignInData, User } from "../types";
import { signIn } from "../api/signIn";
import { getUser } from "../api/getUser";

const SignIn: React.FC = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState<User>({
    id: "",
    name: "",
    signIn: false,
  });

  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function inputUserName(ev: React.ChangeEvent<HTMLInputElement>) {
    setUsername(ev.target.value);
  }
  function inputUserPassword(ev: React.ChangeEvent<HTMLInputElement>) {
    setUserPassword(ev.target.value);
  }

  async function handleClickSignIn(_ev: React.MouseEvent<HTMLButtonElement>) {
    if (username === "" || userPassword === "") {
      alert("からです");
      return;
    }

    const singInData: SignInData = {
      name: username,
      password: userPassword,
    };

    try {
      const tokenResponse = await signIn(singInData);
      const token = tokenResponse.token;

      const user = await getUser(token);

      // name, id
      console.log(user);
      setUser({
        id: user.id,
        name: user.name,
        signIn: true,
      });

      // console.log("test", test);
    } catch (err) {
      throw new Error(err);
    } finally {
      setUsername("");
      setUserPassword("");
    }
  }

  useEffect(() => {
    console.log("user", user);
  }, [setToken]);

  return (
    <div>
      <br />
      <br />
      {user.signIn ? (
        <div>
          <p>ようこそ{user.name}さま</p>
        </div>
      ) : (
        <div>
          <label htmlFor="username">ユーザー名</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={inputUserName}
          />
          <br />
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            name="password"
            value={userPassword}
            onChange={inputUserPassword}
          />
          <br />
          <button onClick={handleClickSignIn}>サインイン</button>
        </div>
      )}
    </div>
  );
};

export default SignIn;
