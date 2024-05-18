const { Schema, model } = require("mongoose");

const mySchema = {
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
};

const CartModel = model("Cart", mySchema);
module.exports = CartModel;
