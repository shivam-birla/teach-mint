import { countryApi, postApi, usersApi } from "../config";
export const getUserApi = async () => {
  const response = await fetch(usersApi);
  return await response.json();
};
export const getPostApi = async () => {
  const response = await fetch(postApi);
  return await response.json();
};
export const getCountryApi = async () => {
  const response = await fetch(countryApi);
  return await response.json();
};
export const getCountryTimeApi = async (country) => {
  const response = await fetch(`${countryApi}/${country}`);
  return await response.json();
};
