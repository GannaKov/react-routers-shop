import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductsList from "../components/ProductsList";
// import { getProducts } from "../services/requests";
import { getCategories } from "../services/requests";
import { getByCategory } from "../services/requests";
import Spinner from "../components/Spinner";

import TabsComponent from "../components/TabsComponent";

const ProductsPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // const categoryValue = categories.findIndex((value) => value === category);
  console.log("category 1", category);
  const categoryValue = categories.findIndex((value) => value === category);
  // console.log("categoryValue ", categoryValue);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(categoryValue ?? 0);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res);
        // console.log("category in Ef", category);
      })

      .catch((error) => console.log(error.message));
  }, []);

  // useEffect(() => {
  //   console.log("category in Ef", category);
  //   const categoryValue = categories.findIndex((value) => value === category);
  //   setValue(categoryValue);
  //   console.log("categoryValue", categoryValue);
  // }, [categories, category]);

  useEffect(() => {
    const category = categories[value];
    navigate(`/products/${category}`);
    setLoading(true);
    getByCategory(category)
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
  }, [categories, navigate, value]);

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
