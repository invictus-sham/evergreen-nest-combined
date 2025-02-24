import React from "react";
import { Link } from "react-router-dom";
import indoorImg from "../images/category-icon-indoor.jpg";
import medicinalImg from "../images/category-icon-medicinal.jpg";
import floweringImg from "../images/category-icon-flowering.jpg";
import "../styles.css"; // Ensure your styles file is imported

const CategoryPage = () => {
  return (
    <div className="category-page">
      <h1>Choose a Plant Category</h1>
      <div className="categories">
        <Link to="/category/indoor" className="category-item">
          <img src={indoorImg} alt="Indoor Plants" />
          <span>Indoor Plants</span>
        </Link>
        <Link to="/category/medicinal" className="category-item">
          <img src={medicinalImg} alt="Medicinal Plants" />
          <span>Medicinal Plants</span>
        </Link>
        <Link to="/category/flowering" className="category-item">
          <img src={floweringImg} alt="Flowering Plants" />
          <span>Flowering Plants</span>
        </Link>
      </div>
    </div>
  );
};

export default CategoryPage;
