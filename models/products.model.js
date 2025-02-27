import mongoose from "mongoose";
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      default: "This is the best product",
    },
    category: [],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;