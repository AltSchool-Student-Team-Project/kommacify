import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToMongoDB from './database.js';

// MiddleWares;
import { isLoggedIn } from "./middlewares/isLoggedIn.js";

// Routes
import AuthRoutes from "./routes/auth.js";
import ProductRoutes from "./routes/product.js";

// Initialize Express
const app = express();

// Middlewares
dotenv.config();
app.use(cors({ origin: "*" }));
app.use(express.json());

// PORT
const PORT = process.env.PORT || 8080;


// Connect to MongoDB
connectToMongoDB();

// Auth Routes
app.use("/api/v1/auth", AuthRoutes);

// Products Routes
app.use("/api/v1/products", ProductRoutes);

// 404 Page
app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

// Listen to server
app.listen(PORT, () => {
  console.log(`[server] -- starting on PORT ${PORT}`);
});
