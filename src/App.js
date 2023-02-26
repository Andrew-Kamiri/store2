import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing page/LandingPage.jsx";
import Product from "./pages/ProductPage/Product.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

export default App;
