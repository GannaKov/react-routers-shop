import { useState, useEffect } from "react";

import ProductsList from "../components/ProductsList";
import { getProducts } from "../services/requests";
import { getCategories } from "../services/requests";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// const BASEURL = "https://fakestoreapi.com/products";
// const instance = axios.create({ baseURL: BASEURL });

// const getProducts = async () => {
//   const { data } = await instance.get();
//   return data;
// };
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        console.log(res);
        setProducts(res);
      })
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    getCategories()
      .then((res) => {
        console.log(res);
        setCategories(res);
      })
      .catch((error) => console.log(error.message));
  }, []);

  function handleTabChange(event, newValue) {
    setValue(newValue);
    console.log("in Tabs", newValue);
  }
  return (
    <div>
      {loading && <p>Loading...</p>}

      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleTabChange} centered>
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>
      </Box>
      <h1>Products</h1>
      <ProductsList products={products} />
    </div>
  );
};

export default ProductsPage;
