import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product, category) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.category === category
      );

      if (existingItem) {
        // If item with the same ID *and* category exists, increase quantity
        return prevCart.map((item) =>
          item.id === product.id && item.category === category
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Otherwise, add a new item with the category included
        return [...prevCart, { ...product, category, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // **New Function: Clear Cart**
  const clearCart = () => {
    setCartItems([]); // Reset the cart
  };

  // Calculate Grand Total
  const grandTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, grandTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
