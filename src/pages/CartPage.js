// src/pages/CartPage.js
import React, { useState } from "react";
import { useCart } from "../backend/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [showPopup, setShowPopup] = useState(false); // Popup visibility

  // Calculate Grand Total
  const grandTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle Checkout Click
  const handleCheckout = () => {
    setShowPopup(true); // Show the popup
  };

  // Confirm Checkout
  const confirmCheckout = () => {
    alert(`Order placed successfully! Total Amount: Rs.${grandTotal}`); // Optional confirmation
    clearCart(); // Clear cart after checkout
    setShowPopup(false); // Close popup
  };

  return (
    <div className="cart-page">
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p> // ✅ Disappears when cart has items
      ) : (
        <>
          <h2>Your Cart</h2>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.quantity} x Rs.{item.price}</p>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Grand Total */}
          <div className="cart-summary">
            <h3>Grand Total: Rs.{grandTotal}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </>
      )}

      {/* Checkout Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Order Summary</h2>
            <p>Total Amount: <strong>Rs.{grandTotal}</strong></p>
            <button onClick={confirmCheckout} className="confirm-button">Confirm</button>
            <button onClick={() => setShowPopup(false)} className="cancel-button">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
