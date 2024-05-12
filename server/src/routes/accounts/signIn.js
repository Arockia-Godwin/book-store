const router = require("express").Router();
const controller = require("../../controller/accounts/signIn");

router.post("/signin", controller.signInUser);

module.exports = router;
