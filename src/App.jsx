import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Home from "./pages/Home";
import Inquire from "./pages/Inquire";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/enquire" element={<Inquire />} />
          <Route path="/product-details" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
