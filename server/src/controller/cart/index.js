const OrderModel = require("../../modal/cart/index");

const addOrder = async (req, res) => {
  try {
    const payload = req.body;
    var data = await OrderModel.create(payload);
    res
      .status(200)
      .json({
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
    const data = await OrderModel.find();
    res.status(200).json({ data: data });
  } catch (err) {
    console.log(err);
  }
};

// const getOrderById = async (req, res) => {
//   console.log("REQQ", req.params);
//   const name = req.params.name;
//   try {
//     const data = await OrderModel.find({
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
