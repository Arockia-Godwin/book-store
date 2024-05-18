const router = require("express").Router();
const controller = require("../../controller/orders/index");

router.post("/add", controller.postOrder);
router.get("/list", controller.getOrderList);

module.exports = router;
