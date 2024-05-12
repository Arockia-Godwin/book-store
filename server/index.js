const express = require("express");
const db = require("./src/database/config");
var cors = require("cors");
const router = require("./src/routes/accounts/signUp");
const signInRoute = require("./src/routes/accounts/signIn");

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
