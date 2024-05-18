const { Schema, model } = require("mongoose");

const mySchema = {
  order: [
    {
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
    },
  ],
  total: {
    type: Number,
  },
};

const OrderModel = model("Orders", mySchema);
module.exports = OrderModel;
