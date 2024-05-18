const CartModel = require("../../modal/cart/index");
// const BooksModel = require("../../modal/books/index");

const addOrder = async (req, res) => {
  // console.log("REQQQ", req.body);
  // let order = await BooksModel.findOne({ _id: req.body.books[0]._id });
  // console.log("ORDER", order);
  try {
    const payload = req.body;
    var data = await CartModel.create(payload);
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

const getAllOrders = async (req, res) => {
  try {
    const data = await CartModel.find();
    res.status(200).json({ data: data });
  } catch (err) {
    console.log(err);
  }
};

// const getOrderById = async (req, res) => {
//   console.log("REQQ", req.params);
//   const name = req.params.name;
//   try {
//     const data = await CartModel.find({
//       name: { $regex: name, $options: "i" },
//     });
//     res.status(200).json({
//       data: data,
//       message: "Books fetched successfully !",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "Internal server error !",
//     });
//   }
// };

module.exports = {
  addOrder,
  getAllOrders,
};
