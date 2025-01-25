import React from "react";
import ProductCard from "./productcard";
import "./Homepage.css"; 

const products = [
  { id: 1, name: "Product 1", image: "https://th.bing.com/th/id/OIP.T544Qdf-lY8u-zm_69RyDwAAAA?rs=1&pid=ImgDetMain", price: 29.99 },
  { id: 2, name: "Product 2", image: "https://th.bing.com/th/id/OIP.I0p7M8fqA-QsfCAWAgJ14gHaE5?pid=ImgDet&w=474&h=313&rs=1", price: 39.99 },
  { id: 3, name: "Product 3", image: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?cs=srgb&dl=footwear-leather-shoes-267320.jpg&fm=jpg", price: 49.99 },
  { id: 4, name: "Product 4", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", price: 50.99 },

];

function Homepage() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          productName={product.name}
          productImage={product.image}
          productPrice={product.price}
        />
      ))}
    </div>
  );
}

export default Homepage;
