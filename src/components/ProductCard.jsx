/* eslint-disable react/prop-types */
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { title, images, price, rating, brand } = product;

  return (
    <div className={styles.cardWrp}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <img className={styles.cardImg} src={images[0]} alt={title} />
      <div className={styles.cardBottom}>
        <p className={styles.cardBrandText}>Brand: {brand}</p>
        <p className={styles.cardPriceText}>Price: {price} euro</p>
        {/* <p className={styles.cardDescrText}>{description}</p> */}
        <p className={styles.cardRateText}>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default ProductCard;
