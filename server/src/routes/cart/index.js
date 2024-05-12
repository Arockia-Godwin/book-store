const router = require("express").Router();
const controller = require("../../controller/cart/index");

router.post("/add", controller.addOrder);
router.get("/list", controller.getAllOrders);

module.exports = router;
