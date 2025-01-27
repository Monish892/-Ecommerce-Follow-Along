const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const {createProduct, getProduct, getProductById, updateProduct, Deleteproduct}=require('./controllers/formcontroller')

const app = express();
app.post('./api/products',createProduct,getProduct,getProductById,updateProduct,Deleteproduct)
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/signup", userRoutes);  


mongoose.connect("mongodb+srv://grmonishs65:2007@monish.pnlhe.mongodb.net/Moniss")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Database connection failed:", err));



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
