const express = require('express');
const Product = require('./models/formmodels'); 
const router = express.Router();

router.put('/api/products/:id', async (req, res) => {
    const { id } = req.params; 
    const { name, description, price, image } = req.body; 

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, description, price, image },
            { new: true } 
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error updating product' });
    }
});

module.exports = router;
