const express = require("express");
const db = require("./src/database/config");
var cors = require("cors");
const router = require("./src/routes/accounts/signUp");
const signInRoute = require("./src/routes/accounts/signIn");
const books = require("./src/routes/books/index");
const cart = require("./src/routes/cart/index");
const orders = require("./src/routes/orders/index");
const connectDB = require("./src/database/config");
connectDB();

const app = express();

const port = 5000;
app.listen(port, () => {
  console.log(`App running at port: ${port}`);
});

const corsOpts = {
  origin: "http://localhost:3000", // Replace with your frontend domain
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOpts));
app.use(express.json());
app.use("/api/book-store", router);
app.use("/api/book-store", signInRoute);
app.use("/api/book-store/books", books);
app.use("/api/book-store/cart", cart);
app.use("/api/book-store/orders", orders);

// const verifyToken = (req, res, next) => {
//   const bearerToken = req.headers["authorization"];
//   if (typeof bearerToken !== undefined) {
//     const bearer = bearerToken.split(" ");
//     const token = bearer[1];
//     req.token = token;
//     next();
//   } else {
//     res.sendStatus(403);
//   }
// };
