import React, { useState, useEffect } from "react";
import "../styles/TrackOrder.css"; // Import CSS for styling

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);

  // 🌍 Change Page Title when component loads
  useEffect(() => {
    document.title = "Track Order | Nursery E-Commerce"; // Change Title
  }, []);

  const handleTrackOrder = () => {
    if (orderId) {
      setTrackingResult({
        orderId,
        status: "🌿 Out for Delivery", // Sample Status
        estimatedDelivery: "Feb 25, 2025",
      });
    } else {
      alert("Please enter a valid Order ID!");
    }
  };

  return (
    <div className="track-order-container">
      <h1>📦 Track Your Order</h1>
      <input
        type="text"
        className="track-order-input"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button className="track-order-button" onClick={handleTrackOrder}>
        Track Order
      </button>

      {trackingResult && (
        <div className="tracking-result">
          <p><strong>Order ID:</strong> {trackingResult.orderId}</p>
          <p className="tracking-status"><strong>Status:</strong> {trackingResult.status}</p>
          <p><strong>Estimated Delivery:</strong> {trackingResult.estimatedDelivery}</p>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
