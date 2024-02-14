/* eslint-disable react/prop-types */
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { title, image, price, description, rating } = product;

  return (
    <div className={styles.cardWrp}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <img className={styles.cardImg} src={image} alt={title} />
      <p className={styles.cardPriceText}>Price: {price}</p>
      <p>
        className={styles.cardDescrText}
        {description}
      </p>
      <p className={styles.cardRateText}>
        Rating: {rating.rate} {rating.count}
      </p>
    </div>
  );
};

export default ProductCard;
