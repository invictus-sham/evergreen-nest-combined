import React, { useState, useEffect } from "react";
import "../styles/Subscription.css"; // Import CSS for styling

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Change document title when component is mounted
  useEffect(() => {
    document.title = "Subscription - Plant Nursery"; // Change page title dynamically
  }, []);

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan);
    alert(`🌿 You have selected the ${plan} plan! Happy Gardening! 🌱`);
  };

  return (
    <div className="subscription-container">
      <h1>🌿 Choose Your Subscription Plan</h1>
      <p>Bring home fresh plants every month & get expert gardening tips! 🌱</p>

      <div className="plans">
        <div className="plan basic" onClick={() => handleSubscribe("Basic")}>
          <h2>🌱 Basic Plan</h2>
          <p>✅ 2 Healthy Plants per Month</p>
          <p>📩 Monthly Plant Care Guide</p>
          <p>🚚 Standard Delivery</p>
          <p>💰 <strong>₹799/month</strong></p>
          <button>Subscribe Now</button>
        </div>

        <div className="plan premium" onClick={() => handleSubscribe("Premium")}>
          <h2>🌿 Premium Plan</h2>
          <p>✅ 5 Indoor/Outdoor Plants per Month</p>
          <p>📩 Weekly Gardening Tips</p>
          <p>🎁 Exclusive Member Discounts</p>
          <p>🚚 Fast Delivery</p>
          <p>💰 <strong>₹1,499/month</strong></p>
          <button>Subscribe Now</button>
        </div>

        <div className="plan vip" onClick={() => handleSubscribe("VIP")}>
          <h2>🌴 VIP Plan</h2>
          <p>✅ 10 Rare & Exotic Plants per Month</p>
          <p>📩 Personalized Plant Consultation</p>
          <p>🚚 Free Express Delivery</p>
          <p>🎁 Complimentary Gardening Kit</p>
          <p>💰 <strong>₹2,499/month</strong></p>
          <button>Subscribe Now</button>
        </div>
      </div>

      {selectedPlan && (
        <p className="selected-plan">
          ✅ You have selected the <strong>{selectedPlan}</strong> plan. Enjoy your plants! 🌿
        </p>
      )}
    </div>
  );
};

export default Subscription;
