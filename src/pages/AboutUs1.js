import React, { useState } from "react";
import "../styles/AboutUs.css"; // Importing the CSS file

const AboutUs1 = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for success message
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    setSuccessMessage("Thank you for your feedback! 🌿");
    setFormData({ name: "", email: "", message: "" }); // Clear form
  };

  return (
    <div className="about-container">
      <div className="about-banner">
        <h1>Welcome to Green Nursery 🌿</h1>
        <p>Bringing nature closer to your home, one plant at a time!</p>
      </div>

      <section className="about-content">
        <h2>🌱 Our Mission</h2>
        <p>
          At Green Nursery, we believe that every home should be filled with the beauty of nature.
          Our mission is to make gardening accessible, easy, and enjoyable for everyone,
          whether you're a beginner or an expert.
        </p>

        <h2>🛍 Our Products</h2>
        <p>We offer a wide variety of plants and gardening essentials:</p>
        <ul>
          <li>✔ Indoor & Outdoor Plants</li>
          <li>✔ Flowering Plants & Succulents</li>
          <li>✔ Organic Seeds & Gardening Tools</li>
          <li>✔ Eco-friendly Pots & Fertilizers</li>
        </ul>

        <h2>🌍 Sustainability Efforts</h2>
        <p>
          We care about the environment! Our products are sourced responsibly, and we support 
          eco-friendly gardening practices. Our nursery uses biodegradable packaging 
          and promotes organic fertilizers to reduce carbon footprint.
        </p>

        <h2>💚 Customer Stories</h2>
        <p>
          "I purchased a set of indoor plants from Green Nursery, and they completely transformed my living space! 
          The plants were healthy and beautifully packed." – <strong>Ayesha, Mumbai</strong>
        </p>
        <p>
          "Their gardening tools are top-notch! I love how they also provide care tips with every purchase." – 
          <strong>Rahul, Bangalore</strong>
        </p>

        {/* Feedback Form */}
        <div className="feedback-section">
          <h2>💬 We Value Your Feedback</h2>
          <p>Share your experience with us! 🌱</p>

          {successMessage && <p className="success-message">{successMessage}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Feedback"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutUs1;
