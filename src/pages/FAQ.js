import React, { useState, useEffect } from "react";
import "../styles/FAQ.css"; // Import CSS for styling

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQs - Plant Nursery"; // Change page title dynamically
  }, []);

  // FAQ Data (Updated with E-commerce Questions)
  const faqData = [
    {
      question: "How do I place an order?",
      answer: "Simply add your favorite plants to the cart and proceed to checkout!",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Credit/Debit Cards, UPI, Net Banking, and Cash on Delivery.",
    },
    {
      question: "Can I cancel my order after placing it?",
      answer: "Yes, you can cancel within 24 hours before it gets dispatched.",
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery takes 3-5 days, while express delivery takes 1-2 days.",
    },
    {
      question: "Do you provide plant care tips after purchase?",
      answer: "Yes! We send personalized plant care guides via email after your purchase.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Toggle FAQ function
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter FAQs based on search query
  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`faq-container ${darkMode ? "dark" : ""}`}>
      <div className="faq-header">
        <h1>🌿 Frequently Asked Questions</h1>
        <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
      
      <p>Find answers to your questions about orders, payments, and plant care.</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search for a question..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* FAQ List */}
      <div className="faq-list">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span>{openIndex === index ? "🔽" : "🔼"}</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No matching questions found. 😔</p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
