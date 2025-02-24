import React from "react";
import { useCart } from "../backend/CartContext"; // Import Cart Context
import { useNavigate } from "react-router-dom";

import indoorPlant1 from "../images/indoor-Jade-Plant.jpg";
import indoorPlant2 from "../images/indoor-schweiz.jpg";
import indoorPlant3 from "../images/indoor-Snake-Plant.jpg";
import indoorPlant4 from "../images/indoor-peace-lily.jpg";

const indoorProducts = [
  { id: 1, name: "Jade Plant", price: 149, image: indoorPlant1 },
  { id: 2, name: "Schweiz Plant", price: 199, image: indoorPlant2 },
  { id: 3, name: "Snake Plant", price: 99, image: indoorPlant3 },
  { id: 4, name: "Peace Lily", price: 179, image: indoorPlant4 },
];

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rs.{product.price}</p>
      <button onClick={() => addToCart(product, "Indoor")}>Add to Cart</button>
    </div>
  );
};

const IndoorPlants = () => {
  const navigate = useNavigate(); // Use navigate for back button

  return (
    <div className="product-list indoor-bg">
      <button onClick={() => navigate("/category")} className="back-button">
        ← Back to Categories
      </button>
      <h1>Indoor Plants</h1>
      <div className="products">
        {indoorProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default IndoorPlants;
