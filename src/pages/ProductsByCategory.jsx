import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import ProductsList from "../components/ProductsList";
import { getByCategory } from "../services/requests";
import Spinner from "../components/Spinner";

const ProductsByCategory = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const navigate = useNavigate();

  return <div>By Category</div>;
};

export default ProductsByCategory;
