import axios from "axios";

//const BASEURL = "https://fakestoreapi.com";
const BASEURL = "https://dummyjson.com";
const instance = axios.create({ baseURL: BASEURL });

export const getProducts = async () => {
  const { data } = await instance.get("/products");
  return data;
};
//https://fakestoreapi.com/products/categories
//https://dummyjson.com/products/categories
export const getCategories = async () => {
  const { data } = await instance.get("/products/categories");
  return data;
};

//'https://fakestoreapi.com/products/category/jewelery'
//https://dummyjson.com/products/category/smartphones
export const getByCategory = async (category) => {
  const { data } = await instance.get(`/products/category/${category}`);
  return data.products;
};

//https://dummyjson.com/products/1
export const getById = async (id) => {
  const { data } = await instance.get(`/products/${id}`);
  return data;
};
