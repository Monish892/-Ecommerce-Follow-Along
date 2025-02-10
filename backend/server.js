const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const {createProduct, getProduct, getProductById, updateProduct, Deleteproduct}=require('./controllers/formcontroller')
const cors=require('cors')
const Product = require('./models/formmodels')
const productRoutes = require('./routes/productroutes')

const app = express();
app.post('./api/products',createProduct,getProduct,getProductById,updateProduct,Deleteproduct)
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/signup", userRoutes); 

app.use(cors())

app.get("/api/products", async (req, res) => {
  try{
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});


mongoose.connect("mongodb+srv://grmonishs65:2007@monish.pnlhe.mongodb.net/Moniss")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Database connection failed:", err));



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
