const signInModal = require("../../modal/accounts/signIn");
const signUpModal = require("../../modal/accounts/signUp");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connectDB = require("../../database/config");
connectDB();

exports.signInUser = async (req, res) => {
  try {
    const { email, password, phone } = req.body;
    console.log("USERRR", req.body);
    const user = await signUpModal.findOne({ phone });
    console.log("USERRR111", user);
    if (!user) {
      return res
        .status(400)
        .json({ status: false, message: "User not found !" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({
        status: false,
        message: "User name and password does not match !",
      });
    }
    console.log("HERE", req.body, user._id, passwordMatch);

    const token = jwt.sign(
      { userId: user._id, userName: user.email, userContact: user.phone },
      "b22b547aeebb6fbb1396599bbc5eb132d5c105bbf105dae2cf01fba9a8d1a4b7",
      {
        expiresIn: "1h",
      }
    );
    console.log("HERE", req.body, user);
    res.status(200).json({ token, status: true, message: "Login success !" });
  } catch (error) {
    res.status(500).json({ status: false, error: "Login failed" });
  }
};
