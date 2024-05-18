const OrderModel = require("../../modal/orders/index");
const cartModel = require("../../modal/cart/index");
// const BooksModel = require("../../modal/books/index");

const postOrder = async (req, res) => {
  console.log("REQQ", req.body);
  req.body.order.map(async (obj) => {
    let cart = await cartModel.findOne({ _id: obj._id });
    if (obj.quantity > cart.quantity) {
      res.status(400).json({ message: `Stock not available for ${obj.name}` });
      return;
    }
  });
  try {
    const payload = req.body;
    var data = await OrderModel.create(payload);
    res.status(200).json({
      data: data,
      status: true,
      message: "Order placed successfully !",
    });
  } catch (err) {
    res.status(500).json({ message: err.message || "Somrthing went wrong!" });
    console.log("error", err);
  }
};

const getOrderList = async (req, res) => {
  try {
    const data = await OrderModel.find();
    res.status(200).json({ data: data, message: "List fetched successfully" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  postOrder,
  getOrderList,
};
