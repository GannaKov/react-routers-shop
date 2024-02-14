/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";
const ProductsList = ({ products }) => {
  return (
    <ul>
      {products.length > 0 ? (
        products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))
      ) : (
        <p>Sorry, something wrong</p>
      )}
    </ul>
  );
};

export default ProductsList;
