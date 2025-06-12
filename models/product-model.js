const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  image: {
    type: String,
  },

  rating: {
    type: Number,
    default: 0,
  },
  qty: {
    type: Number,
    required: true,
    default: 1,
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
