/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => {
  const location = useLocation();
  // console.log("In Pl", location);

  return (
    <ul>
      {products.length > 0 ? (
        products.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`} state={{ from: location }}>
              <ProductCard product={product} />
            </Link>
          </li>
        ))
      ) : (
        <p>Sorry, something wrong</p>
      )}
    </ul>
  );
};

export default ProductsList;
