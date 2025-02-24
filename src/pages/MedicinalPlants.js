import React from "react";
import { useCart } from "../backend/CartContext";
import { useNavigate } from "react-router-dom";

import MedicinalPlant1 from "../images/medicinal-aloevera.jpg";
import MedicinalPlant2 from "../images/medicinal-basil.jpg";
import MedicinalPlant3 from "../images/medicinal-rosemary.jpg";
import MedicinalPlant4 from "../images/medicinal-tulsi.jpg";

const medicinalProducts = [
  { id: 1, name: "Aloe Vera", price: 149, image: MedicinalPlant1 },
  { id: 2, name: "Basil", price: 99, image: MedicinalPlant2 },
  { id: 3, name: "Rosemary", price: 199, image: MedicinalPlant3 },
  { id: 4, name: "Tulsi", price: 129, image: MedicinalPlant4 }, // Fixed duplicate id
];

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rs.{product.price}</p>
      <button onClick={() => addToCart(product, "Medicinal")}>Add to Cart</button>
    </div>
  );
};

const MedicinalPlants = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="product-list medicinal-bg">
      <button onClick={() => navigate("/category")} className="back-button">
        ← Back to Categories
      </button>
      <h1>Medicinal Plants</h1>
      <div className="products">
        {medicinalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MedicinalPlants;
