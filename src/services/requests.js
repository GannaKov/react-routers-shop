import axios from "axios";

const BASEURL = "https://fakestoreapi.com";
const instance = axios.create({ baseURL: BASEURL });

export const getProducts = async () => {
  const { data } = await instance.get("/products");
  return data;
};
//https://fakestoreapi.com/products/categories
export const getCategories = async () => {
  const { data } = await instance.get("/products/categories");
  return data;
};
