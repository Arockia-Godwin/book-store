const router = require("express").Router();
const controller = require("../../controller/cart/index");
const authenticateToken = require("../helper/jwtConfig");

router.post("/add", authenticateToken, controller.addOrder);
router.get("/list", authenticateToken, controller.getAllOrders);

module.exports = router;
