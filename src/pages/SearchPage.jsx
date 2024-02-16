import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getByName } from "../services/requests";
import ProductsList from "../components/ProductsList";
import Spinner from "../components/Spinner";

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [searchParams] = useSearchParams("");

  const queryProduct = searchParams.get("name");

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getByName(queryProduct)
      .then((res) => {
        setProducts(res);
        setFetched(true);
      })
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
  }, [queryProduct]);

  return (
    <div>
      <button type="button" onClick={() => navigate("/products")}>
        Go Back
      </button>
      <h1>Searched Products</h1>
      {loading && <Spinner />}
      {fetched && (
        <>
          {products.length > 0 ? (
            <ProductsList products={products} />
          ) : (
            <p>There is nothing on your query</p>
          )}
        </>
      )}
    </div>
  );
};

export default SearchPage;
