/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import styles from "../styles/ProductsList.module.css";

const ProductsList = ({ products }) => {
  const location = useLocation();

  return (
    <ul className={styles.productsList}>
      {products.length > 0 ? (
        products.map((product) => (
          <li key={product.id} className={styles.productsItem}>
            <Link
              to={`${product.id}`}
              state={{ from: location }}
              className={styles.productsLink}
            >
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
