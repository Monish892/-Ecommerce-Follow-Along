import React from "react";
import "./productcard.css"; 

function ProductCard({ productName, productImage, productPrice, product , onEdit }) {
  return (
    <div className="card">
      <img src={productImage} alt={productName} className="card-image" />
      <h2 className="card-title">{productName}</h2>
      <p className="card-price">${productPrice}</p>
      <button onClick={()=>onEdit(product)}>Edit</button>
    </div>
  );
}

export default ProductCard;
