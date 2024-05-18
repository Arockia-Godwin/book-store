const router = require("express").Router();
const controller = require("../../controller/books/index");
const isAuthenticated = require("../../controller/books");
const authenticateToken = require("../helper/jwtConfig");

router.post("/add", authenticateToken, controller.addBook);
router.get("/list", authenticateToken, controller.getAllBook);
router.get("/filter/:name", authenticateToken, controller.getBookByName);

module.exports = router;
