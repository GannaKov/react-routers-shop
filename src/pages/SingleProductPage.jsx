import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { getById } from "../services/requests";
import styles from "../styles/SingleProduct.module.css";

const SingleProductPage = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location.state?.from?.pathname ?? "/products";
  // console.log("location.state?.from?.pathname", location.state?.from?.pathname);
  // console.log("backLinkHref", backLinkHref);
  useEffect(() => {
    setLoading(true);
    getById(id)
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  const { title, images, price, description, rating, brand, category } =
    product;
  return (
    <div>
      <button onClick={() => navigate("/products")}>
        Back to products
        {/* <Link to={`products/${category}`}>Back to products</Link> */}
      </button>

      {Object.keys(product).length > 0 ? (
        <div className={styles.cardWrp}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <img className={styles.cardImg} src={images[0]} alt={title} />
          <p className={styles.cardBrandText}>Brand: {brand}</p>
          <p className={styles.cardPriceText}>Price: {price}</p>
          <p className={styles.cardDescrText}>{description}</p>
          <p className={styles.cardRateText}>Rating: {rating}</p>
        </div>
      ) : (
        <p>No Product</p>
      )}
    </div>
  );
};

export default SingleProductPage;
