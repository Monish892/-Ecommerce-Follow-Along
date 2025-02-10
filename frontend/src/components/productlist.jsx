import { useEffect, useState } from "react";
import ProductCard from "./productcard"; 

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/my-products",{
        method: 'GET',
        headers: {
            'auth-token': `Bearer ${localStorage.getItem('auth-token')}`, 
    }}
)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.length > 0 ? (
        products.map((product) => <ProductCard key={product._id} product={product} />)
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductList;
