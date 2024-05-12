const router = require("express").Router();
const controller = require("../../controller/accounts/signUp");

router.post("/signup", controller.createUser);

module.exports = router;
