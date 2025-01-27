const Product = require('../models/formmodels');

const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body); 
    const savedProduct = await product.save(); 
    res.status(201).json({
      message: "Product added successfully",
      product: savedProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error saving product",
      error: error.message,
    });
  }
};

const getProduct=async (req,res)=>{
    try{
        const product=await product.find()
        res.status(500).json({data:product});
    } catch(error){
        res.status(500).json({message:error.message})
    }
}

const getProductById= async (req,res)=>{
    try{
        const id=req.params.id;
        const products=await products.findById()
        if(products){
            res.status(200).json({message:'data found',data:products})
        }
        res.status(500).json({message:"product not found"})
    } catch(error){
        res.status(500).json({message:error.message})

    }
}

const updateProduct=async(req,res)=>{
    try{
        const product=await product.findByIdAndUpdate(req.params.id,req.body)
    } catch(error){
        res.status(500).json({message:error.message})
    }
}

const Deleteproduct=async(req,res)=>{
    try{
        const product=await product.findByIdAndDelete(req.params.id)

    } catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports = {
  createProduct,
  getProduct,
  getProductById,
  updateProduct,
  Deleteproduct,

};

