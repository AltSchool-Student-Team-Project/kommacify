// Write the model here
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Name: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String
  },
  netWeight: {
    type: Number
  },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
