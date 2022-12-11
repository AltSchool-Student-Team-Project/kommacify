// Models
import ProductModel from "../models/product.js";

// Single Product - R
export const SingleProductController = async (req, res) => {
  res.status(200).send("Product Endpoint");
};

// New Product Controller - C
export const NewProductController = async (req, res) => {
  res.status(200).send("New Product Endpoint");
};

// Update Product Controller - U
export const UpdateProductController = async (req, res) => {
  res.status(200).send("Update Endpoint");
};

// Delete Product - D
export const DeleteProductController = async (req, res) => {
  res.status(200).send("Delete Endpoint");
};
