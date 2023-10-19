import { postApi, usersApi } from "../config";
export const getUserApi = async () => {
  const response = await fetch(usersApi);
  return await response.json();
};
export const getPostApi = async () => {
  const response = await fetch(postApi);
  return await response.json();
};
