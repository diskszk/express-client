export type Article = {
  id?: string;
  title: string;
  text: string;
  date?: string;
};

export type User = {
  id: string;
  name: string;
  // password?: string;
  signIn?: boolean;
};

export type SignInData = {
  name: string;
  password: string;
};

export type ResponseSignIN = {
  success: boolean;
  token: string;
};
