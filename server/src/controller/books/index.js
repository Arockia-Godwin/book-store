const BooksModel = require("../../modal/books/index");
const jwt = require("jsonwebtoken");
// const verifyToken = require("../../controller/accounts/signIn");

const addBook = async (req, res) => {
  try {
    const payload = req.body;
    var data = await BooksModel.create(payload);
    res
      .status(200)
      .json({ data: data, status: true, message: "Book added successfully !" });
  } catch (err) {
    res.status(500).json({ message: err._message });
    console.log("error", err);
  }
};

const getAllBook = async (req, res) => {
  console.log("HEEE", req.headers);
  // const auth = await verifyToken(req.headers["authorization"], res);

  try {
    const data = await BooksModel.find();
    res.status(200).json({ data: data });
  } catch (err) {
    console.log(err);
  }
};

const getBookByName = async (req, res) => {
  console.log("REQQ", req.params);
  const name = req.params.name;
  try {
    const data = await BooksModel.find({
      name: { $regex: name, $options: "i" },
    });
    res.status(200).json({
      data: data,
      message: "Books fetched successfully !",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error !",
    });
  }
};

const verifyToken = (token, res) => {
  // Remove Bearer from string
  console.log("BEAR, token", token);
  token = token.replace(/^Bearer\s+/, "");
  console.log("BEAR, token1", token);

  if (token) {
    jwt.verify(
      token,
      "b22b547aeebb6fbb1396599bbc5eb132d5c105bbf105dae2cf01fba9a8d1a4b7",
      (err, decoded) => {
        console.log("BEAR, token2", err);
        console.log("BEAR, token4", decoded);
        if (err !== null) {
          return res.json({
            success: false,
            message: "Token not valid",
          });
        }
        return decoded;
      }
    );
  } else {
    console.log("BEAR, token3");
    return res.json({
      success: false,
      message: "Token not provided",
    });
  }
};

module.exports = {
  addBook,
  getAllBook,
  getBookByName,
};
