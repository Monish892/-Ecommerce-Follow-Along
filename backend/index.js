const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


mongoose.connect("mongodb+srv://grmonishs65:2007@monish.pnlhe.mongodb.net/jadj", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Database connection failed:", err));

app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
