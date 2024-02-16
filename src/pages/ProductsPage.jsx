import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import styles from "../styles/ProductPage.module.css";
import { getCategories } from "../services/requests";
import TabsComponent from "../components/TabsComponent";

const ProductsPage = () => {
  const { category } = useParams();

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  const [, setSearchParams] = useSearchParams("");
 

  const navigate = useNavigate();

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res);
      })

      .catch((error) => console.log(error.message));
  }, []);

  let categoryId = 0;
  if (category && categories.length > 0) {
    categoryId = categories.indexOf(category);
  }

  function handleFormsubmit(e) {
    e.preventDefault();
    const nextQuery = name !== "" ? { name } : {};
    setSearchParams(nextQuery);
    navigate(`/products/search?name=${name}`);
  }
  return (
    <section className={styles.bigSection}>
      <div className={styles.bigContainer}>
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
          <TabsComponent categoryId={categoryId} categories={categories} />
        )}
      </div>
    </section>
  );
};

export default ProductsPage;
