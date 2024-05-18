const signUpModal = require("../../modal/accounts/signUp");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    // get the task from the body
    const data = req?.body;

    const { email, phone } = data;

    var existingEmail = await signUpModal.findOne({ email }).exec();
    var existingPhone = await signUpModal.findOne({ phone }).exec();

    if (existingEmail || existingPhone) {
      return res.status(400).json({
        success: false,
        message: `${
          existingEmail ? "Email Id" : "Phone nummber"
        } already exists!!`,
      });
    }

    if (data.password !== data.confirmPassword) {
      return res.status(400).json({
        success: false,
        message: `Password and confirm password does not match`,
      });
    }

    const saltRounds = 10;

    await bcrypt
      .hash(data.password, saltRounds)
      .then((hash) => {
        data.password = hash;
        console.log("Hash ", hash);
      })
      .catch((err) => console.error(err.message));

    await bcrypt
      .hash(data.confirmPassword, saltRounds)
      .then((hash) => {
        data.confirmPassword = hash;
        console.log("Hash ", hash);
      })
      .catch((err) => console.error(err.message));

    console.log("Hash ", data);

    await signUpModal
      .create(data)
      .then((userData) => {
        if (!userData)
          return res.status(404).json({
            success: false,
            message: "Task creation failed",
            error: "Unable get created task",
          });
        res.status(200).json({
          success: true,
          userData,
          message: "User added successfully!",
        });
      })
      .catch((error) => {
        res.status(404).json({
          success: false,
          error: error.message || "Something went wrong!",
        });
      });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
