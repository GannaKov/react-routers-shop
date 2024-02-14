import { useState, useEffect } from "react";

import ProductsList from "../components/ProductsList";
// import { getProducts } from "../services/requests";
import { getCategories } from "../services/requests";
import { getByCategory } from "../services/requests";
import Spinner from "../components/Spinner";

// import Box from "@mui/material/Box";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
import TabsComponent from "../components/TabsComponent";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);

  // useEffect(() => {
  //   setLoading(true);
  //   getProducts()
  //     .then((res) => {
  //       setProducts(res);
  //     })
  //     .catch((error) => console.log(error.message))
  //     .finally(() => setLoading(false));
  // }, []);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    const category = categories[value];
    setLoading(true);
    getByCategory(category)
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
  }, [categories, value]);

  function handleTabChange(_, newValue) {
    //event,
    setValue(newValue);
  }
  return (
    <div>
      {categories && (
        <TabsComponent
          handleTabChange={handleTabChange}
          value={value}
          categories={categories}
        />
      )}
      {loading && <Spinner />}

      <h1>Products</h1>
      {products.length > 0 && <ProductsList products={products} />}
    </div>
  );
};

export default ProductsPage;
