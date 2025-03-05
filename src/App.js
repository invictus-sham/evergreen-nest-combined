import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./backend/CartContext"; 
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import IndoorPlants from "./pages/IndoorPlants";
import MedicinalPlants from "./pages/MedicinalPlants";
import FloweringPlants from "./pages/FloweringPlants";
import AboutUs from "./pages/AboutUs";
import CartIndicator from "./pages/CartIndicator";
import ContactUs from "./pages/ContactPage"
import AboutUs1 from "./pages/AboutUs1"
import Subscription from "./pages/Subscription";
import FAQ from "./pages/FAQ";
import TrackOrder from "./pages/TrackOrder";
import Testimonials from "./pages/Testimonials";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import "./styles.css";

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/category/indoor" element={<IndoorPlants />} />
          <Route path="/category/medicinal" element={<MedicinalPlants />} />
          <Route path="/category/flowering" element={<FloweringPlants />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/aboutus1" element= {<AboutUs1/>}/>
          <Route path="/subscription" element= {<Subscription/>}/>
          <Route path="/track-order" element= {<TrackOrder/>}/>
          <Route path="/testimonials" element= {<Testimonials/>}/>
          <Route path="/terms" element= {<Terms/>}/>
          <Route path="/privacy" element= {<Privacy/>}/>
          <Route path="/faq" element= {<FAQ/>}/>
        </Routes>
        <CartIndicator />
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
/* random to commit */