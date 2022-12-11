import express from "express";

// Routes Controllers
import {
  SingleProductController,
  NewProductController,
  UpdateProductController,
  DeleteProductController,
} from "../controllers/products.js";

const router = express.Router();

// Single Product - R
router.get("/:productId", SingleProductController);

// New Product Controller - C
router.post("/", NewProductController);

// Update Product Controller - U
router.patch("/:productId", UpdateProductController);

// Delete Product - D
router.delete("/:productId", DeleteProductController);

export default router;
