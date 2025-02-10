import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 

const EditProductPage = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState({ name: '', description: '', price: '', image: '' });
    
    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((err) => console.error('Error fetching product data:', err));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`/api/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((updatedProduct) => {
                alert('Product updated successfully!');
            })
            .catch((err) => console.error('Error updating product:', err));
    };

    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    placeholder="Product Name"
                />
                <textarea
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="Price"
                />
                <input
                    type="text"
                    name="image"
                    value={product.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditProductPage;
