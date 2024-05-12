const router = require("express").Router();
const controller = require("../../controller/books/index");
const isAuthenticated = require("../../controller/books");

router.post("/add", controller.addBook);
router.get("/list", controller.getAllBook);
router.get("/filter/:name", controller.getBookByName);

module.exports = router;
