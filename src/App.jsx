import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import SharedLayout from "./components/SharedLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />

        <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/products/:category/:id" element={<SingleProductPage />} />
        <Route path="/products/search" element={<SearchPage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="*" element={<p>Not Found</p>} />
      </Route>
    </Routes>
  );
};

export default App;
