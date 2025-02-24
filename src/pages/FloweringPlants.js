import React from "react";
import { useCart } from "../backend/CartContext";
import { useNavigate } from "react-router-dom";

import flowerPlant1 from "../images/flowering-hibiscus.jpg";
import flowerPlant2 from "../images/flowering-lavender.jpg";
import flowerPlant3 from "../images/flowering-marigold.jpg";
import flowerPlant4 from "../images/flowering-rose.jpg";

const flowerProducts = [
  { id: 1, name: "Hibiscus", price: 199, image: flowerPlant1 },
  { id: 2, name: "Lavender", price: 249, image: flowerPlant2 },
  { id: 3, name: "Marigold", price: 99, image: flowerPlant3 },
  { id: 4, name: "Rose", price: 149, image: flowerPlant4 }, // Fixed duplicate id
];

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rs.{product.price}</p>
      <button onClick={() => addToCart(product, "Flowering")}>Add to Cart</button>
    </div>
  );
};

const FloweringPlants = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="product-list flowering-bg">
      <button onClick={() => navigate("/category")} className="back-button">
        ← Back to Categories
      </button>
      <h1>Flowering Plants</h1>
      <div className="products">
        {flowerProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FloweringPlants;
