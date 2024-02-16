/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getByCategory } from "../services/requests";
import ProductsList from "../components/ProductsList";
import Spinner from "../components/Spinner";
import styles from "../styles/TabsComponent.module.css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const TabsComponent = ({ categories, categoryId }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(categoryId);
  const [products, setProducts] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(false);

  const path = useLocation().pathname;

  useEffect(() => {
    setValue(categoryId);
  }, [categoryId]);

  useEffect(() => {
    if (categories.length > 0) {
      if (path === "/products") {
        navigate(`/products/${categories[categoryId]}`);
      }
    }

    setFetched(true);
    const category = categories[value];

    setLoading(true);
    getByCategory(category)
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
  }, [categories, categoryId, navigate, path, value]);

  function handleTabChange(_, newValue) {
    //event,
    setValue(newValue);
    navigate(`/products/${categories[newValue]}`);
  }

  return (
    <>
      <div className={styles.tabsWrp}>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs
            value={value}
            onChange={handleTabChange}
            variant="scrollable"
            // scrollButtons="auto"
            scrollButtons
            allowScrollButtonsMobile
          >
            {categories.map((category, index) => (
              <Tab key={index} label={category} />
            ))}
          </Tabs>
        </Box>
      </div>
      {loading && <Spinner />}
      <main>
        <div className={styles.mainContainer}>
          <h1 className={styles.mainTitle}>Products</h1>
          {fetched && (
            <>
              {products.length > 0 ? (
                <ProductsList products={products} />
              ) : (
                <p>Nothing</p>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default TabsComponent;
