const express=require('express')
const router=express.Router()
const product = require('../models/user')

router.get('/api/my-products', async (req, res) => {
    try{
        const products = await product.find({mail:req.body.mail});
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }}
);

module.exports=router;


