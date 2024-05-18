const OrderModel = require("../../modal/orders/index");
// const BooksModel = require("../../modal/books/index");

const postOrder = async (req, res) => {
  try {
    const payload = req.body;
    var data = await OrderModel.create(payload);
    res.status(200).json({
      data: data,
      status: true,
      message: "Order placed successfully !",
    });
  } catch (err) {
    res.status(500).json({ message: err._message });
    console.log("error", err);
  }
};

const getOrderList = async (req, res) => {
  try {
    const data = await OrderModel.find();
    res.status(200).json({ data: data });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  postOrder,
  getOrderList,
};
