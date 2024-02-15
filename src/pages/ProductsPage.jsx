import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
// import ProductsList from "../components/ProductsList";
// import { getProducts } from "../services/requests";
import { getCategories } from "../services/requests";
// import { getByCategory } from "../services/requests";
// import Spinner from "../components/Spinner";

import TabsComponent from "../components/TabsComponent";

const ProductsPage = () => {
  const { category } = useParams();
  // const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");
  const queryProduct = searchParams.get("name");

  // const categoryValue = categories.findIndex((value) => value === category);
  // console.log("category 1", category);
  // const categoryValue = categories.findIndex((value) => value === category);categoryValue !== -1 ? categoryValue : 0
  // console.log("categoryValue ", categoryValue);
  // const [loading, setLoading] = useState(false);
  // const [value, setValue] = useState();
  // const [fetched, setFetched] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res);
        // console.log("category in Ef", category);
      })

      .catch((error) => console.log(error.message));
  }, []);

  let categoryId = 0;
  if (category && categories.length > 0) {
    categoryId = categories.indexOf(category);
  }
  // setValue(categoryId);
  // idCategory = tabsTitlesQ.indexOf(categName);

  // useEffect(() => {
  //   setFetched(true);
  //   const category = categories[value];
  //   // navigate(`/products/${category}`);
  //   setLoading(true);
  //   getByCategory(category)
  //     .then((res) => {
  //       setProducts(res);
  //     })
  //     .catch((error) => console.log(error.message))
  //     .finally(() => setLoading(false));
  // }, [categories, value]);

  // function handleTabChange(_, newValue) {
  //   //event,
  //   setValue(newValue);
  //   navigate(`/products/${categories[value]}`);

  //   console.log("nav", navigate);
  //   setSearchParams("");
  //   setName(""); //Change
  // }

  function handleFormsubmit(e) {
    e.preventDefault();
    const nextQuery = name !== "" ? { name } : {};
    setSearchParams(nextQuery);
    // console.log("naxt", nextQuery);
    navigate(`/products/search?name=${name}`);
  }
  return (
    <div>
      <form onSubmit={handleFormsubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      {categories && (
        <TabsComponent
          // handleTabChange={handleTabChange}
          // value={value}
          categoryId={categoryId}
          categories={categories}
        />
      )}

      {/* {loading && <Spinner />} */}

      {/* <h1>Products</h1>
      {fetched && (
        <>
          {products.length > 0 ? (
            <ProductsList products={products} />
          ) : (
            <p>Nothing</p>
          )}
        </>
      )} */}
    </div>
  );
};

export default ProductsPage;
