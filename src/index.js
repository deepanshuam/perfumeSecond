import express from "express";
import cors from "cors";

import productRoutes from "./routes/products.routes.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const app = express();
app.use(cors());

app.use(express.json());

// Connect to MongoDB
connectDB();

// Example route to send JSON response
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello, JSON response!" });
});

// Use product routes
app.use("/api/products", productRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
