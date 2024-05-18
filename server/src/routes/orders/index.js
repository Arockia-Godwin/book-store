const router = require("express").Router();
const controller = require("../../controller/orders/index");
const authenticateToken = require("../helper/jwtConfig");

router.post("/add", authenticateToken, controller.postOrder);
router.get("/list", authenticateToken, controller.getOrderList);

module.exports = router;
