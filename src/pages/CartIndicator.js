import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../backend/CartContext";
import "../styles.css"; // Ensure styles are applied

const CartIndicator = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    itemCount > 0 && (
      <Link to="/cart" className="cart-indicator">
        🛒 {itemCount} {itemCount === 1 ? "item" : "items"}
      </Link>
    )
  );
};

export default CartIndicator;
