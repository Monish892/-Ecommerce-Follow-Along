import React from "react";
import "./productcard.css"; 

function ProductCard({ productName, productImage, productPrice }) {
  return (
    <div className="card">
      <img src={productImage} alt={productName} className="card-image" />
      <h2 className="card-title">{productName}</h2>
      <p className="card-price">${productPrice}</p>
    </div>
  );
}

export default ProductCard;
