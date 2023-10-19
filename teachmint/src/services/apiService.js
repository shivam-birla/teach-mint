import { usersApi } from "../config";
export const getUserApi = async () => {
  const response = await fetch(usersApi);
  return await response.json();
};
